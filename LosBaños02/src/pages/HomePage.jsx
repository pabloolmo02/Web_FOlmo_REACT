
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Award, MapPin, Clock, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const navigate = useNavigate();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Suministros Industriales y Hostelería | 30 Años de Experiencia en Sevilla y Córdoba</title>
        <meta name="description" content="Más de 30 años suministrando químicos profesionales Quimxel, menaje y desechables para hostelería en Sevilla y Córdoba. Experiencia, calidad y servicio local garantizado." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navigation />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 opacity-70"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  Más de 30 años de experiencia
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight"
              >
                Tu Socio de Confianza en Suministros Profesionales para Hostelería
              </motion.h1>

              <motion.h2 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-600 mb-8 font-light"
              >
                Especialistas en Químicos Quimxel de Máxima Eficacia para Sevilla y Córdoba
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="text-lg text-slate-700 mb-12 leading-relaxed max-w-3xl mx-auto"
              >
                Desde hace más de tres décadas, nos hemos consolidado como el proveedor estratégico que tu negocio necesita. Combinamos experiencia probada, productos de máxima calidad y un servicio local ágil para garantizar que tu operación nunca se detenga. Confía en quien conoce tu sector.
              </motion.p>

              <motion.div 
                variants={fadeInUp}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <Award className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                  <p className="font-semibold text-slate-900">Experiencia de 30 años en el sector</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <Sparkles className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                  <p className="font-semibold text-slate-900">Químicos Quimxel de máxima calidad certificada</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                  <MapPin className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
                  <p className="font-semibold text-slate-900">Servicio local rápido en Sevilla y Córdoba</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => navigate('/contacto')}
                >
                  Solicita tu Presupuesto Personalizado
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Químicos Profesionales Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Soluciones Químicas Profesionales que Transforman tu Operación
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  La química profesional no es un gasto, es una inversión en eficiencia, seguridad y resultados. Por eso nos especializamos en Quimxel: productos de máxima potencia, rendimiento superior y total cumplimiento normativo que optimizan cada proceso de limpieza, desinfección y mantenimiento en tu negocio.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Máxima Eficacia con Quimxel</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-slate-700"><strong>Lavandería Industrial:</strong> Detergentes de alto rendimiento para textiles profesionales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-slate-700"><strong>Lavavajillas Profesional:</strong> Limpieza impecable y brillo garantizado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-slate-700"><strong>Desinfección y Sanitización:</strong> Máxima higiene según normativas sanitarias</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-slate-700"><strong>Ambientación Profesional:</strong> Fragancias duraderas para espacios impecables</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-slate-700"><strong>Limpieza de Superficies:</strong> Soluciones específicas para cada material</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border border-slate-200"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Asesoramiento Técnico y Normativo</h3>
                  <p className="text-slate-700 mb-4">
                    No solo vendemos productos químicos: te acompañamos en cada paso. Nuestro equipo técnico especializado te asesora sobre:
                  </p>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                      <span>Selección del producto óptimo según tu tipo de negocio y necesidades específicas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                      <span>Dosificación precisa para maximizar rendimiento y minimizar costes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                      <span>Cumplimiento de normativas sanitarias y de seguridad alimentaria</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-slate-600 rounded-full mt-2"></div>
                      <span>Formación de tu equipo en uso seguro y eficiente de productos</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="text-center">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => navigate('/productos')}
                >
                  Ver Catálogo Completo de Productos
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Servicio Integral Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Tres Décadas Construyendo Relaciones de Confianza
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Nuestra experiencia de más de 30 años no es solo un número: es la garantía de que entendemos tu negocio, anticipamos tus necesidades y respondemos con la agilidad que el sector exige. Cada año de trayectoria se traduce en un servicio más preciso, más fiable y más cercano.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <Award className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Experiencia Comprobada</h3>
                  <p className="text-slate-600">
                    Más de 30 años suministrando a hoteles, restaurantes, hospitales y empresas de limpieza. Conocemos cada desafío del sector.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <MapPin className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Alcance Geográfico Estratégico</h3>
                  <p className="text-slate-600">
                    Cobertura completa en Sevilla y Córdoba con logística optimizada para entregas rápidas y eficientes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <Clock className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Suministro Just in Time</h3>
                  <p className="text-slate-600">
                    Entregas puntuales y stock garantizado. Tu operación nunca se detiene por falta de suministros.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <Sparkles className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Menaje y Desechables Complementarios</h3>
                  <p className="text-slate-600">
                    Solución integral: además de químicos, te proveemos de todo el menaje y material desechable que necesitas.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Final Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Listo para Optimizar tu Operación?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Descubre cómo nuestros químicos Quimxel y servicio personalizado pueden transformar la eficiencia de tu negocio.
              </p>
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-lg shadow-xl"
                onClick={() => navigate('/contacto')}
              >
                Contacta con Nuestro Equipo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
