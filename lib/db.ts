// you will encounter this error since the code is no longer updated!
// to be able to fix it need natin i update yogn import but we can still proceed to setup our better auth!
// import { PrismaClient } from "@prisma/client";

// after we activate our prisma we will now able to make this work
// ang kaylangan pala is to make sure that we  push the prisma or parang mapag connect yong prisma
// and neon to be able this worjk

import { PrismaClient } from "./generated/prisma";
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
