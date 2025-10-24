
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Sectors from '@/pages/Sectors';
import Products from '@/pages/Products';
import ProductDetailPage from '@/pages/ProductDetailPage';
import Success from '@/pages/Success';
import Services from '@/pages/Services';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Quality from '@/pages/Quality';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header setIsCartOpen={setIsCartOpen} />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/sectores" element={<Sectors />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/calidad" element={<Quality />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
        <ShoppingCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      </div>
    </Router>
  );
}

export default App;
