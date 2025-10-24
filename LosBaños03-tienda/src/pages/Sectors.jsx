
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Hotel, UtensilsCrossed, Building2, Sparkles, CheckCircle } from 'lucide-react';

const Sectors = () => {
  const sectors = [
    {
      icon: Hotel,
      title: 'Hostelería y Turismo',
      items: [
        {
          subtitle: 'Hoteles y Alojamientos',
          description: 'Químicos para lavandería profesional (ropa de cama y toallas), desinfectantes de habitaciones y productos de higiene personal para huéspedes.',
        },
        {
          subtitle: 'Restaurantes y Bares',
          description: 'Químicos especializados para lavavajillas automáticos y manuales, desengrasantes de cocinas industriales, y menaje desechable.',
        },
        {
          subtitle: 'Colectividades',
          description: 'Soluciones de desinfección certificada para garantizar la seguridad alimentaria.',
        },
      ],
    },
    {
      icon: Sparkles,
      title: 'Empresas de Limpieza y Mantenimiento',
      items: [
        {
          subtitle: 'Químicos Concentrados',
          description: 'Suministro de químicos concentrados en gran formato para maximizar la eficiencia en la limpieza de grandes superficies.',
        },
        {
          subtitle: 'Tratamiento de Suelos',
          description: 'Productos específicos para el tratamiento y abrillantado de suelos (cristalizadores, ceras) y mantenimiento especializado.',
        },
      ],
    },
    {
      icon: Building2,
      title: 'Sector Industrial y Otros',
      items: [
        {
          subtitle: 'Aplicaciones Industriales',
          description: 'Químicos industriales, automoción (desengrasantes, anticongelantes) y productos especializados para la construcción.',
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sectores - Soluciones Profesionales para Hostelería e Industria | Quimxel</title>
        <meta name="description" content="Soluciones especializadas en químicos profesionales para hostelería, empresas de limpieza y sector industrial en Sevilla y Córdoba." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover"
            alt="Diversos sectores profesionales utilizando productos Quimxel"
           src="https://images.unsplash.com/photo-1562064445-74ece068276f" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Nuestros Sectores</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Nuestra Experiencia es su Garantía de Resultados
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg"
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <sector.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">{sector.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sector.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-start mb-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                        <h3 className="text-xl font-bold">{item.subtitle}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
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
            <h2 className="text-4xl font-bold mb-6">¿Su Sector No Está Listado?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contamos con soluciones personalizadas para cualquier necesidad de higiene profesional. Contáctenos y descubra cómo podemos ayudarle.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Sectors;
