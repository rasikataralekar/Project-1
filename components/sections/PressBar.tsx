import { PRESS_LOGOS } from "@/constants/site";
import Reveal from "@/components/ui/Reveal";
import { fadeIn } from "@/hooks/useRevealAnimation";

export default function PressBar() {
  return (
    <section className="bg-cream-dark py-10">
      <Reveal variants={fadeIn}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-6 px-6 md:flex-row md:justify-between md:px-10">
          <span className="text-xs font-semibold tracking-[0.15em] text-ink/50">
            AS SEEN IN
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {PRESS_LOGOS.map((logo) => (
              <span
                key={logo.name}
                className="font-display text-lg italic tracking-wide text-ink/70"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
