
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Tienda - Productos Profesionales | Quimxel</title>
        <meta name="description" content="Explore nuestra gama completa de productos químicos profesionales y menaje de hostelería en la tienda online de Quimxel." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover"
            alt="Productos químicos profesionales Quimxel en estanterías"
            src="https://images.unsplash.com/photo-1679104143774-d72d83a2a037" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestra Tienda</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Calidad Profesional a un Clic de Distancia
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ProductsList />
        </div>
      </section>
    </>
  );
};

export default Products;
