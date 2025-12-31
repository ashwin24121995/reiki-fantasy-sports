/**
 * tRPC Context - Handles authentication for each request
 * Uses JWT tokens from cookies or Authorization header
 */

import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import type { User } from "../../drizzle/schema";
import { verifyToken } from "../auth";
import { getDb } from "../db";
import { users } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { COOKIE_NAME } from "@shared/const";

export type TrpcContext = {
  req: CreateExpressContextOptions["req"];
  res: CreateExpressContextOptions["res"];
  user: User | null;
};

/**
 * Authenticate user from JWT token in cookie or Authorization header
 */
async function authenticateRequest(req: CreateExpressContextOptions["req"]): Promise<User | null> {
  try {
    // Try to get token from cookie first
    let token = req.cookies?.[COOKIE_NAME];
    
    // If not in cookie, try Authorization header
    if (!token) {
      const authHeader = req.headers.authorization;
      if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.substring(7);
      }
    }
    
    if (!token) {
      return null;
    }
    
    // Verify JWT token
    const decoded = verifyToken(token);
    if (!decoded || !decoded.id) {
      return null;
    }
    
    // Get user from database
    const db = await getDb();
    if (!db) {
      return null;
    }
    
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, decoded.id))
      .limit(1);
    
    return user || null;
  } catch (error) {
    console.error('[Auth] Error authenticating request:', error);
    return null;
  }
}

export async function createContext(
  opts: CreateExpressContextOptions
): Promise<TrpcContext> {
  const user = await authenticateRequest(opts.req);

  return {
    req: opts.req,
    res: opts.res,
    user,
  };
}
