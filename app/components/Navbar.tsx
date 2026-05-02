"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/gallery", label: "Gallery" },
  { href: "/notice", label: "Notice" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-4">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/assets/logo.png"
                alt="Universal kids zone logo"
                width={304}
                height={72}
                className="h-9 w-auto sm:h-11"
                priority
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-red-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className="hidden h-11 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white shadow-[0_20px_50px_-30px_rgba(239,68,68,0.7)] transition hover:bg-red-700 md:inline-flex animate-[navbar-shake_1.2s_ease-in-out_infinite]"
            >
              Admission Open
            </Link>

            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-red-200 hover:text-red-600 md:hidden"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-sm md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 text-sm font-medium text-zinc-700">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-3 transition hover:bg-red-50 hover:text-red-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
      {/* <div aria-hidden="true" className="h-[68px] sm:h-[76px]" /> */}
    </>
  );
}
