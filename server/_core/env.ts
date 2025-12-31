/**
 * Environment Configuration for REIKI Fantasy Sports
 * Railway deployment compatible
 */

export const ENV = {
  // Database
  databaseUrl: process.env.DATABASE_URL ?? "",
  
  // Authentication
  jwtSecret: process.env.JWT_SECRET ?? "",
  
  // Cricket API
  cricketApiKey: process.env.CRICKET_API_KEY ?? "",
  
  // Server Configuration
  port: parseInt(process.env.PORT ?? "3000"),
  nodeEnv: process.env.NODE_ENV ?? "development",
  isProduction: process.env.NODE_ENV === "production",
  
  // Frontend URL (for CORS)
  frontendUrl: process.env.FRONTEND_URL ?? "http://localhost:3000",
};
