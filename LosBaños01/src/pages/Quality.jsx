
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Leaf, Shield, CheckCircle, FileCheck, Globe } from 'lucide-react';

const Quality = () => {
  const certifications = [
    { icon: Award, title: 'ISO 9001:2015', description: 'Sistema de Gestión de Calidad' },
    { icon: Leaf, title: 'ISO 14001:2015', description: 'Sistema de Gestión Ambiental' },
    { icon: Shield, title: 'Ecolabel', description: 'Certificación Ecológica Europea' },
    { icon: FileCheck, title: 'APPCC', description: 'Análisis de Peligros y Puntos Críticos' },
  ];

  const commitments = [
    'Productos formulados con ingredientes biodegradables',
    'Envases reciclables y reducción de plásticos',
    'Optimización de procesos para reducir emisiones',
    'Formación continua en sostenibilidad',
    'Colaboración con proveedores certificados',
    'Inversión en I+D de productos ecológicos',
  ];

  return (
    <>
      <Helmet>
        <title>Política de Calidad y Medio Ambiente - CleanPro</title>
        <meta name="description" content="Certificaciones ISO, compromiso medioambiental y política de calidad de CleanPro. Productos ecológicos certificados y sostenibilidad." />
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
              Calidad y Medio Ambiente
            </h1>
            <p className="text-xl text-gray-700">
              Nuestro compromiso con la excelencia y la sostenibilidad
            </p>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestras Certificaciones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Certificados que avalan nuestra calidad y compromiso medioambiental
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl text-center hover:shadow-xl transition-shadow"
              >
                <cert.icon className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Política de Calidad</h2>
              <p className="text-gray-700 mb-4">
                En CleanPro, la calidad es el pilar fundamental de nuestra actividad. Nos comprometemos a:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Suministrar productos que cumplan con los más altos estándares de calidad</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mantener un sistema de gestión de calidad certificado ISO 9001</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mejorar continuamente nuestros procesos y productos</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Garantizar la satisfacción de nuestros clientes</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cumplir con toda la normativa aplicable</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img className="rounded-2xl shadow-xl w-full h-auto" alt="Laboratorio de control de calidad" src="https://images.unsplash.com/photo-1621921712505-a2228ad77c76" />
            </motion.div>
          </div>
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
              className="order-2 lg:order-1"
            >
              <img className="rounded-2xl shadow-xl w-full h-auto" alt="Productos ecológicos con certificación" src="https://images.unsplash.com/photo-1681442694999-d301c2941f52" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <Leaf className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Compromiso Medioambiental</h2>
              <p className="text-gray-700 mb-4">
                La sostenibilidad es parte integral de nuestra estrategia empresarial. Trabajamos activamente para minimizar nuestro impacto ambiental.
              </p>
              <p className="text-gray-700 mb-6">
                Nuestros compromisos medioambientales incluyen:
              </p>
              <ul className="space-y-3">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <Leaf className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>{commitment}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Globe className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Juntos por un Futuro Más Sostenible
            </h2>
            <p className="text-xl opacity-90">
              Cada producto que eliges de nuestra línea ecológica es un paso hacia un planeta más limpio y saludable
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Quality;
