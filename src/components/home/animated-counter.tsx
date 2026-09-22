"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1600,
  className = "text-4xl font-bold mb-1 text-primary",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <p ref={ref} className={className}>
      {prefix}
      {formatThousands(value)}
      {suffix}
    </p>
  );
}

function formatThousands(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
