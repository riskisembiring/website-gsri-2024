import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App.tsx';  // Tidak perlu menambahkan ekstensi .tsx karena TS sudah mengerti
import reportWebVitals from './reportWebVitals';

// Pastikan document.getElementById('root') adalah elemen yang valid
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Jika ingin mulai mengukur kinerja aplikasi
reportWebVitals();
