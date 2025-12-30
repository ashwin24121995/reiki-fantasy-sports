/**
 * Authentication API Routes for REIKI ENERGY
 * Handles user registration, login, and authentication
 */

import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import {
  registerUser,
  loginUser,
  getUserById,
  updatePassword,
  getBannedStates,
  verifyToken,
} from "./auth";

// Validation schemas
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format").optional(),
  state: z.string().min(2, "State is required"),
  ageVerified: z.boolean(),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

const updatePasswordSchema = z.object({
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
});

export const authRouter = router({
  /**
   * Register new user
   */
  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input }) => {
      return await registerUser(input);
    }),

  /**
   * Login user
   */
  login: publicProcedure
    .input(loginSchema)
    .mutation(async ({ input }) => {
      return await loginUser(input.email, input.password);
    }),

  /**
   * Get current authenticated user
   */
  me: publicProcedure.query(async ({ ctx }) => {
    // Check if there's a token in the request
    const authHeader = ctx.req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { user: null };
    }

    const token = authHeader.replace('Bearer ', '');
    const decoded = verifyToken(token);

    if (!decoded) {
      return { user: null };
    }

    const user = await getUserById(decoded.id);
    
    if (!user) {
      return { user: null };
    }

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    return { user: userWithoutPassword };
  }),

  /**
   * Logout user (client-side token removal)
   */
  logout: publicProcedure.mutation(() => {
    return { success: true, message: 'Logged out successfully' };
  }),

  /**
   * Update password (protected route)
   */
  updatePassword: protectedProcedure
    .input(updatePasswordSchema)
    .mutation(async ({ ctx, input }) => {
      if (!ctx.user) {
        throw new Error('Unauthorized');
      }

      return await updatePassword(ctx.user.id, input.newPassword);
    }),

  /**
   * Get user profile (protected route)
   */
  profile: protectedProcedure.query(async ({ ctx }) => {
    if (!ctx.user) {
      throw new Error('Unauthorized');
    }

    const user = await getUserById(ctx.user.id);

    if (!user) {
      throw new Error('User not found');
    }

    // Remove password from response
    const { password, ...userWithoutPassword } = user;

    return { user: userWithoutPassword };
  }),

  /**
   * Get list of banned states
   */
  bannedStates: publicProcedure.query(() => {
    return { states: getBannedStates() };
  }),

  /**
   * Check if email is available
   */
  checkEmail: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      const { getUserByEmail } = await import('./auth');
      const user = await getUserByEmail(input.email);
      return { available: !user };
    }),
});
