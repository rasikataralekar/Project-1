"use client";

import { WHY_CARDS } from "@/constants/site";
import Reveal from "@/components/ui/Reveal";
import { staggerContainer, fadeInUp } from "@/hooks/useRevealAnimation";
import { motion } from "framer-motion";

export default function WhyAuro() {
  return (
    <section id="why-auro" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="font-display text-sm italic text-gold-dark">Why Auro</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            Beauty that <em className="italic text-gold-dark not-italic font-serif">respects</em> you
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink/65">
            Three principles drive every formula we make. Simple, honest,
            effective — the way skincare was always meant to be.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {WHY_CARDS.map((card) => (
            <motion.div
              key={card.number}
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="rounded-2xl bg-cream-dark p-8"
            >
              <span className="font-display text-4xl text-ink/20">
                {card.number}
              </span>
              <h3 className="mt-6 font-display text-xl italic text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/65">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
