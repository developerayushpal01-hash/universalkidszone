import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-red-600 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Universal kids zone logo"
              width={304}
              height={72}
              className="h-11 w-auto"
              priority
            />
          </Link>
          <div className="hidden leading-tight sm:block">
            <p className="text-lg font-semibold text-zinc-900">Universal kids zone</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
          <Link href="/#home" className="transition hover:text-red-600">Home</Link>
          <Link href="/about" className="transition hover:text-red-600">About</Link>
          <Link href="/#features" className="transition hover:text-red-600">Features</Link>
          <Link href="/#gallery" className="transition hover:text-red-600">Gallery</Link>
          <Link href="/#notice" className="transition hover:text-red-600">Notice</Link>
          <Link href="/#contact" className="transition hover:text-red-600">Contact</Link>
        </nav>

        <Link
          href="/#notice"
          className="inline-flex h-11 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white shadow-[0_20px_50px_-30px_rgba(239,68,68,0.7)] transition hover:bg-red-700"
        >
          Admission Open
        </Link>
      </div>
    </header>
  );
}
