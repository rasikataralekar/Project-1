"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import { cn } from "@/lib/utils";
import { AMAZON_URL, HOW_TO_USE_STEPS, PRODUCT_SIZES } from "@/constants/site";

type Tab = "Details" | "Ingredients" | "How to use";

const TABS: Tab[] = ["Details", "Ingredients", "How to use"];

const IMAGES = [
  "/images/product-serum.svg",
  "/images/product-thumb-1.svg",
  "/images/product-thumb-2.svg",
];

export default function ProductDetail() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("How to use");
  const [activeSize, setActiveSize] = useState(PRODUCT_SIZES[1].value);

  return (
    <section id="product" className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Image
              src={IMAGES[activeImage]}
              alt="Gold-Rose Renewal Serum"
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {IMAGES.slice(1).map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveImage(i + 1)}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-2xl border-2 transition-colors",
                  activeImage === i + 1 ? "border-gold" : "border-transparent"
                )}
              >
                <Image src={src} alt="Product angle" fill className="object-cover" />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <StarRating size={15} />
              <span className="text-sm text-ink/70">4.9 (3,241 reviews)</span>
            </div>
            <span className="rounded-full bg-[#e7dcc7] px-4 py-1 text-xs font-semibold text-[#6b5a34]">
              Bestseller
            </span>
          </div>

          <h2 className="mt-4 font-display text-4xl text-ink sm:text-[2.75rem]">
            Gold-Rose Renewal Serum
          </h2>
          <p className="mt-2 font-display italic text-ink/60">
            Your 28-day skin transformation ritual
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="font-display text-3xl text-ink">₹2,499</span>
            <span className="text-lg text-ink/40 line-through">₹3,500</span>
            <span className="rounded-full bg-[#e7dcc7] px-3 py-1 text-xs font-semibold text-[#6b5a34]">
              Save 29%
            </span>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex gap-8 border-b border-ink/10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative pb-3 font-display text-[15px] transition-colors",
                  activeTab === tab ? "text-gold-dark" : "text-ink/50 hover:text-ink/80"
                )}
              >
                {tab}
                {activeTab === tab && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute -bottom-px left-0 right-0 h-[2px] bg-gold-dark"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="mt-7 min-h-[180px]">
            {activeTab === "How to use" && (
              <ol className="space-y-4">
                {HOW_TO_USE_STEPS.map((s) => (
                  <li key={s.step} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-semibold text-white">
                      {s.step}
                    </span>
                    <span className="text-[15px] leading-relaxed text-ink/75">
                      {s.instruction}
                    </span>
                  </li>
                ))}
              </ol>
            )}
            {activeTab === "Details" && (
              <p className="text-[15px] leading-relaxed text-ink/75">
                A lightweight, fast-absorbing serum powered by nano-encapsulated
                gold particles and stabilized Vitamin C to visibly firm, brighten,
                and renew skin texture within 28 days. Dermatologist-tested,
                fragrance-free, and suitable for all skin types including
                sensitive skin.
              </p>
            )}
            {activeTab === "Ingredients" && (
              <p className="text-[15px] leading-relaxed text-ink/75">
                Aqua, Glycerin, Niacinamide, Sodium Hyaluronate, 24K Colloidal
                Gold, Ascorbic Acid (Vitamin C) 15%, Rosa Damascena Flower
                Extract, Tocopherol, Panthenol. No parabens, sulfates, or
                artificial fragrance.
              </p>
            )}
          </div>

          {/* Size selector */}
          <div className="mt-8 flex flex-wrap gap-3">
            {PRODUCT_SIZES.map((size) => (
              <button
                key={size.value}
                onClick={() => setActiveSize(size.value)}
                className={cn(
                  "rounded-full border px-6 py-2.5 text-sm font-medium transition-colors",
                  activeSize === size.value
                    ? "border-ink bg-ink text-white"
                    : "border-ink/25 text-ink/70 hover:border-ink/60"
                )}
              >
                {size.label}
              </button>
            ))}
          </div>

          {/* Add to cart */}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex w-full items-center justify-center gap-2.5 rounded-full bg-ink py-4 font-display text-[15px] text-white transition-colors duration-300 hover:bg-black"
          >
            <Gift size={18} />
            Add to cart
          </a>
        </motion.div>
      </div>
    </section>
  );
}
