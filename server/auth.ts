/**
 * Custom JWT Authentication Service for REIKI ENERGY
 * Replaces Manus OAuth with standard email/password authentication
 */

import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { eq } from 'drizzle-orm';
import { getDb } from './db';
import { users, type User, type InsertUser } from '../drizzle/schema';

// JWT Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'reiki-energy-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d'; // Token valid for 7 days

// Banned states for compliance
const BANNED_STATES = [
  'Andhra Pradesh',
  'Assam',
  'Nagaland',
  'Odisha',
  'Sikkim',
  'Telangana'
];

/**
 * Generate JWT token for authenticated user
 */
export function generateToken(user: User): string {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

/**
 * Verify and decode JWT token
 */
export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

/**
 * Hash password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

/**
 * Compare plain password with hashed password
 */
export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

/**
 * Check if user is from a banned state
 */
export function isStateBanned(state: string): boolean {
  return BANNED_STATES.some(
    bannedState => state.toLowerCase().trim() === bannedState.toLowerCase().trim()
  );
}

/**
 * Calculate age from date of birth
 */
export function calculateAge(dateOfBirth: string): number {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Validate age requirement (18+)
 */
export function isAgeValid(dateOfBirth: string): boolean {
  const age = calculateAge(dateOfBirth);
  return age >= 18;
}

/**
 * Register new user
 */
export async function registerUser(userData: {
  name: string;
  email: string;
  password: string;
  phone?: string;
  dateOfBirth: string;
  state: string;
  ageVerified: boolean;
}): Promise<{ success: boolean; message: string; user?: User; token?: string }> {
  const db = await getDb();
  
  if (!db) {
    return { success: false, message: 'Database connection failed' };
  }

  try {
    // Validate required fields
    if (!userData.name || !userData.email || !userData.password || !userData.dateOfBirth || !userData.state) {
      return { success: false, message: 'All required fields must be provided' };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      return { success: false, message: 'Invalid email format' };
    }

    // Validate password strength
    if (userData.password.length < 8) {
      return { success: false, message: 'Password must be at least 8 characters long' };
    }

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, userData.email))
      .limit(1);

    if (existingUser.length > 0) {
      return { success: false, message: 'Email already registered' };
    }

    // Validate age (18+)
    if (!isAgeValid(userData.dateOfBirth)) {
      return { success: false, message: 'You must be 18 years or older to register' };
    }

    // Check if state is banned
    if (isStateBanned(userData.state)) {
      return {
        success: false,
        message: `Registration is not available in ${userData.state} due to government compliance`
      };
    }

    // Hash password
    const hashedPassword = await hashPassword(userData.password);

    // Create user
    const newUser: InsertUser = {
      name: userData.name,
      email: userData.email,
      password: hashedPassword,
      phone: userData.phone || null,
      dateOfBirth: userData.dateOfBirth,
      state: userData.state,
      ageVerified: userData.ageVerified,
      role: 'user',
    };

    await db.insert(users).values(newUser);

    // Fetch created user
    const createdUser = await db
      .select()
      .from(users)
      .where(eq(users.email, userData.email))
      .limit(1);

    if (createdUser.length === 0) {
      return { success: false, message: 'Failed to create user' };
    }

    const user = createdUser[0];

    // Generate JWT token
    const token = generateToken(user);

    return {
      success: true,
      message: 'Registration successful',
      user,
      token
    };
  } catch (error) {
    console.error('[Registration Error]', error);
    return { success: false, message: 'Registration failed. Please try again.' };
  }
}

/**
 * Login user
 */
export async function loginUser(
  email: string,
  password: string
): Promise<{ success: boolean; message: string; user?: User; token?: string }> {
  const db = await getDb();
  
  if (!db) {
    return { success: false, message: 'Database connection failed' };
  }

  try {
    // Validate inputs
    if (!email || !password) {
      return { success: false, message: 'Email and password are required' };
    }

    // Find user by email
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (result.length === 0) {
      return { success: false, message: 'Invalid email or password' };
    }

    const user = result[0];

    // Compare password
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return { success: false, message: 'Invalid email or password' };
    }

    // Update last signed in
    await db
      .update(users)
      .set({ lastSignedIn: new Date() })
      .where(eq(users.id, user.id));

    // Generate JWT token
    const token = generateToken(user);

    return {
      success: true,
      message: 'Login successful',
      user,
      token
    };
  } catch (error) {
    console.error('[Login Error]', error);
    return { success: false, message: 'Login failed. Please try again.' };
  }
}

/**
 * Get user by ID
 */
export async function getUserById(userId: number): Promise<User | null> {
  const db = await getDb();
  
  if (!db) {
    return null;
  }

  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error('[Get User Error]', error);
    return null;
  }
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  const db = await getDb();
  
  if (!db) {
    return null;
  }

  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error('[Get User Error]', error);
    return null;
  }
}

/**
 * Update user password
 */
export async function updatePassword(
  userId: number,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  const db = await getDb();
  
  if (!db) {
    return { success: false, message: 'Database connection failed' };
  }

  try {
    // Validate password
    if (newPassword.length < 8) {
      return { success: false, message: 'Password must be at least 8 characters long' };
    }

    // Hash new password
    const hashedPassword = await hashPassword(newPassword);

    // Update password
    await db
      .update(users)
      .set({ password: hashedPassword, updatedAt: new Date() })
      .where(eq(users.id, userId));

    return { success: true, message: 'Password updated successfully' };
  } catch (error) {
    console.error('[Update Password Error]', error);
    return { success: false, message: 'Failed to update password' };
  }
}

/**
 * Get list of banned states
 */
export function getBannedStates(): string[] {
  return BANNED_STATES;
}
