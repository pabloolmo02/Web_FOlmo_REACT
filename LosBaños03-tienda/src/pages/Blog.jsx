
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();

  const articles = [
    {
      title: 'Cómo Elegir el Desinfectante Viricida Adecuado para su Cocina Industrial',
      excerpt: 'Guía completa sobre la normativa TP4 y cómo seleccionar el desinfectante más eficaz para garantizar la seguridad alimentaria en su cocina profesional.',
      date: '15 Enero 2025',
      category: 'Normativas',
      image: 'Professional kitchen with disinfection products and safety equipment',
    },
    {
      title: 'Ahorro de Costes: Optimizando el uso del Lavavajillas Automático',
      excerpt: 'Descubra cómo los químicos concentrados Quimxel pueden reducir significativamente sus costes operativos sin comprometer la calidad de limpieza.',
      date: '10 Enero 2025',
      category: 'Consejos',
      image: 'Industrial dishwasher with chemical products for professional cleaning',
    },
    {
      title: 'Lanzamiento de la nueva Línea Ecolabel 2024',
      excerpt: 'Presentamos nuestra nueva gama de productos ecológicos certificados: menos impacto ambiental, mismo rendimiento profesional.',
      date: '5 Enero 2025',
      category: 'Novedades',
      image: 'Eco-friendly cleaning products with green certification and nature background',
    },
    {
      title: 'Protocolos de Higiene Post-COVID: Actualización 2025',
      excerpt: 'Las últimas recomendaciones sanitarias para mantener espacios seguros en hoteles y restaurantes con productos certificados.',
      date: '28 Diciembre 2024',
      category: 'Normativas',
      image: 'Hotel staff implementing hygiene protocols with professional cleaning products',
    },
    {
      title: 'Mantenimiento de Suelos Profesionales: Guía Completa',
      excerpt: 'Todo lo que necesita saber sobre cristalizadores, ceras y productos de mantenimiento para suelos de alto tránsito.',
      date: '20 Diciembre 2024',
      category: 'Consejos',
      image: 'Professional floor maintenance with crystallization and waxing products',
    },
    {
      title: 'Química Concentrada: Ventajas para Empresas de Limpieza',
      excerpt: 'Cómo los productos concentrados pueden transformar la eficiencia y rentabilidad de su empresa de limpieza profesional.',
      date: '15 Diciembre 2024',
      category: 'Consejos',
      image: 'Concentrated cleaning chemicals in professional warehouse setting',
    },
  ];

  const handleReadMore = () => {
    toast({
      title: "🚧 Artículo próximamente disponible",
      description: "Estamos trabajando en el contenido completo. ¡Vuelva pronto!",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Noticias y Consejos de Higiene Profesional | Quimxel</title>
        <meta name="description" content="Artículos, consejos y novedades sobre higiene profesional, normativas sanitarias y productos químicos Quimxel." />
      </Helmet>

      <section className="relative py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            className="w-full h-full object-cover"
            alt="Profesionales leyendo artículos sobre higiene y limpieza"
           src="https://images.unsplash.com/photo-1679104143774-d72d83a2a037" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Blog y Recursos</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Noticias y Consejos para una Gestión de Limpieza Eficiente
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover"
                    alt={article.title}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={handleReadMore}
                  >
                    Leer Más
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
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
            <h2 className="text-4xl font-bold mb-6">¿Necesita Asesoramiento Específico?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Nuestro equipo de expertos está disponible para resolver sus dudas sobre productos, normativas y mejores prácticas en higiene profesional.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
