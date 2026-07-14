import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function RRProLogo({ className = "h-12 w-12", showText = true }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <svg
        className={className}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vertical pillars (Amber) */}
        <path
          d="M120 130 L138 110 L138 220 L120 220 Z"
          fill="#E5A93B"
        />
        <path
          d="M155 100 L173 80 L173 220 L155 220 Z"
          fill="#E5A93B"
        />
        {/* Middle bridge/roof (Amber) */}
        <path
          d="M181 115 L245 160 L245 220 L181 220 L181 202 L208 202 L208 178 L245 178 L245 158 L181 115 Z"
          fill="#E5A93B"
        />
        {/* Right outline roof (Black) */}
        <path
          d="M215 100 L250 80 L300 115 L300 220 L282 220 L282 125 L250 102 L215 125 Z"
          fill="#111111"
        />
      </svg>
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <span className="font-display font-bold text-lg tracking-wider text-neutral-900">
            RR PRO
          </span>
          <span className="text-[10px] font-semibold text-amber-500 tracking-widest font-mono">
            ZERO WASTE
          </span>
        </div>
      )}
    </div>
  );
}
