
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Droplet, Sparkles, Leaf, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

const Products = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState('all');

  const productCategories = [
    {
      id: 'dishwashing',
      name: 'Lavavajillas',
      icon: Droplet,
      products: [
        { name: 'Lavavajillas Manual Concentrado', description: 'Alta eficacia desengrasante', format: '5L / 25L' },
        { name: 'Lavavajillas Máquina Industrial', description: 'Para máquinas automáticas', format: '10L / 20L' },
        { name: 'Abrillantador Profesional', description: 'Acabado perfecto sin manchas', format: '5L' },
      ],
    },
    {
      id: 'disinfectants',
      name: 'Desinfectantes',
      icon: Sparkles,
      products: [
        { name: 'Desinfectante Multiusos', description: 'Bactericida y virucida', format: '1L / 5L' },
        { name: 'Desinfectante Alimentario', description: 'Apto para contacto con alimentos', format: '750ml / 5L' },
        { name: 'Gel Hidroalcohólico', description: '70% alcohol, dermatológicamente testado', format: '500ml / 5L' },
      ],
    },
    {
      id: 'degreasers',
      name: 'Desengrasantes',
      icon: Droplet,
      products: [
        { name: 'Desengrasante Industrial', description: 'Máxima potencia para cocinas', format: '5L / 25L' },
        { name: 'Desengrasante Hornos', description: 'Elimina carbonilla y grasa quemada', format: '750ml / 5L' },
        { name: 'Desengrasante Multiusos', description: 'Para todo tipo de superficies', format: '1L / 5L' },
      ],
    },
    {
      id: 'ecological',
      name: 'Línea Ecológica',
      icon: Leaf,
      products: [
        { name: 'Lavavajillas Eco', description: 'Certificado Ecolabel, biodegradable', format: '1L / 5L' },
        { name: 'Limpiador Multiusos Eco', description: 'Ingredientes naturales certificados', format: '750ml / 5L' },
        { name: 'Desengrasante Eco', description: 'Alta eficacia, bajo impacto ambiental', format: '1L / 5L' },
      ],
    },
  ];

  const handleDownloadCatalog = () => {
    toast({
      title: "🚧 Esta función no está implementada aún",
      description: "¡Pero no te preocupes! Puedes solicitarla en tu próximo mensaje! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Productos - CleanPro | Químicos de Limpieza Profesional</title>
        <meta name="description" content="Catálogo de productos de limpieza profesional: lavavajillas, desinfectantes, desengrasantes, ambientadores y línea ecológica certificada." />
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
              Nuestros Productos
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Gama completa de productos químicos de limpieza profesional de alta calidad
            </p>
            <Button size="lg" onClick={handleDownloadCatalog}>
              <Download className="mr-2 h-5 w-5" />
              Descargar Catálogo Completo
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
              <TabsTrigger value="all">Todos</TabsTrigger>
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-12">
                {productCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center mb-6">
                      <category.icon className="h-8 w-8 text-primary mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.products.map((product, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                        >
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                          <p className="text-gray-600 mb-3">{product.description}</p>
                          <p className="text-sm text-primary font-semibold mb-4">Formatos: {product.format}</p>
                          <Button variant="outline" className="w-full" onClick={handleDownloadCatalog}>
                            Ficha Técnica
                          </Button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center mb-8">
                    <category.icon className="h-10 w-10 text-primary mr-3" />
                    <h2 className="text-3xl font-bold text-gray-900">{category.name}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-3">{product.description}</p>
                        <p className="text-sm text-primary font-semibold mb-4">Formatos: {product.format}</p>
                        <Button variant="outline" className="w-full" onClick={handleDownloadCatalog}>
                          Ficha Técnica
                        </Button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
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
              <img className="rounded-2xl shadow-xl w-full h-auto" alt="Productos ecológicos de limpieza" src="https://images.unsplash.com/photo-1642764732251-9dacf60eb423" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Leaf className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Línea Ecológica Certificada
              </h2>
              <p className="text-gray-700 mb-4">
                Nuestra gama ecológica cuenta con certificaciones Ecolabel y está formulada con ingredientes biodegradables de origen natural.
              </p>
              <p className="text-gray-700 mb-6">
                Misma eficacia profesional con menor impacto ambiental. Perfectos para empresas comprometidas con la sostenibilidad.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-700">
                  <Sparkles className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Certificación Ecolabel europea</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Sparkles className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ingredientes biodegradables</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Sparkles className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Envases reciclables</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <Sparkles className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sin fosfatos ni cloro</span>
                </li>
              </ul>
              <Button size="lg" onClick={handleDownloadCatalog}>Ver Catálogo Ecológico</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
