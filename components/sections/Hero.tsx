"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Award, Leaf, Star } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pb-16 pt-8 md:px-10 md:pt-14">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#e7dcc7] px-4 py-1.5 text-xs font-medium tracking-wide text-[#6b5a34]">
              ✨ NEW FORMULA 2026
            </span>
            <span className="text-xs text-ink/60">
              As seen in Vogue, Elle, Byrdie
            </span>
          </div>

          <h1 className="font-display text-[3rem] leading-[1.05] tracking-tight text-ink sm:text-[3.75rem] lg:text-[4.25rem]">
            Skin that <em className="text-gold-dark not-italic font-serif italic">glows</em>
            <br />
            from within.
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink/70">
            Science-backed skincare, crafted with 100% natural actives. No
            fillers, no compromise. Just results — in 28 days or your money
            back.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button isAmazonLink variant="primary">
              Shop the ritual
            </Button>
            <Button variant="secondary" href="#ingredients" icon={<ArrowRight size={16} />}>
              See ingredients
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2 text-xl">
              <span>🧴</span>
              <span>🌿</span>
              <span>🌸</span>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">
                47,000+ happy customers
              </p>
              <p className="text-sm text-ink/60">
                Rated 4.9/5 across 12,400 reviews
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right column - product image with floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="relative aspect-[6/7] w-full overflow-hidden rounded-[2rem] bg-charcoal shadow-card">
            <Image
              src="/images/hero-product.svg"
              alt="Auro Gold-Rose Renewal Serum resting on natural stones"
              fill
              priority
              className="object-cover"
            />
            <span className="absolute left-5 top-5 font-display text-lg text-white/90">
              Auro™
            </span>
          </div>

          {/* Best of Beauty badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -top-3 right-2 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-soft sm:right-4"
          >
            <Award size={20} className="text-gold-dark shrink-0" />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Best of Beauty</p>
              <p className="text-xs text-ink/50">Allure Awards 2024</p>
            </div>
          </motion.div>

          {/* Clean formula badge */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute left-[-8px] top-[38%] flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-soft sm:left-[-24px]"
          >
            <Leaf size={20} className="text-green-700 shrink-0" />
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Clean formula</p>
              <p className="text-xs text-ink/50">100% vegan &amp; cruelty-free</p>
            </div>
          </motion.div>

          {/* Review badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-8 right-[-8px] max-w-[220px] rounded-2xl bg-white px-4 py-3 shadow-soft sm:right-[-16px]"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={13} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-1 text-sm font-semibold text-ink">
              &ldquo;Life-changing serum&rdquo;
            </p>
            <p className="text-xs text-ink/50">— Maya R., verified buyer</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
