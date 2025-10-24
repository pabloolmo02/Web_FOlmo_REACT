
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplet, Shield, Leaf, Sparkles, Package, SprayCan as Spray } from 'lucide-react';

const Products = () => {
  const chemicalProducts = [
    {
      icon: Droplet,
      title: 'Lavado Automático de Vajilla',
      description: 'Abrillantadores y detergentes alcalinos de alto rendimiento para lavavajillas profesionales.',
    },
    {
      icon: Shield,
      title: 'Desinfección Certificada',
      description: 'Bactericidas, fungicidas y viricidas para uso ambiental e industria alimentaria.',
    },
    {
      icon: Sparkles,
      title: 'Limpieza General y Concentrados',
      description: 'Desengrasantes industriales, multiusos y lejías concentradas de máxima eficacia.',
    },
    {
      icon: Spray,
      title: 'Higiene Personal',
      description: 'Geles, champús y jabones dermatológicos profesionales.',
    },
    {
      icon: Sparkles,
      title: 'Ambientación Profesional',
      description: 'Ambientadores concentrados de larga duración para espacios profesionales.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Productos Quimxel - Química Profesional de Alto Rendimiento | Sevilla y Córdoba</title>
        <meta name="description" content="Gama completa de productos químicos profesionales Quimxel: desinfectantes, lavavajillas, línea ecológica y menaje para hostelería." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover"
            alt="Productos químicos profesionales Quimxel en almacén"
           src="https://images.unsplash.com/photo-1679104143774-d72d83a2a037" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Productos</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Quimxel: La Química que Exige la Profesionalidad
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gama Química Profesional Quimxel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos su puerta de acceso a la calidad y la potencia de la química Quimxel, formulada para superar los desafíos de higiene más exigentes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chemicalProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Leaf className="w-12 h-12 text-green-600 mr-4" />
                <h2 className="text-4xl font-bold">Línea Ecológica y Sostenible</h2>
              </div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Quimxel Ecolabel</h3>
              <p className="text-lg text-gray-700 mb-6">
                Productos certificados por su bajo impacto ambiental, perfectos para empresas con un fuerte compromiso ecológico.
              </p>
              <p className="text-lg text-gray-700">
                La línea Ecolabel combina la máxima eficacia en limpieza con el respeto absoluto por el medio ambiente. Productos biodegradables que cumplen con las normativas más exigentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                alt="Productos ecológicos Quimxel Ecolabel certificados"
               src="https://images.unsplash.com/photo-1681442694999-d301c2941f52" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Package className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold">Menaje y Suministro Complementario</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Completamos su suministro profesional con todo lo necesario para su negocio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Vajilla desechable',
              'Envases para take away',
              'Celulosa profesional',
              'Papel higiénico y secamanos',
              'Dispensadores',
              'Accesorios de limpieza',
              'Productos de higiene',
              'Material complementario',
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-lg font-semibold text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
