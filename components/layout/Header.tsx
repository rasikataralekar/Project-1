"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/site";
import { motion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-ink">
          Auro<sup className="text-[10px] font-normal align-super">TM</sup>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-[15px] text-ink/90 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#product"
            className="rounded-full border border-ink px-5 py-2.5 font-display text-[15px] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
          >
            Find your routine
          </a>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3d9c4] text-lg">
            🧴
          </div>
        </div>

        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex flex-col gap-5 border-t border-ink/10 bg-cream px-6 py-6 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-lg text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#product"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-ink px-5 py-2.5 text-center font-display text-[15px] text-ink"
          >
            Find your routine
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
