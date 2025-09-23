import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env"; // this is env from zod that we install
/*
 * By importing the prima from db  ma fifix nanatin yong problem natin dito sa loob nang
 * data base  -> prisma natin
 *
 *
 * basically what we saying here as string is yong value nnag auth and clientSecret is as a string!
 */
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    github: {
      //  so here after we import the env from zod we dont need to mark it as a string kasi na chcheck na nya!
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    },
  },
});
