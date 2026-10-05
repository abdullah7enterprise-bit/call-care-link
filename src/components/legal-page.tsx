import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-20 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="MONTECH Global Services home">
            <span className="grid size-10 place-items-center rounded-md bg-primary text-lg font-black text-primary-foreground">M</span>
            <span className="leading-none">
              <span className="block text-base font-extrabold">MONTECH</span>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">Global Services</span>
            </span>
          </Link>
          <Link to="/" className="text-sm font-semibold text-muted-foreground hover:text-primary">Back to home</Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
        <h1 className="text-3xl font-extrabold sm:text-5xl">{title}</h1>
        <div className="mt-8 space-y-5 text-base leading-7 text-muted-foreground [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_a]:font-bold [&_a]:text-primary">
          {children}
        </div>
      </main>
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © 2026 MONTECH Global Services. All rights reserved.
      </footer>
    </div>
  );
}
