"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon, Loader } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useTransition } from "react";

export default function LoginPage() {
  const [githubPending, startGithubTransition] = useTransition();

  /*
    is recommed
  */

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
            toast.error("Internal server error");
          },
        },
      });
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
      </CardHeader>

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

        <div
          className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 
        after:z-0 after:flex after:items-center after:border-t after:border-border"
        >
          <span className="relative z-10 bg-card px-2">or continue with</span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <Button className="">Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  );
}
