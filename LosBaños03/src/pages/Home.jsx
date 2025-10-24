
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Leaf, Users, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const features = [
    {
      icon: Award,
      title: 'Experiencia y Solidez',
      description: 'Más de 30 años al servicio de la hostelería y la limpieza profesional. Un legado de confianza y fiabilidad.',
    },
    {
      icon: Sparkles,
      title: 'Especialización Química Quimxel',
      description: 'Distribuidores oficiales de la gama Quimxel, garantizando químicos con formulación profesional para máximo rendimiento.',
    },
    {
      icon: Leaf,
      title: 'Compromiso y Sostenibilidad',
      description: 'Soluciones ecológicas y la Línea Ecolabel para una limpieza potente y respetuosa con el medio ambiente.',
    },
  ];

  const sectors = [
    {
      title: 'Hostelería Impecable',
      description: 'Desde el menaje hasta la lavandería, su suministro integral para Hoteles, Restaurantes y Bares.',
      link: '/sectores',
    },
    {
      title: 'Foco en Químicos',
      description: 'Especialistas en Desinfección, Lavavajillas, Lejías y Ambientación de alto rendimiento (Quimxel).',
      link: '/productos',
    },
    {
      title: 'Servicio a Empresas de Limpieza',
      description: 'Productos en formato profesional y asesoría técnica para optimizar sus operaciones y costes.',
      link: '/servicios',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Quimxel - 30 Años de Experiencia en Higiene Profesional | Sevilla y Córdoba</title>
        <meta name="description" content="Soluciones de suministro integral en químicos de alto rendimiento y menaje de hostelería. Distribuidores oficiales Quimxel en Sevilla y Córdoba." />
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover"
            alt="Chef profesional en cocina moderna con productos de limpieza Quimxel"
           src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              30 Años de Experiencia
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-4xl font-semibold mb-8"
            >
              La Máxima Higiene Profesional para Sevilla y Córdoba
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl mb-12 text-blue-100"
            >
              Soluciones de Suministro Integral en Químicos de Alto Rendimiento y Menaje de Hostelería
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/contacto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                  Solicitar Asesoramiento y Catálogo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Socio Estratégico en Higiene y Suministro Profesional
            </p>
            <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
              Nuestra trayectoria de tres décadas nos ha consolidado como el proveedor de referencia en Andalucía. Su éxito es nuestra misión.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Soluciones</h2>
            <p className="text-xl text-gray-600">Destacados de Productos y Sectores</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-2 border-blue-100 hover:border-blue-600 transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-4 text-blue-600">{sector.title}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <Link to={sector.link}>
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-all">
                    Ver Más
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Listo para Optimizar su Higiene Profesional?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Nuestro equipo de expertos está preparado para asesorarle sin compromiso
            </p>
            <Link to="/contacto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Contactar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
