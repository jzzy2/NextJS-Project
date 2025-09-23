# what we going to learn here is how to implement the github login after we setup the better auth for our website!

1. first we need to create a async fucntion kung san located yong button natin
   kung san mag lologin yong mismogn user sa github
   and we need to use the async function for that
   async function signWithGithub() {
   await authClient.signIn;
   }

another thign that you notice that we need to import the authClient.signIn
not signup why? since they are using github hindi na matter yon sa madaling salita
github is a Oooth off provider so when it comes of doing that there no such thing as signing up the user
so so yan yogn reason why we should use the signIn

and the signUp methods only works from with email and password

so here the example of github code for sign in

<!--
  async function signWithGithub() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          toast.success("Sign in with Github, you will be redirected....");
        },
        onError: (error) => {
          toast.error(error.error.message);
        },
      },
    });
  }


 -->

1. una gumawa tayo nang function na async to with a name of SignWithGithub
   next nag import tayo nang authClient from import { authClient } from "@/lib/auth-client";
   so yan yong nag setup natin kanina next one is
   we usesignIn.social so signIn since we are usig ooth oof privider so mandatory na sign in sya
   since our provider is github we add github and the next is the callbackUrl

   so yong callbackURL is the one will direct the user to the root website kung san natin sya
   gusto dumating , and yong fetch option naman is basically a message wether the message is
   success or failed!

   and then import some toaster from components ui

   yong toast natin nang galing yan sa sonner

   ReDesign na button with additional functionality for example we want disable our button while
   try to request for login! one of the best solution is use the transition hook!
   so makikita mo to sa documentation ni react search the useTransition

So here is the final output of the features

<!--
  const [githubPending, startGithubTransition] = useTransition();

  async function signWithGithub() {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Sign in with Github, you will be redirected....");
          },
          onError: (error) => {
            toast.error(error.error.message);
          },
        },
      });
    });
  }

 -->

"it waits for the async code to finish until it's finished! and that way we
can avoid multiple requests at the same time."

The more correct version:
👉 useTransition does not directly "wait" or block requests.
Instead:
It marks the update as non-urgent, so React can keep the UI responsive.
The pending flag lets you prevent duplicate clicks (e.g., disable the button).
This indirectly avoids multiple requests because you can check githubPending before allowing another sign-in attempt.

useTransition = "Let React know this is a background/low-priority update."
You can use pending to show loaders or disable UI while it runs.

   <CardContent className="flex flex-col gap-4">
        <Button
          disabled={githubPending}
          onClick={signWithGithub}
          className="w-full cursor-pointer"
          variant="outline"
        >
          <GithubIcon className="size-4" />
          Sign with Github
        </Button>

what this code does if our request is current runnign then the disable is true
after non mag false na uli sya indicate na powede na uli mag request!

 <CardContent className="flex flex-col gap-4">
        <Button
          disabled={githubPending}
          onClick={signWithGithub}
          className="w-full cursor-pointer"
          variant="outline"
        >
          {githubPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <GithubIcon className="size-4" />
              Sign in with Github
            </>
          )}
        </Button>

so this is the fulll code for implementing the disable and loading process
so dito this will execute base on the condition of the code
so we have this fragment btw if we did not implemet the use client then this will not work since
we are usign reacthooks

# introduction of server components and client components

to kknow more about this better to read documentation

# Passing data from Server to Client Components

so this one of the best way of passing the data from the client
ang goal mo lang is to distinguish which one na dapat mo ilgay sa
server and which one is the thing nallagay mo sa client

<!--
    import LikeButton from '@/app/ui/like-button'
    import { getPost } from '@/lib/data'

    export default async function Page({
      params,
    }: {
      params: Promise<{ id: string }>
    }) {
      const { id } = await params
      const post = await getPost(id)

      return (
        <div>
          <main>
            <h1>{post.title}</h1>
            {/* ... */}
            <LikeButton likes={post.likes} />
          </main>
        </div>
      )
    }
 -->

'use client'

export default function LikeButton({ likes }: { likes: number }) {
// ...
}

so this one of the best way of passing the data from the client
ang goal mo lang is to distinguish which one na dapat mo ilgay sa
server and which one is the thing nallagay mo sa client

# remember when we mark a component as a client componentsor a page

then we are not be able to fetch data anymore because isa nasyang client components
and it does not only run on the server side anymore!!!!!!

and dapat natin maalala yan again once na nag declare kanana nang use client sa mismong page or component
we can no longer fetch data from the client

We will encounter some internal server error so what is the problem?
the reason we encounter this RROR [Better Auth]: Model verification does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'

# SERVER_ERROR: [Error [BetterAuthError]: Model verification does not exist in the database. If you haven't generated the Prisma client, you need to run 'npx prisma generate'] {

cause: undefined
}

dahil hindi natin na push yong mismong data table sa prisma na ginawa natin sa prisma or sa mdaling salita
we did not sync our prisma

so to be able to update yong ginawa nating table need natin uli i push yong latest schema prisma natin
to be able to do that just type npx prisma db push -> this will push or create a table to our neon db

now this will also finally work!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
