"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { RATING_BARS, REVIEWS } from "@/constants/site";
import Reveal from "@/components/ui/Reveal";
import { staggerContainer, fadeInUp } from "@/hooks/useRevealAnimation";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-charcoal py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
            Results that <em className="italic text-gold font-serif not-italic">speak</em> for
            themselves
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] text-white/55">
            Real customers, real results. Unfiltered and unedited.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,340px)_1fr]">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 p-8">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl">4.9</span>
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-white/50">12,400+ reviews</p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {RATING_BARS.map((bar) => (
                  <div key={bar.stars} className="flex items-center gap-3">
                    <span className="w-8 text-xs text-white/60">
                      {bar.stars}★
                    </span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 p-8"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-white/80">
                  {review.quote.split(review.highlight ?? "").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <strong className="font-semibold text-white">
                          {review.highlight}
                        </strong>
                      )}
                    </span>
                  ))}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-dark font-display text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="text-xs text-white/50">
                      {review.location} · {review.skinType}
                    </p>
                    {review.verified && (
                      <p className="mt-0.5 flex items-center gap-1 text-xs text-green-400">
                        <BadgeCheck size={12} /> Verified purchase
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
