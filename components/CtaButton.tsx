import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const VARIANTS: Record<Variant, string> = {
  primary: "bg-indigo-600 text-white shadow-sm hover:bg-indigo-700",
  secondary: "bg-white text-slate-700 ring-1 ring-inset ring-slate-300 hover:bg-slate-50",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-extrabold transition";

/** Interner Link im Button-Look. */
export function CtaLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={cn(BASE, VARIANTS[variant], className)} {...props}>
      {children}
    </Link>
  );
}

/** Externer Link (z. B. in die App) im Button-Look. */
export function CtaExternal({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"a"> & { variant?: Variant; children: ReactNode }) {
  return (
    <a
      className={cn(BASE, VARIANTS[variant], className)}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
