import React, { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  threshold?: number;
}

/**
 * Fades in and rises 16px when the element enters the viewport, once.
 * No layout shift (only opacity + transform). Respects reduced motion.
 * Falls back to the visible state if IntersectionObserver is unavailable.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  as = 'div',
  className,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reduced, threshold]);

  const style: React.CSSProperties = reduced
    ? {}
    : {
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 500ms ease-out, transform 500ms ease-out',
        transitionDelay: visible && delay ? `${delay}ms` : '0ms',
        willChange: visible ? undefined : 'opacity, transform',
      };

  const Tag = as as unknown as React.ElementType;
  return (
    <Tag ref={ref as React.Ref<HTMLElement>} className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Reveal;
