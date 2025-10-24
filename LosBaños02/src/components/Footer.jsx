
import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Droplets className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">
                Suministros <span className="text-blue-400">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Más de 30 años suministrando calidad y confianza a profesionales de Sevilla y Córdoba.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="font-semibold text-white">Experiencia que marca la diferencia</p>
              <p>Calidad Quimxel garantizada siempre</p>
              <p>Tu socio local de confianza</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Productos</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Químicos Quimxel</li>
              <li>Lavandería Industrial</li>
              <li>Lavavajillas Profesional</li>
              <li>Desinfección</li>
              <li>Menaje y Desechables</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-slate-400">
                <Phone className="w-4 h-4 mt-1 text-blue-400" />
                <span>+34 XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <Mail className="w-4 h-4 mt-1 text-blue-400" />
                <span>info@tuempresa.com</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <span>Sevilla y Córdoba</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {currentYear} Suministros Pro. Todos los derechos reservados.</p>
          <p className="mt-2">Más de 30 años de experiencia en suministros profesionales</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
