import React, { useEffect, useRef, useState } from 'react';

const DURATION = 1200;

const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export interface CountUpProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

/**
 * Counts an integer from 0 to `value` over ~1.2s the first time it enters
 * the viewport. Respects reduced motion (renders the final value at once).
 * Falls back to the final value if IntersectionObserver is unavailable.
 */
export const CountUp: React.FC<CountUpProps> = ({
  value,
  suffix = '',
  className,
  duration = DURATION,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    if (reduced) {
      setDisplay(value);
      started.current = true;
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value);
      started.current = true;
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return;
          started.current = true;
          observer.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const t = Math.min(1, elapsed / duration);
            setDisplay(Math.round(easeOut(t) * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
