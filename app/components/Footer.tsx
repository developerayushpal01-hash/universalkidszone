import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#0b0d12] px-3 py-2 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-md border border-zinc-800 bg-[#090b10] px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-xl font-bold text-rose-500 sm:text-2xl">
            UKZ Universal Kids Zone School
          </h4>
          <p className="mt-1 text-base italic text-slate-400 sm:text-lg">
            Play.. Learn.. Grow...
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-semibold text-lime-400 sm:text-lg">
          <Link href="/#home" className="transition hover:text-lime-300">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-lime-300">
            About
          </Link>
          <Link href="/#gallery" className="transition hover:text-lime-300">
            Gallery
          </Link>
          <Link href="/notice" className="transition hover:text-lime-300">
            Notice
          </Link>
          <Link href="/admission" className="transition hover:text-lime-300">
            Admission
          </Link>
          <Link href="/contact" className="transition hover:text-lime-300">
            Contact
          </Link>
        </nav>

        <p className="text-sm text-zinc-400 sm:text-base">
          (c) 2025 UKZ School. All rights reserved.
        </p>
      </div>
      <div className="ps-27 py-4">
        Developed by : <a className="text-blue-400 italic" href="https://ayushpal-dev-portfolio.vercel.app/ " target="_blank">Ayush Pal</a>
      </div>
    </footer>
  );
}
