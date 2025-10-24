

import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Target, Heart, TrendingUp, Users, Globe, Leaf } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Award, title: 'Calidad', description: 'Productos certificados de máxima calidad' },
    { icon: Heart, title: 'Compromiso', description: 'Dedicación total con nuestros clientes' },
    { icon: Leaf, title: 'Sostenibilidad', description: 'Respeto por el medio ambiente' },
    { icon: Users, title: 'Equipo', description: 'Profesionales altamente cualificados' },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - CleanPro | Historia, Misión y Valores</title>
        <meta name="description" content="Conoce la historia de CleanPro, nuestra misión, valores y compromiso con la calidad y sostenibilidad en productos de limpieza profesional." />
      </Helmet>

      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-700">
              Más de 20 años liderando el sector de limpieza profesional con calidad, innovación y sostenibilidad
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">
                CleanPro nació en 2003 con una visión clara: ofrecer soluciones de limpieza profesional de la más alta calidad para el sector de la hostelería y empresas de limpieza.
              </p>
              <p className="text-gray-700 mb-4">
                Durante más de dos décadas, hemos crecido junto a nuestros clientes, adaptándonos a sus necesidades y evolucionando con las últimas tecnologías y normativas del sector.
              </p>
              <p className="text-gray-700">
                Hoy somos referentes en el mercado español, con una amplia gama de productos químicos, una línea ecológica certificada y un equipo de profesionales comprometidos con la excelencia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img className="rounded-2xl shadow-xl w-full h-auto" alt="Equipo de CleanPro en almacén" src="https://images.unsplash.com/photo-1696937520232-30e356f4078b" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-700">
                Proporcionar soluciones de limpieza profesional innovadoras, eficaces y sostenibles que superen las expectativas de nuestros clientes, contribuyendo a entornos más limpios, seguros y saludables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-700">
                Ser la empresa líder en España en productos de limpieza profesional, reconocida por nuestra calidad, innovación y compromiso con la sostenibilidad, expandiendo nuestra presencia internacional.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y acción en CleanPro
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Infraestructura y Logística</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Instalaciones modernas y eficientes para garantizar el mejor servicio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-4">
                <Globe className="h-16 w-16 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5,000 m² de Almacén</h3>
              <p className="text-gray-600">Instalaciones modernas con control de temperatura y humedad</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-4">
                <TrendingUp className="h-16 w-16 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Entrega en 24-48h</h3>
              <p className="text-gray-600">Logística eficiente en toda la península</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl mb-4">
                <Award className="h-16 w-16 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificaciones ISO</h3>
              <p className="text-gray-600">ISO 9001, ISO 14001 y certificaciones ecológicas</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

