
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Leaf, ArrowRight, Building2, Sparkles, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const features = [
    { icon: Award, title: 'Más de 20 años de experiencia', description: 'Líderes en el sector de limpieza profesional' },
    { icon: Sparkles, title: 'Amplia variedad de productos', description: 'Soluciones para cada necesidad específica' },
    { icon: Leaf, title: 'Compromiso sostenible', description: 'Línea ecológica certificada y respetuosa' },
  ];

  const sectors = [
    { title: 'Hostelería', description: 'Hoteles, restaurantes y bares', icon: Building2 },
    { title: 'Empresas de Limpieza', description: 'Soluciones industriales profesionales', icon: Sparkles },
    { title: 'Químicos Especializados', description: 'Productos de alta calidad certificados', icon: Droplet },
  ];

  return (
    <>
      <Helmet>
        <title>CleanPro - Soluciones de Limpieza Profesional para Hostelería y Empresas</title>
        <meta name="description" content="Productos de limpieza profesional para hostelería y empresas. Químicos, desinfectantes, línea ecológica. Experiencia, calidad y sostenibilidad." />
      </Helmet>

      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Soluciones de Limpieza Profesional para Hostelería y Empresas
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Productos químicos de alta calidad, asesoramiento técnico y compromiso con la sostenibilidad. Tu socio de confianza en limpieza profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <Button size="lg" className="w-full sm:w-auto">
                    Solicitar Presupuesto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/productos">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Ver Productos
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img className="rounded-2xl shadow-2xl w-full h-auto" alt="Profesional de limpieza en hotel moderno" src="https://images.unsplash.com/photo-1590006661005-27ab606c2036" />
            </motion.div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos diferenciamos por nuestra experiencia, calidad y compromiso con el medio ambiente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sectores que Atendemos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones especializadas para cada sector profesional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all group cursor-pointer"
              >
                <sector.icon className="h-16 w-16 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sector.title}</h3>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                <Link to="/sectores" className="text-primary font-semibold flex items-center group-hover:gap-2 transition-all">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para Mejorar tu Limpieza Profesional?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contacta con nuestro equipo de expertos y descubre cómo podemos ayudarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Contactar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/productos">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  Ver Catálogo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
