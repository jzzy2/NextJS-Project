import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">
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
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/"></Link>
        {children}
      </div>
    </div>
  );
}
