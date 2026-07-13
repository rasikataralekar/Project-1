import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-28">
      <Reveal className="mx-auto max-w-[1400px]">
        <div className="rounded-3xl bg-gradient-to-br from-charcoal via-[#2a2015] to-gold-dark px-8 py-14 sm:px-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="max-w-md font-display text-3xl leading-tight text-white sm:text-4xl">
                Ready for skin that{" "}
                <em className="italic text-gold font-serif not-italic">glows</em>?
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/65">
                Start your 28-day ritual today. Free shipping on all orders.
                100% money-back guarantee if you don&apos;t see a difference.
              </p>
            </div>

            <div className="flex shrink-0 flex-col items-start gap-4 sm:items-end">
              <div className="flex flex-wrap gap-3">
                <Button isAmazonLink variant="gold">
                  Shop Now
                </Button>
                <Button
                  variant="outline-light"
                  href="#product"
                  icon={<ArrowRight size={16} />}
                >
                  Take the skin quiz
                </Button>
              </div>
              <p className="text-xs text-white/45">
                28-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
