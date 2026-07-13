import Image from "next/image";
import { INGREDIENT_POINTS } from "@/constants/site";
import Reveal from "@/components/ui/Reveal";

export default function Ingredients() {
  return (
    <section id="ingredients" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative mx-auto w-full max-w-[420px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/images/ingredient-gold.svg"
                alt="Gold nanoparticles used in Auro serums"
                fill
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink">
                Gold Nanoparticles
              </span>
            </div>
            <div className="absolute -bottom-10 -right-6 w-[55%] overflow-hidden rounded-2xl shadow-card sm:-right-10">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/ingredient-vitc.svg"
                  alt="Vitamin C extract used in Auro serums"
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-white">
                  Vitamin C 15%
                </span>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 lg:mt-0">
            <Reveal delay={0.1}>
              <p className="font-display text-sm italic text-gold-dark">
                Ingredients
              </p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
                What goes in <em className="italic text-gold-dark not-italic font-serif">matters</em>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/65">
                We&apos;ve spent 3 years sourcing the most potent, ethically-obtained
                actives in the world. Every ingredient earns its place.
              </p>
            </Reveal>

            <div className="mt-10 space-y-8">
              {INGREDIENT_POINTS.map((point, i) => (
                <Reveal key={point.number} delay={0.15 + i * 0.08}>
                  <div className="flex gap-6">
                    <span className="font-display text-3xl text-ink/20">
                      {point.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg italic text-ink">
                        {point.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
