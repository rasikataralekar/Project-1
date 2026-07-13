import { Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { FOOTER_LINK_GROUPS, PAYMENT_METHODS } from "@/constants/site";

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-cream-dark pt-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold text-ink">
              Auro<sup className="text-[10px] font-normal align-super">TM</sup>
            </p>
            <p className="mt-4 max-w-xs text-[15px] italic leading-relaxed text-ink/60">
              Radically simple, science-backed skincare for people who want
              real results — not just beautiful packaging.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-gold-dark"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="font-display text-lg italic text-ink">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[15px] text-ink/65 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-gold-dark"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-ink/10 py-7 sm:flex-row">
          <p className="text-xs text-ink/50">
            © 2025 Auro Skincare. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENT_METHODS.map((method) => (
              <span
                key={method}
                className="rounded-full border border-ink/20 px-3 py-1 text-xs text-ink/60"
              >
                {method}
              </span>
            ))}
          </div>
          <div className="flex gap-5 text-xs text-ink/50">
            <a href="#" className="underline underline-offset-4 hover:text-ink">
              Privacy Policy
            </a>
            <a href="#" className="underline underline-offset-4 hover:text-ink">
              Terms of Service
            </a>
            <a href="#" className="underline underline-offset-4 hover:text-ink">
              Returns
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
