# this content is about how to setup Auth using Prisma and Neon DB for our better authn

step 1

1. first we need to install the -> npm add better-auth, this allow us to proceed to the next step
2. Create .env file to be able to set-up the requirements that we need usually makikita mo to sa documentation

- the auth_secret keys are generated in better_auth
  -> Remember hindi powede masama si .env sa pag push natin sa github this will allow the hacker
  to by pass our application so to avoid that we need to use the gitignore
  BETTER_AUTH_SECRET= this_is_secret_key_generated_from_Better_auth
- the localhost300 is the root of our website natin.
  BETTER_AUTH_URL=http://localhost:3000

3. the next step is to create a file -> name lib
   dito natin lalagy yong auth.ts natin or yong magigign script to be able to install yong better auth
   so nada documentation padin to so recommended na ilgayo yong mismong auth.ts natin
   sa lib folder or utils folder and copy the code

this is the code that we going to input inside our auth.ts file!
import { betterAuth } from "better-auth";
export const auth = betterAuth({
//...
});

# remember right now we cannot do this in this current approach

- the reason we cannot do this we need to setup our db which is prisma and our neon cloude
  import { betterAuth } from "better-auth";
  import { prismaAdapter } from "better-auth/adapters/prisma";
  // If your Prisma file is located elsewhere, you can change the path
  import { PrismaClient } from "@/generated/prisma";
  const prisma = new PrismaClient();
  export const auth = betterAuth({
  database: prismaAdapter(prisma, {
  provider: "sqlite", // or "mysql", "postgresql", ...etc
  }),
  });

4.

# Setting up the prisma to be able to proceed to the next proceed in auth

the first thing we need to do to be able to work the code on the number 3 is to setup the prisma
para magawa natin yon first we need to install the prisma using the
npm i or install prisma -> this will allow us to have an prisma inside of our code

the next that you need to install is npm i -d prisma
this will install a prisma as a development and once na na install nanatin to
we can now initialize the Prisma by doing this npm prisma init
and the next step is follow the requirements in prisma,
this will also give us some prisma url na makikita nsa .env

# this will generate as soon as you init the prisma

# DATAzdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbXBsYXRlMT9zc2xtb2RlPWRpc2FibGUmY29ubmVjdGlvbl9saW1pdD0xJmNvbm5lY3RfdGltZW91dD0wJm1heF9pZGxlX2Nvbm5lY3Rpb25fbGlmZXRpbWU9MCZwb29sX3RpbWVvdXQ9MCZzaW5nbGVfdXNlX2Nvbm5lY3Rpb25zPXRydWUmc29ja2V0X3RpbWVvdXQ9MCIsIm5hbWUiOiJkZWZhdWx0Iiwic2hhZG93RGF0YWJhc2VVcmwiOiJwb3N0Z3JlczovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1MTIxNS90ZW1wbGF0ZTE_c3NsbW9kZT1kaXNhYmxlJmNvbm5lY3Rpb25fbGltaXQ9MSZjb25uZWN0X3RpbWVvdXQ9MCZtYXhfaWRsZV9jb25uZWN0aW9uX2xpZmV0aW1lPTAmcG9vbF90aW1lb3V0PTAmc2luZ2xlX3VzZV9jb25uZWN0aW9ucz10cnVlJnNvY2tldF90aW1lb3V0PTAifQ"

this url natin is not actually a read db this will only allow us to be able to setup our prisma
so what we going to do is to use the NEON this also support our postgres
so that is the thing that will generate we can also remove that if we want to use another db which what we going to do
gagamit tayo nang neon to be

also we can see some prisma folder sa coding enviroment natin sa loob may makiktia tayo na
scheme.prisma

5.

# Setting up the NeonDB

first login ka muna then after mo mag login
find the -> New Project
Create Project name your DB
we can use AWS or azure

and the next step is to be able to connect the prisma and our neon we need to click the connect
then since we are using postgres then we need to type the postgres!
and then find the Prisma db since yon yong ginagamit natin then just copy the link na binigay satin
ni neon and then go to .env and paste it

now let's go back in better auth
the next step now is to implement the number 3 kanina

we need to import the
import { prismaAdapter } from "better-auth/adapters/prisma"; -> you can see this in documentation
then copy paste the
database: prismaAdapter(prisma, {
provider: "postgresql", // or "mysql", "postgresql", ...etc
}),
since we are using postgres select is as our db we will encounter some problem his
which is the -> prisma <- this

for using the ORM prima next js recommended na mag basa ka nang documentation about this
by reading the documentation
https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help -> dito ma lolocate yong
best practice sa pag implement nung ORM

basically this will tell us that we should avoid creating multiplle prisma client
dahil yon sa next js hot-reloading feature in development so kung babasahin natin yong documentation
Next.js's hot-reloading feature reloads modules frequently to reflect code change instatnly. However, this can lead
to multiple instances of prisma client being created m which consumes resources and might cause unexpected behavior

so ang recommed dation is to implement this code
so pinangalanan natin sya nang db.ts

-> you will encounter this error since the code is no longer updated!
-> to be able to fix it need natin i update yogn import but we can still proceed to setup our better auth!
-> import { PrismaClient } from "@prisma/client";

-> after we activate our prisma we will now able to make this work
-> ang kaylangan pala is to make sure that we push the prisma or parang mapag connect yong prisma
-> and neon to be able this worjk

# Remember this will cause as an error dahil yong youtube is may nakalimutan gawin in this is now the step by step

# how to fix it

to be able to fix this we need to able to add the prismaClient to generated prisma but to do that
we need to connect our neon to the prisma first para magawa natin to!
so this is the recommeded solution to avoid that problem is by implementing this!
import { PrismaClient } from "./generated/prisma";
const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

# step to fix the prisma error

the error that we encounter here we will only fix pag may db na tayo
db file na tayo which is we going to import the code

import { prisma } from "./db"; -> the db is the file from prisma na best practice tas nag import lang tayo
to be able our prisma work

import { prismaAdapter } from "better-auth/adapters/prisma"; -> you can see this in documentation
then copy paste the
database: prismaAdapter(prisma, {
provider: "postgresql", // or "mysql", "postgresql", ...etc
}),
since we are using postgres select is as our db we will encounter some problem his
which is the -> prisma <- this

# now in this time we encounter a problem yong problem na ito is basically yong db.ts natin

# hindi na currently dont import yong PrismaClient natin dahil in this situation kahit na na install nanatin yong prisma

wala padin tayong prisma client so how do we fix this?
first we need to create the schema so para again para makagawa tayo nang prisma client
we first we need to push our schema

so para magawa natin yon need muna natin gumawa nang dommy na table
we can do this

-> sample test model so we can install our better-auth/clie generate!
-> we can now delete this as soon as we able to activate the better-auth/clie generated
-> model Test {
-> id String @id @default(uuid())
-> test String
-> }

next step is to use the npm prisma db push
this will allow us to push our schema directly in our neon db!

the

so to be able to check if okey na tayo go to neon website make sure naka login ka
find table and then as soon as nakita mo na yong table, next step is import the
PrismaClient in our generated/prisma file this will only appear pag nang success yong pag push natin sa neon
after that we can now proceed to the next step.

and btw ang laman nang generated file basically is yong schemas natiN!

na ginawa natin oks na yon we can now proceed to the next step which is install our better-auth/cli generate!
after this success our scehema prisma will generate a new tons of model
