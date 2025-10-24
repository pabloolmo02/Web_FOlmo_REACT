
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const QuienesSomosPage = () => {
  return (
    <>
      <Helmet>
        <title>Quiénes Somos | 30 Años de Experiencia en Suministros Profesionales</title>
        <meta name="description" content="Conoce nuestra historia: más de 30 años suministrando químicos Quimxel y productos profesionales para hostelería en Sevilla y Córdoba. Tradición, calidad y servicio local." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navigation />

        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Profesionalidad Construida sobre Tres Décadas de Tradición
                </h1>
                <p className="text-xl text-slate-600">
                  Nuestra historia es la historia de la hostelería y la industria en Sevilla y Córdoba
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-slate-200 mb-12"
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Hace más de 30 años comenzamos este camino con una convicción clara: el sector de la hostelería y la industria necesitaba un proveedor que no solo entregara productos, sino que comprendiera realmente sus desafíos diarios. Desde entonces, hemos evolucionado junto a nuestros clientes, adaptándonos a cada cambio del mercado sin perder nunca nuestra esencia: cercanía, fiabilidad y compromiso absoluto con la calidad.
                  </p>
                  
                  <p className="text-slate-700 leading-relaxed mb-6">
                    A lo largo de estas tres décadas, hemos sido testigos de la transformación del sector. Hemos visto crecer pequeños negocios familiares hasta convertirse en referencias de la hostelería andaluza. Hemos acompañado a empresas de limpieza en su expansión. Y en cada paso, hemos estado ahí: con el producto adecuado, en el momento preciso, con el asesoramiento necesario.
                  </p>

                  <p className="text-slate-700 leading-relaxed mb-6">
                    Nuestra especialización en químicos profesionales Quimxel no es casual. Tras años de experiencia, identificamos que la química de calidad marca la diferencia real en la eficiencia operativa de cualquier negocio. Por eso apostamos por una marca que cumple con los más altos estándares de potencia, rendimiento y seguridad. Porque sabemos que cuando un hotel, un restaurante o una empresa de limpieza confía en nosotros, está confiando en que su operación funcionará sin contratiempos.
                  </p>

                  <p className="text-slate-700 leading-relaxed">
                    Hoy, seguimos siendo ese proveedor local de confianza que conoce tu nombre, entiende tus necesidades y responde con la agilidad que solo tres décadas de experiencia pueden ofrecer. Seguimos en Sevilla y Córdoba, más cerca que nunca, más preparados que nunca, más comprometidos que nunca con el éxito de tu negocio.
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100"
                >
                  <Award className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestra Misión</h3>
                  <p className="text-slate-700">
                    Ser el socio estratégico que garantiza la continuidad operativa de cada cliente mediante suministros de máxima calidad, servicio ágil y asesoramiento experto.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200"
                >
                  <Target className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Nuestra Visión</h3>
                  <p className="text-slate-700">
                    Consolidarnos como la referencia indiscutible en suministros profesionales para hostelería e industria en Andalucía, manteniendo siempre nuestra esencia local y cercana.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 md:p-12 rounded-2xl text-white text-center"
              >
                <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-3xl font-bold mb-4">Nuestros Valores</h3>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div>
                    <TrendingUp className="w-8 h-8 mx-auto mb-3 opacity-90" />
                    <h4 className="font-bold text-lg mb-2">Excelencia</h4>
                    <p className="text-blue-100 text-sm">Solo trabajamos con productos de máxima calidad que garantizan resultados superiores</p>
                  </div>
                  <div>
                    <Award className="w-8 h-8 mx-auto mb-3 opacity-90" />
                    <h4 className="font-bold text-lg mb-2">Compromiso</h4>
                    <p className="text-blue-100 text-sm">Tu éxito es nuestro éxito. Nos comprometemos con cada entrega, cada asesoramiento</p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 mx-auto mb-3 opacity-90" />
                    <h4 className="font-bold text-lg mb-2">Cercanía</h4>
                    <p className="text-blue-100 text-sm">Somos tu proveedor local de confianza, siempre disponible y siempre cerca</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default QuienesSomosPage;
