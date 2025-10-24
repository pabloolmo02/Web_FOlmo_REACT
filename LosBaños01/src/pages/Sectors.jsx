
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building2, Sparkles, Factory, Hotel, UtensilsCrossed, Wine, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Sectors = () => {
  const sectors = [
    {
      icon: Hotel,
      title: 'Hoteles',
      description: 'Soluciones completas para la limpieza y mantenimiento de hoteles de todas las categorías.',
      features: ['Limpieza de habitaciones', 'Áreas comunes', 'Lavandería profesional', 'Desinfección certificada'],
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurantes',
      description: 'Productos especializados para cocinas profesionales y áreas de servicio.',
      features: ['Desengrasantes potentes', 'Lavavajillas industrial', 'Higiene alimentaria', 'Eliminación de olores'],
    },
    {
      icon: Wine,
      title: 'Bares y Cafeterías',
      description: 'Limpieza eficaz para barras, cristalería y espacios de atención al público.',
      features: ['Limpieza de cristalería', 'Desinfección de superficies', 'Ambientadores', 'Productos rápidos'],
    },
    {
      icon: Briefcase,
      title: 'Empresas de Limpieza',
      description: 'Suministro profesional para empresas de limpieza y servicios integrales.',
      features: ['Productos concentrados', 'Formatos profesionales', 'Asesoramiento técnico', 'Precios competitivos'],
    },
    {
      icon: Factory,
      title: 'Industria',
      description: 'Soluciones industriales para entornos exigentes y de alta demanda.',
      features: ['Limpieza industrial', 'Desengrasantes potentes', 'Productos específicos', 'Cumplimiento normativo'],
    },
    {
      icon: Building2,
      title: 'Oficinas y Comercios',
      description: 'Productos para mantener espacios de trabajo limpios y profesionales.',
      features: ['Limpieza de oficinas', 'Desinfección', 'Productos sin olor', 'Formatos prácticos'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sectores - CleanPro | Hostelería, Limpieza e Industria</title>
        <meta name="description" content="Soluciones de limpieza profesional para hoteles, restaurantes, bares, empresas de limpieza e industria. Productos especializados para cada sector." />
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
              Sectores que Atendemos
            </h1>
            <p className="text-xl text-gray-700">
              Soluciones especializadas de limpieza profesional adaptadas a las necesidades específicas de cada sector
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl hover:shadow-xl transition-all group"
              >
                <sector.icon className="h-16 w-16 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{sector.title}</h2>
                <p className="text-gray-700 mb-6">{sector.description}</p>
                <ul className="space-y-2 mb-6">
                  {sector.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <Sparkles className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
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
                Experiencia en Hostelería
              </h2>
              <p className="text-gray-700 mb-4">
                Con más de 20 años trabajando con hoteles, restaurantes y bares de toda España, conocemos perfectamente las necesidades del sector hostelero.
              </p>
              <p className="text-gray-700 mb-6">
                Nuestros productos están diseñados para cumplir con las más estrictas normativas de higiene alimentaria y seguridad, garantizando resultados profesionales en cada aplicación.
              </p>
              <Link to="/productos">
                <Button size="lg">Ver Productos para Hostelería</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img className="rounded-2xl shadow-xl w-full h-auto" alt="Cocina profesional de restaurante limpia" src="https://images.unsplash.com/photo-1570803538050-7dd21df0e4c1" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sectors;
