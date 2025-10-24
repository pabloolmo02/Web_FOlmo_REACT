
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">CleanPro</span>
            </div>
            <p className="text-sm mb-4">
              Soluciones profesionales de limpieza para hostelería y empresas. Calidad, sostenibilidad y experiencia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre-nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/sectores" className="hover:text-primary transition-colors">Sectores</Link></li>
              <li><Link to="/productos" className="hover:text-primary transition-colors">Productos</Link></li>
              <li><Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Recursos</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/calidad" className="hover:text-primary transition-colors">Política de Calidad</Link></li>
              <li><Link to="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Distribuidores</a></li>
            </ul>
          </div>

          <div>
            <span className="text-white font-semibold mb-4 block">Contacto</span>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Calle Ejemplo 123, 28001 Madrid, España</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>info@cleanpro.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 CleanPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
