
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Leaf, Shield, CheckCircle } from 'lucide-react';

const Quality = () => {
  const commitments = [
    {
      icon: Award,
      title: 'Alianza con Quimxel',
      description: 'Distribución de productos fabricados bajo estrictos controles ISO y que cumplen las más altas exigencias de la industria.',
    },
    {
      icon: Leaf,
      title: 'Compromiso Ecológico',
      description: 'Promovemos activamente la gama Ecolabel. Productos biodegradables y de bajo impacto que reducen el riesgo ambiental sin comprometer la eficacia.',
    },
    {
      icon: Shield,
      title: 'Certificaciones',
      description: 'Cumplimiento riguroso de normativas de gestión, calidad y seguridad específicas de la distribución de productos químicos.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Política de Calidad y Medio Ambiente - Compromiso de 30 Años | Quimxel</title>
        <meta name="description" content="Nuestro compromiso con la calidad profesional y la sostenibilidad ambiental. Productos certificados y gestión responsable." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-br from-green-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover"
            alt="Naturaleza y productos ecológicos certificados"
           src="https://images.unsplash.com/photo-1699346949864-38ac564d0351" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Calidad y Medio Ambiente</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Calidad y Sostenibilidad: Compromiso de 30 Años
            </p>
            <p className="text-lg text-blue-100 mt-4">
              Nuestro compromiso es doble: con la calidad profesional de su negocio y con la salud de nuestro entorno
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-6">
                  <commitment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{commitment.title}</h3>
                <p className="text-gray-700">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Nuestro Compromiso con la Calidad</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Productos Quimxel fabricados bajo estrictos controles de calidad ISO
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Cumplimiento de todas las normativas sanitarias y de seguridad vigentes
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Gestión responsable en el manejo y distribución de productos químicos
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Formación continua de nuestro equipo en seguridad y calidad
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                alt="Control de calidad en laboratorio de productos químicos"
               src="https://images.unsplash.com/photo-1602052577122-f73b9710adba" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                alt="Productos ecológicos Ecolabel en entorno natural"
               src="https://images.unsplash.com/photo-1642764732251-9dacf60eb423" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl font-bold mb-6">Compromiso Medioambiental</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Promoción activa de la línea Ecolabel con certificación europea
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Productos biodegradables que minimizan el impacto ambiental
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Reducción de residuos mediante productos concentrados
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Asesoramiento en prácticas sostenibles para nuestros clientes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">30 Años de Excelencia</h2>
            <p className="text-xl text-blue-100 mb-8">
              Tres décadas comprometidos con la calidad profesional y el respeto al medio ambiente. Nuestro legado es su garantía de confianza.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Quality;
