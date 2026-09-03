import React from 'react';

export type SiteVersion = 'v1' | 'v2' | 'v3';

interface VersionToggleProps {
  version: SiteVersion;
  onChange: (version: SiteVersion) => void;
}

export const VersionToggle: React.FC<VersionToggleProps> = ({ version, onChange }) => (
  <div
    className="fixed bottom-[4.75rem] right-3 z-30 flex items-center rounded-xl border border-white/15 bg-tas-ink p-1 text-[10px] font-bold uppercase tracking-[0.08em] text-tas-paper shadow-lg lg:bottom-5 lg:right-5"
    aria-label="Switch website version"
  >
    {(['v1', 'v2', 'v3'] as const).map((option) => {
      const active = version === option;
      return (
        <button
          key={option}
          type="button"
          aria-pressed={active}
          onClick={() => onChange(option)}
          className={`min-h-9 rounded-lg px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus ${
            active
              ? 'bg-tas-brass-fill text-tas-on-accent'
              : 'text-tas-paper/70 hover:bg-tas-surface/10 hover:text-tas-paper'
          }`}
        >
          {option.toUpperCase()}
        </button>
      );
    })}
  </div>
);
