
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, FileText, Truck, Headphones as HeadphonesIcon, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Asesoramiento Técnico Personalizado',
      description: 'Análisis de sus procesos de limpieza y recomendación del químico Quimxel más eficiente para optimizar el coste por uso.',
      features: [
        'Evaluación in-situ de necesidades',
        'Recomendación de productos específicos',
        'Optimización de costes operativos',
        'Formación del personal',
      ],
    },
    {
      icon: FileText,
      title: 'Planes de Higiene a Medida',
      description: 'Creación de protocolos y planes de limpieza detallados, alineados con las normativas sanitarias vigentes.',
      features: [
        'Protocolos personalizados',
        'Cumplimiento normativo garantizado',
        'Documentación completa',
        'Seguimiento y actualización',
      ],
    },
    {
      icon: Truck,
      title: 'Logística de Confianza',
      description: 'Entregas programadas y rápidas en Sevilla y Córdoba para asegurar que nunca se quede sin stock.',
      features: [
        'Entregas programadas',
        'Servicio rápido y puntual',
        'Stock permanente garantizado',
        'Cobertura Sevilla y Córdoba',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Asesoramiento y Logística Profesional | Quimxel</title>
        <meta name="description" content="Asesoramiento técnico personalizado, planes de higiene a medida y logística de confianza en Sevilla y Córdoba." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover"
            alt="Equipo de profesionales asesorando a clientes sobre productos Quimxel"
           src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Su Tranquilidad, Nuestro Servicio
            </p>
            <p className="text-lg text-blue-100 mt-4">
              Nuestro valor añadido es la experiencia que le garantiza la solución correcta para cada reto
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-700 mb-8">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img 
                    className="w-full h-96 object-cover rounded-xl shadow-2xl"
                    alt={`Servicio de ${service.title.toLowerCase()}`}
                   src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <HeadphonesIcon className="w-12 h-12 text-blue-600 mr-4" />
              <h2 className="text-4xl font-bold">Soporte Continuo</h2>
            </div>
            <p className="text-xl text-gray-700 mb-8">
              Nuestro equipo de expertos está siempre disponible para resolver sus dudas y optimizar sus procesos de limpieza e higiene.
            </p>
            <p className="text-lg text-gray-600">
              Más de 30 años de experiencia nos respaldan. Confíe en nosotros para llevar su negocio al siguiente nivel de excelencia en higiene profesional.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
