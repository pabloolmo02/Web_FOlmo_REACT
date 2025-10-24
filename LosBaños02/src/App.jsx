
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import ProductosPage from '@/pages/ProductosPage';
import QuienesSomosPage from '@/pages/QuienesSomosPage';
import ContactoPage from '@/pages/ContactoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/quienes-somos" element={<QuienesSomosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
