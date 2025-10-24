
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();

  const blogPosts = [
    {
      title: 'Guía completa de limpieza para hoteles: Protocolos y mejores prácticas',
      excerpt: 'Descubre los protocolos esenciales de limpieza hotelera que garantizan la satisfacción de tus huéspedes y el cumplimiento normativo.',
      date: '15 Octubre 2025',
      author: 'María González',
      category: 'Hostelería',
    },
    {
      title: 'Productos ecológicos: ¿Realmente funcionan igual que los tradicionales?',
      excerpt: 'Analizamos la eficacia de los productos de limpieza ecológicos certificados frente a los químicos tradicionales.',
      date: '10 Octubre 2025',
      author: 'Carlos Martínez',
      category: 'Sostenibilidad',
    },
    {
      title: 'Cómo reducir costes en limpieza sin comprometer la calidad',
      excerpt: 'Estrategias probadas para optimizar tu presupuesto de limpieza manteniendo los más altos estándares de higiene.',
      date: '5 Octubre 2025',
      author: 'Ana López',
      category: 'Gestión',
    },
    {
      title: 'Normativa APPCC en cocinas profesionales: Todo lo que necesitas saber',
      excerpt: 'Guía práctica sobre el cumplimiento de la normativa APPCC en restaurantes y cocinas industriales.',
      date: '28 Septiembre 2025',
      author: 'Pedro Sánchez',
      category: 'Normativa',
    },
    {
      title: 'Desinfección efectiva: Diferencias entre bactericida, virucida y fungicida',
      excerpt: 'Aprende a elegir el desinfectante adecuado según el tipo de microorganismo que necesitas eliminar.',
      date: '20 Septiembre 2025',
      author: 'Laura Fernández',
      category: 'Técnico',
    },
    {
      title: 'Lanzamiento: Nueva línea de productos biodegradables certificados',
      excerpt: 'Presentamos nuestra nueva gama de productos ecológicos con certificación Ecolabel europea.',
      date: '15 Septiembre 2025',
      author: 'CleanPro',
      category: 'Novedades',
    },
  ];

  const handleReadMore = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - CleanPro | Consejos y Novedades en Limpieza Profesional</title>
        <meta name="description" content="Blog de CleanPro: consejos para hostelería, normativa de limpieza, productos ecológicos, ahorro de costes y últimas novedades del sector." />
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
              Blog y Recursos
            </h1>
            <p className="text-xl text-gray-700">
              Consejos, guías y novedades sobre limpieza profesional
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" onClick={handleReadMore}>
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
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
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Quieres estar al día?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Suscríbete a nuestra newsletter y recibe consejos, guías y novedades directamente en tu correo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" onClick={handleReadMore}>Suscribirse</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
