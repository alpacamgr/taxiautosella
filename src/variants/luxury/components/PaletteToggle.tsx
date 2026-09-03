import React from 'react';

type Palette = 'original' | 'v2';

const readPalette = (): Palette =>
  document.documentElement.dataset.tasPalette === 'v2' ? 'v2' : 'original';

export const PaletteToggle: React.FC = () => {
  const [palette, setPalette] = React.useState<Palette>(readPalette);

  const selectPalette = (nextPalette: Palette) => {
    setPalette(nextPalette);
    document.documentElement.dataset.tasPalette = nextPalette;
    window.localStorage.setItem('tas-palette', nextPalette);

    const url = new URL(window.location.href);
    if (nextPalette === 'v2') {
      url.searchParams.set('palette', 'v2');
    } else {
      url.searchParams.delete('palette');
    }
    window.history.replaceState(window.history.state, '', url);
  };

  return (
    <div
      className="fixed bottom-[4.75rem] right-3 z-30 flex items-center rounded-xl border border-white/15 bg-tas-ink p-1 text-[10px] font-bold uppercase tracking-[0.08em] text-tas-paper shadow-lg lg:bottom-5 lg:right-5"
      aria-label="Compare color palettes"
    >
      {(['original', 'v2'] as const).map((option) => {
        const active = palette === option;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => selectPalette(option)}
            className={`min-h-9 rounded-lg px-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tas-focus ${
              active
                ? 'bg-tas-brass-fill text-tas-ink'
                : 'text-tas-paper/70 hover:bg-tas-surface/10 hover:text-tas-paper'
            }`}
          >
            {option === 'original' ? 'V1' : 'V2'}
          </button>
        );
      })}
    </div>
  );
};
