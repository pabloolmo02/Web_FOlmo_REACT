
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Zap, Droplets } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const ProductosPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <>
      <Helmet>
        <title>Químicos Profesionales Quimxel | Catálogo de Productos para Hostelería</title>
        <meta name="description" content="Descubre nuestra gama completa de químicos profesionales Quimxel: lavandería, lavavajillas, desinfección y más. Máxima eficacia para tu negocio en Sevilla y Córdoba." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navigation />

        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                Químicos Profesionales Quimxel
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600"
              >
                Soluciones de máxima eficacia para cada necesidad de tu negocio
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <Droplets className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Lavandería Industrial</h3>
                <p className="text-slate-600 mb-4">
                  Detergentes de alto rendimiento formulados específicamente para textiles profesionales. Máxima limpieza, cuidado de las fibras y resultados impecables en cada lavado.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Detergentes líquidos y en polvo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Suavizantes profesionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Quitamanchas especializados</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Lavavajillas Profesional</h3>
                <p className="text-slate-600 mb-4">
                  Limpieza impecable y brillo garantizado para vajilla, cristalería y cubertería. Fórmulas de secado rápido y sin residuos para máxima eficiencia operativa.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Detergentes para máquinas industriales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Abrillantadores de secado rápido</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Descalcificadores y mantenimiento</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Desinfección y Sanitización</h3>
                <p className="text-slate-600 mb-4">
                  Máxima higiene según normativas sanitarias vigentes. Productos bactericidas, virucidas y fungicidas de amplio espectro para garantizar espacios seguros.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Desinfectantes de superficies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Sanitizantes alimentarios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Productos certificados APPCC</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <Zap className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Limpieza de Superficies</h3>
                <p className="text-slate-600 mb-4">
                  Soluciones específicas para cada tipo de material y superficie. Desde suelos hasta acero inoxidable, cristales y mobiliario profesional.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Limpiadores multiusos profesionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Desengrasantes de alta potencia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Limpiacristales sin rayas</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <Sparkles className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Ambientación Profesional</h3>
                <p className="text-slate-600 mb-4">
                  Fragancias duraderas y sistemas de ambientación que crean espacios agradables y profesionales. Primera impresión garantizada.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Ambientadores de larga duración</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Neutralizadores de olores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Sistemas automáticos de difusión</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Menaje y Desechables</h3>
                <p className="text-slate-600 mb-4">
                  Complementa tu suministro químico con todo el material que necesitas: desde vajilla desechable hasta utensilios profesionales de cocina.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Vajilla y cubertería desechable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Menaje profesional de cocina</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span>Material de servicio y presentación</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductosPage;
