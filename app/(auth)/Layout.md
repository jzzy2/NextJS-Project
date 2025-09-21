So ang purpose nang layout natin is to create a layout natin sa mismogn auth natin
is to create a layout for our auth natin indicate na yong layout dito mo makikita yong mismong layout
nung login form natin.

Code explanation in layout
So what we did is in layout.tsx gumawa tayo nnang layout para don ipasa yong mismogn children natin
ang purpose neto is tto be able to make sure na yong mismong layout natin is reusable.
and if you ever read the code inside the layout na merong childrem : chilren.ReactNode
what basically saying is na yong papasa natin is HTML nodes

Why my layout code was able to display inside my login page.tsx?
so nang yayari yon dahil yon sa next js si next js automatically niya
ni rereplace yong mismong { children } with our page.tsx natin bali yong page.tsx natin
is = don sa mismong children natin si next js na yong bahala mag convert nong page.tsx natin
into children sa mismong layout natin and layout si convention for next js so
pag nakita na nya yong mismong layout.tsx natin this layout will automaticaly convert the page.tsx
into children of our layout inside the file

REMEMBER THIS!
As soon as you create a layout.tsx in a folder:
Next.js looks for the page.tsx (or deeper routes) inside that same folder.
Then it automatically injects the page.tsx output into {children} of the layout.
So you don’t need to “connect” them manually — Next.js does it for you.

    👉 Rule of thumb:

    layout.tsx = wrapper

    page.tsx = content

    {children} = where the content goes

Would you like me to give you a real folder example showing global layout + auth layout + login page all working together?

But don't worry that output na ginawa mo sa mismong layout mo hindi masasama sa loob nang login form mo
basically layout allows us to create layout to our children without putting it inside the page!

Layout tailwind code explain

<div className="relative flex min-h-svh flex-col items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">{children}</div>
</div>

What first div does is to position our children into the center by declaring relative and using flex layout
to be able to center, and second div is for controlling the size of our content

The Button Variant and link and arrow left

this 2 is came from shadcn instead of copying the design for button don sa mismonng button
we can do this this is the recommended approach to be able mo tain the clean and scalable code

  <Link href="/" className={buttonVariants()}>
        <ArrowLeft className="size-4" />
        Back
  </Link>

The link is a next js features that allow us to to navigate the entire webpage witohut refreshign it
ArrowLeft - is a icon came from lucide icon
and the buttonVariant basically yon yung design na na provide satin ni shadcn pero instead of
copying the design form the button we can just write the buttonVariants to be able to copy the
design of the button we can acutally customize it by wring something inside the code.

Example of customizing the design inside the buttonVariant

   <Link
        href="/"
        className={buttonVariants({
          variant: "outline",
          className: "absolute top-4 left-4",
        })}
      >
        <ArrowLeft className="size-4" />
        Back
      </Link>

So here is the example of adding custom design don sa button variat natin
we can alsoo add className inside so we can add some additional tailwind
