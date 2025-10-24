
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Success = () => {
  return (
    <>
      <Helmet>
        <title>¡Compra Realizada con Éxito! | Quimxel</title>
        <meta name="description" content="Gracias por su compra en Quimxel. Su pedido ha sido procesado con éxito." />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-2xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">¡Gracias por su compra!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Su pedido ha sido procesado con éxito. Recibirá una confirmación por correo electrónico en breve con los detalles de su pedido.
          </p>
          <Link to="/productos">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Seguir Comprando
            </Button>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default Success;
