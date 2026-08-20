import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { videoPreloadManager } from './utils/videoPreloader';

// Initialize rapid video buffer preloading on app start
videoPreloadManager.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
