
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">QUIMXEL</div>
            <p className="text-gray-400 text-sm mb-4">
              30 años de experiencia en soluciones de higiene profesional para Sevilla y Córdoba.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre-nosotros" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/sectores" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Sectores
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Productos</span>
            <ul className="space-y-2">
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Gama Química Quimxel
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Línea Ecológica
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Menaje Profesional
                </Link>
              </li>
              <li>
                <Link to="/calidad" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  Calidad y Medio Ambiente
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Contacto</span>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+34 XXX XXX XXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@quimxel.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Sevilla y Córdoba, Andalucía</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Quimxel. Todos los derechos reservados. | 30 años de excelencia profesional.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
