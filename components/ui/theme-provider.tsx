"use client";
/*
 * this provider is required to use `next-themes` in a client component
 * because `next-themes` uses React context which is not available in server components
 * Read the docs for more info:
 *
 * and the code that we right here is the code that we copy paste directly in documentation
 */

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
