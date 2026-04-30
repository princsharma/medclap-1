import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Owner } from "./types";

type Props = {
  owners: Owner[];
  activeIndex: number;
  progress: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function FoundersControls({
  owners,
  activeIndex,
  progress,
  onSelect,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="relative border-t border-divider px-7 md:px-10 lg:px-12 py-5 md:py-6 flex items-center justify-between gap-4 bg-cream">
      <div className="flex items-center gap-2 md:gap-3">
        {owners.map((owner, i) => (
          <button
            key={owner.name}
            onClick={() => onSelect(i)}
            aria-label={`View ${owner.name}`}
            className={`group flex items-center gap-2.5 rounded-full border-2 transition-all duration-300 pl-1 pr-3 md:pr-4 py-1 ${
              i === activeIndex
                ? "border-navy bg-navy text-cream"
                : "border-divider hover:border-navy/50 hover:bg-cream-warm/50"
            }`}
          >
            <span
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[12px] md:text-[13px] flex-shrink-0 transition-colors duration-300 overflow-hidden ${
                i === activeIndex ? "bg-gold text-navy" : "bg-navy text-gold"
              }`}
            >
              {owner.photo ? (
                <Image
                  src={owner.photo}
                  alt={owner.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              ) : (
                owner.initials
              )}
            </span>
            <div className="hidden sm:block text-left">
              <div
                className={`font-display font-bold text-[12.5px] leading-tight tracking-tight ${
                  i === activeIndex ? "text-cream" : "text-navy"
                }`}
              >
                {owner.firstName}
              </div>
              <div
                className={`text-[10px] leading-tight mt-0.5 ${
                  i === activeIndex ? "text-cream/60" : "text-ink-soft"
                }`}
              >
                {owner.role}
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <div className="relative w-9 h-9 hidden sm:block">
          <svg className="w-9 h-9 -rotate-90" viewBox="0 0 36 36" aria-hidden>
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#E8E2D4"
              strokeWidth="2.5"
            />
            <circle
              cx="18"
              cy="18"
              r="14"
              fill="none"
              stroke="#F4B62E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="87.96"
              strokeDashoffset={87.96 - (87.96 * progress) / 100}
              style={{ transition: "stroke-dashoffset 0.05s linear" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-navy">
            {String(activeIndex + 1)}/{owners.length}
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onPrev}
            aria-label="Previous founder"
            className="w-9 h-9 rounded-full border border-divider hover:border-navy hover:bg-navy hover:text-cream text-navy flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={2.25} />
          </button>
          <button
            onClick={onNext}
            aria-label="Next founder"
            className="w-9 h-9 rounded-full border border-divider hover:border-navy hover:bg-navy hover:text-cream text-navy flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </div>
  );
}
