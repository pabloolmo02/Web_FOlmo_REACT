
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactoPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Formulario en desarrollo",
      description: "Esta funcionalidad estará disponible próximamente. Por favor, contacta directamente por teléfono o email.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Solicita tu Presupuesto Personalizado</title>
        <meta name="description" content="Contacta con nuestro equipo de expertos en Sevilla y Córdoba. Solicita presupuesto personalizado para químicos Quimxel, menaje y desechables profesionales." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Navigation />

        <section className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Hablemos de tu Proyecto
                </h1>
                <p className="text-xl text-slate-600">
                  Nuestro equipo está listo para asesorarte y ofrecerte la mejor solución
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Información de Contacto</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Teléfono</h3>
                          <p className="text-slate-600">+34 XXX XXX XXX</p>
                          <p className="text-sm text-slate-500 mt-1">Lunes a Viernes: 8:00 - 18:00</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                          <p className="text-slate-600">info@tuempresa.com</p>
                          <p className="text-sm text-slate-500 mt-1">Respuesta en menos de 24h</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Zonas de Servicio</h3>
                          <p className="text-slate-600">Sevilla y Córdoba</p>
                          <p className="text-sm text-slate-500 mt-1">Entregas rápidas en toda la zona</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">Horario Comercial</h3>
                          <p className="text-slate-600">Lunes a Viernes: 8:00 - 18:00</p>
                          <p className="text-slate-600">Sábados: 9:00 - 14:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-slate-900 mb-3">¿Por qué elegirnos?</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Respuesta inmediata a tus consultas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Presupuestos personalizados sin compromiso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Asesoramiento técnico especializado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">✓</span>
                        <span>Entregas rápidas y fiables</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Solicita tu Presupuesto</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="Tu nombre"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="+34 XXX XXX XXX"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Tipo de negocio
                        </label>
                        <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                          <option>Selecciona una opción</option>
                          <option>Hotel</option>
                          <option>Restaurante</option>
                          <option>Empresa de limpieza</option>
                          <option>Hospital/Centro sanitario</option>
                          <option>Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Mensaje *
                        </label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Cuéntanos qué necesitas..."
                        ></textarea>
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        Enviar Solicitud
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        Al enviar este formulario, aceptas que contactemos contigo para ofrecerte información sobre nuestros productos y servicios.
                      </p>
                    </form>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactoPage;
