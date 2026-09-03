import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import './styles/index.css';

const paletteParam = new URLSearchParams(window.location.search).get('palette');
const savedPalette = window.localStorage.getItem('tas-palette');
const initialPalette = paletteParam === 'v2' || (paletteParam !== 'original' && savedPalette === 'v2')
  ? 'v2'
  : 'original';

document.documentElement.dataset.tasPalette = initialPalette;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
