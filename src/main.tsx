import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import './styles/index.css';

const versionParam = new URLSearchParams(window.location.search).get('version');
const savedVersion = window.localStorage.getItem('tas-version');
const isVersion = (v: string | null): v is 'v1' | 'v2' | 'v3' => v === 'v1' || v === 'v2' || v === 'v3';
const initialVersion = isVersion(versionParam)
  ? versionParam
  : isVersion(savedVersion)
    ? savedVersion
    : 'v1';

document.documentElement.dataset.tasVersion = initialVersion;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
