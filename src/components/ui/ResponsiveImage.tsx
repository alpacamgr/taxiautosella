import React from 'react';
import manifest from '../../data/imageManifest.json';

const IMAGE_MANIFEST = manifest as Record<string, number[]>;

export interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

function toWebp(src: string, width: number): string {
  const dot = src.lastIndexOf('.');
  const base = dot === -1 ? src : src.slice(0, dot);
  return `${base}-${width}.webp`;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className,
  sizes = '(min-width: 1024px) 33vw, 100vw',
  priority = false,
  width,
  height,
}) => {
  const widths = IMAGE_MANIFEST[src] ?? [];
  const srcSet = widths.map((w) => `${toWebp(src, w)} ${w}w`).join(', ');

  const loading: 'eager' | 'lazy' = priority ? 'eager' : 'lazy';
  const decoding: 'sync' | 'async' = priority ? 'sync' : 'async';
  // `fetchpriority` is a valid HTML attribute but not yet in every React types
  // release; pass it through as a lowercase attribute so it reaches the DOM.
  const extraImgProps = priority
    ? ({ fetchpriority: 'high' } as unknown as Record<string, string>)
    : {};

  const img = (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      {...extraImgProps}
    />
  );

  if (!srcSet) return img;

  return (
    <picture>
      <source type="image/webp" srcSet={srcSet} sizes={sizes} />
      {img}
    </picture>
  );
};

export default ResponsiveImage;
