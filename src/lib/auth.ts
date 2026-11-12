import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://main.dwks2aqy4w57r.amplifyapp.com",
    process.env.BETTER_AUTH_URL || "http://localhost:3000"
  ],
  advanced: {
    generateId: false,
  },
})

/**
 * Simple admin credentials validator for privileged console operations.
 */
export async function validateAdmin(email: string, password: string): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    return false;
  }

  return email === adminEmail && password === adminPassword;
}

export type Session = typeof auth.$Infer.Session