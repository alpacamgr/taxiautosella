import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import './styles/index.css';

const versionParam = new URLSearchParams(window.location.search).get('version');
const savedVersion = window.localStorage.getItem('tas-version');
const initialVersion = versionParam === 'v2' || (versionParam !== 'v1' && savedVersion === 'v2')
  ? 'v2'
  : 'v1';

document.documentElement.dataset.tasVersion = initialVersion;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
