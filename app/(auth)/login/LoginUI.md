What we did here is to create a login UI

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
export default function LoginPage() {
return (
<Card>
<CardHeader>
<CardTitle className="text-xl">Welcome back!</CardTitle>
<CardDescription>Login with your Github Email Account</CardDescription>
</CardHeader>

      <CardContent>
        <Button className="w-full cursor-pointer" variant="outline">
          <GithubIcon className="size-4" />
          Sign with Github
        </Button>
      </CardContent>
    </Card>

);
}

wat we did here is basically import that we download inside the shadcn which cards button and
dapat mog malamn na a as soon as you install the shadcn meron natin 3rd party install na tinatwag na lucide
this lucide is for icons this allow us to create i con without importinganything

Card -> explain
yong nakikita nma natin sa Card basically part sya nang Card natin if you want to understand more
about this you have to read the documentaion in shadcn card

The Span Code Explain

Alright 👌 let’s break it down line by line:

<div 
  className="relative text-center text-sm 
             after:absolute after:inset-0 
             after:top-1/2 after:z-10 
             after:flex after:items-center">
  <span>or continue with</span>
</div>

1. relative

Makes this <div> a positioning context for absolutely positioned elements (like the after: pseudo-element).

2. text-center

Centers the text horizontally.

3. text-sm

Makes the font smaller.

4. after:

These classes style the ::after pseudo-element (an invisible element after the <div>).

You’re using Tailwind’s after: prefix.

Breakdown of the after: styles:

    after:absolute → the ::after element will be absolutely positioned inside this div.

    after:inset-0 → makes it stretch to cover the full div (top, right, bottom, left = 0).

    after:top-1/2 → pushes it halfway down vertically.

    after:z-10 → sets its stack order (it will sit above normal content if needed).

    after:flex after:items-center → turns the ::after element into a flex container,
    aligning its items in the middle vertically.

5. <span>or continue with</span>

<span className="relative z-10 bg-card px-2">or continue with</span>

by adding this code in our this will allow us to create 2 seperation 2 line
This is the actual visible text inside.

so in surrmarry this after: code is design to create a lign
