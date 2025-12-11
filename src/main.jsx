// src/main.jsx (TÄYSI KORJAUS)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // TÄMÄ

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* TÄMÄ */}
      <App />
    </BrowserRouter> {/* TÄMÄ */}
  </StrictMode>,
);
