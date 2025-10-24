
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Profesionalidad',
      description: 'Compromiso absoluto con la excelencia en cada servicio',
    },
    {
      icon: Target,
      title: 'Proximidad',
      description: 'Servicio local cercano y personalizado',
    },
    {
      icon: Heart,
      title: 'Calidad',
      description: 'Productos Quimxel de máximo rendimiento',
    },
    {
      icon: TrendingUp,
      title: 'Compromiso',
      description: 'Con el cliente y el medio ambiente',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - 30 Años de Confianza Profesional | Quimxel</title>
        <meta name="description" content="Conoce nuestra historia de 30 años como proveedor líder en higiene profesional. Distribuidores oficiales Quimxel en Sevilla y Córdoba." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover"
            alt="Instalaciones modernas de distribución Quimxel"
           src="https://images.unsplash.com/photo-1565891741441-64926e441838" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              30 Años Forjando la Confianza Profesional
            </p>
          </motion.div>
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
            >
              <h2 className="text-4xl font-bold mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-700 mb-6">
                Nacimos hace más de 30 años con la misión de ser un pilar fundamental en la calidad y la higiene de los negocios de hostelería y servicios en Sevilla y Córdoba.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Nuestra evolución nos ha llevado a especializarnos en la química de alto rendimiento, estableciendo una sólida alianza con Quimxel, líder en soluciones profesionales.
              </p>
              <p className="text-lg text-gray-700">
                Hoy somos el referente en distribución de productos químicos profesionales y menaje de hostelería en toda Andalucía.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                alt="Equipo profesional de Quimxel trabajando en almacén"
               src="https://images.unsplash.com/photo-1699549196390-e31bfc88536d" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Misión</h3>
              <p className="text-gray-700">
                Ser el proveedor de suministro más fiable, garantizando la excelencia en higiene y la rentabilidad de nuestros clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Visión</h3>
              <p className="text-gray-700">
                Ser el referente andaluz en la distribución de químicos y soluciones de limpieza sostenible para el sector profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Valores</h3>
              <p className="text-gray-700">
                Profesionalidad, Proximidad, Calidad y Compromiso con el cliente y el medio ambiente.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-center">Infraestructura y Logística</h2>
            <p className="text-lg text-gray-700 mb-6">
              Nuestra red logística está optimizada para garantizar la distribución ágil y constante en toda la comarca de Sevilla y Córdoba. Contamos con almacenes que aseguran el stock permanente de menaje y la gama completa de químicos Quimxel.
            </p>
            <p className="text-lg text-gray-700">
              Trabajamos bajo los más estrictos controles de calidad y seguridad en el manejo de productos químicos, asegurando que su suministro cumple con todas las normativas sanitarias vigentes.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
