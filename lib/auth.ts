import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "./db";

/*
 * By importing the prima from db  ma fifix nanatin yong problem natin dito sa loob nang
 * data base  -> prisma natin
 */
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
});
