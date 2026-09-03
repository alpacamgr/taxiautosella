import React, { useState } from 'react';

export type SiteVersion = 'v1' | 'v2' | 'v3' | 'v4';

interface VersionToggleProps {
  version: SiteVersion;
  onChange: (version: SiteVersion) => void;
}

const renderVersionRow = (
  version: SiteVersion,
  onChange: (version: SiteVersion) => void,
  onItemSelect?: () => void
) => (
  <div
    className="flex items-center rounded-xl border border-white/15 bg-tas-ink p-1 text-[10px] font-bold uppercase tracking-[0.08em] text-tas-paper shadow-lg"
    aria-label="Switch website version"
  >
    {(['v1', 'v2', 'v3', 'v4'] as const).map((option) => {
      const active = version === option;
      return (
        <button
          key={option}
          type="button"
          aria-pressed={active}
          onClick={() => {
            onChange(option);
            onItemSelect?.();
          }}
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

export const VersionToggle: React.FC<VersionToggleProps> = ({ version, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: always visible */}
      <div className="fixed bottom-5 right-5 z-30 hidden lg:flex">
        {renderVersionRow(version, onChange)}
      </div>

      {/* Mobile: collapsible */}
      <div className="fixed bottom-[4.75rem] right-3 z-30 lg:hidden">
        {open ? (
          renderVersionRow(version, onChange, () => setOpen(false))
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Switch website version"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-tas-ink text-[11px] font-bold uppercase tracking-[0.08em] text-tas-paper shadow-lg"
          >
            {version.toUpperCase()}
          </button>
        )}
      </div>
    </>
  );
};
