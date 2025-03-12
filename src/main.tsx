import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.tsx';
import './shared';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster position='top-right' reverseOrder={false} />
  </StrictMode>
);
