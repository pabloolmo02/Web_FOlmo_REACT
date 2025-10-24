
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, ClipboardCheck, Truck, GraduationCap, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Users,
      title: 'Asesoramiento Técnico Personalizado',
      description: 'Nuestro equipo de expertos analiza tus necesidades específicas y te recomienda los productos más adecuados para tu negocio.',
      features: ['Visita in situ', 'Análisis de necesidades', 'Recomendaciones personalizadas', 'Seguimiento continuo'],
    },
    {
      icon: ClipboardCheck,
      title: 'Planes de Limpieza a Medida',
      description: 'Diseñamos protocolos de limpieza específicos adaptados a tu sector y normativa aplicable.',
      features: ['Protocolos APPCC', 'Cumplimiento normativo', 'Optimización de costes', 'Documentación completa'],
    },
    {
      icon: Truck,
      title: 'Distribución y Logística',
      description: 'Servicio de entrega rápido y eficiente en toda España con gestión de stock personalizada.',
      features: ['Entrega 24-48h', 'Gestión de stock', 'Pedidos recurrentes', 'Seguimiento online'],
    },
    {
      icon: GraduationCap,
      title: 'Formación del Personal',
      description: 'Capacitamos a tu equipo en el uso correcto y seguro de nuestros productos.',
      features: ['Formación presencial', 'Material didáctico', 'Certificados', 'Actualizaciones periódicas'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - CleanPro | Asesoramiento y Formación en Limpieza</title>
        <meta name="description" content="Servicios profesionales de asesoramiento técnico, planes de limpieza personalizados, distribución y formación para empresas de hostelería y limpieza." />
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
              Nuestros Servicios
            </h1>
            <p className="text-xl text-gray-700">
              Más que productos: soluciones integrales para tu negocio
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-shadow"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contacto">
                  <Button className="w-full">Solicitar Información</Button>
                </Link>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Asesoramiento Técnico Especializado
              </h2>
              <p className="text-gray-700 mb-4">
                Nuestro equipo técnico cuenta con más de 20 años de experiencia en el sector de la limpieza profesional.
              </p>
              <p className="text-gray-700 mb-6">
                Te ayudamos a optimizar tus procesos de limpieza, reducir costes y cumplir con todas las normativas aplicables a tu sector.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Atención telefónica</p>
                    <p className="text-gray-600">Lunes a Viernes 8:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Visitas comerciales</p>
                    <p className="text-gray-600">Análisis in situ de tus necesidades</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Documentación técnica</p>
                    <p className="text-gray-600">Fichas técnicas y de seguridad</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img className="rounded-2xl shadow-xl w-full h-auto" alt="Asesor técnico explicando productos" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
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
              <img className="rounded-2xl shadow-xl w-full h-auto" alt="Formación de personal de limpieza" src="https://images.unsplash.com/photo-1559185590-3927b8fa38de" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Formación Profesional
              </h2>
              <p className="text-gray-700 mb-4">
                Ofrecemos programas de formación adaptados a las necesidades de tu equipo, garantizando el uso correcto y seguro de nuestros productos.
              </p>
              <p className="text-gray-700 mb-6">
                La formación incluye aspectos técnicos, de seguridad y buenas prácticas en limpieza profesional.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                  <span>Formación presencial en tus instalaciones</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                  <span>Material didáctico y fichas técnicas</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                  <span>Certificados de asistencia</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0" />
                  <span>Actualizaciones periódicas sin coste</span>
                </li>
              </ul>
              <Link to="/contacto">
                <Button size="lg">Solicitar Formación</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
