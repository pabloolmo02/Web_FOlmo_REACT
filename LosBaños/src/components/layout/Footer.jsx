
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">Q</span>
              </div>
              <span className="font-bold text-xl text-white">QUIMXEL</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Distribución exclusiva de productos químicos profesionales certificados para HORECA, Lavandería y Limpieza Industrial.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-slate-900">ISO 9001</span>
              </div>
              <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                <span className="text-xs font-bold text-slate-900">ISO 14001</span>
              </div>
              <div className="w-16 h-10 bg-green-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-white">ECOLABEL</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-semibold text-white text-lg block mb-4">Productos</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/productos?cat=alimentaria" className="hover:text-blue-400 transition-colors">Alimentaria</Link></li>
              <li><Link to="/productos?cat=lavanderia" className="hover:text-blue-400 transition-colors">Lavandería Profesional</Link></li>
              <li><Link to="/productos?cat=horeca" className="hover:text-blue-400 transition-colors">HORECA</Link></li>
              <li><Link to="/productos?cat=sanitaria" className="hover:text-blue-400 transition-colors">Sanitaria</Link></li>
              <li><Link to="/productos?cat=ecolabel" className="hover:text-blue-400 transition-colors">Línea Ecolabel</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white text-lg block mb-4">Empresa</span>
            <ul className="space-y-2 text-sm">
              <li><Link to="/empresa" className="hover:text-blue-400 transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/documentacion" className="hover:text-blue-400 transition-colors">Documentación Legal</Link></li>
              <li><Link to="/empresa#calidad" className="hover:text-blue-400 transition-colors">Política de Calidad</Link></li>
              <li><Link to="/empresa#medioambiente" className="hover:text-blue-400 transition-colors">Medio Ambiente</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-semibold text-white text-lg block mb-4">Contacto</span>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Sevilla y Córdoba, Andalucía</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+34 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@quimxel-distribucion.es</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} QUÍMICAS QUIMXEL, S.L. - Distribución Autorizada. Todos los derechos reservados.</p>
          <p className="mt-2">Entrega garantizada en 48h en Sevilla y Córdoba</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
