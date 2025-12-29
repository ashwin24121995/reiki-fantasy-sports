import { getSessionCookieOptions } from "./_core/cookies";
import { COOKIE_NAME } from "@shared/const";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { cricketRouter } from "./cricketRouters";
import { teamsRouter } from "./teamsRouters";
import { userRouter } from "./userRouters";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getDb } from "./db";
import { users } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { generateToken } from "./auth";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  cricket: cricketRouter,
  teams: teamsRouter,
  user: userRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    
    register: publicProcedure
      .input(z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        state: z.string().optional(),
        ageVerified: z.boolean().refine(val => val === true, "You must be 18+ to register"),
      }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database connection failed",
          });
        }

        // Check for banned states
        const bannedStates = ["Andhra Pradesh", "Assam", "Nagaland", "Odisha", "Sikkim", "Telangana"];
        if (input.state && bannedStates.includes(input.state)) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Fantasy sports are not available in your state due to local regulations.",
          });
        }

        // Check if user already exists
        const existingUser = await db.select().from(users).where(eq(users.email, input.email)).limit(1);
        if (existingUser.length > 0) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "User with this email already exists",
          });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(input.password, 10);

        // Create user
        const [newUser] = await db.insert(users).values({
          name: input.name,
          email: input.email,
          password: hashedPassword,
          state: input.state,
          ageVerified: input.ageVerified,
        }).$returningId();

        return {
          success: true,
          message: "Registration successful! Please login.",
          userId: newUser.id,
        };
      }),

    login: publicProcedure
      .input(z.object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(1, "Password is required"),
      }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database connection failed",
          });
        }

        // Find user
        const [user] = await db.select().from(users).where(eq(users.email, input.email)).limit(1);
        
        if (!user) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid email or password",
          });
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(input.password, user.password);
        if (!isValidPassword) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid email or password",
          });
        }

        // Generate JWT token
        const token = generateToken(user);

        // Set cookie
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, token, cookieOptions);

        return {
          success: true,
          message: "Logged in successfully!",
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
        };
      }),

    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
