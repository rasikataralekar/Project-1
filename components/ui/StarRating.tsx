import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  count?: number;
  size?: number;
  className?: string;
  filledClassName?: string;
}

export default function StarRating({
  count = 5,
  size = 16,
  className,
  filledClassName = "fill-gold text-gold",
}: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} className={filledClassName} strokeWidth={1} />
      ))}
    </div>
  );
}
