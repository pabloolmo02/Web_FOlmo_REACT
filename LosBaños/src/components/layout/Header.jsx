
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, FileText } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-slate-900">QUIMXEL</span>
              <span className="text-xs text-slate-600">Sevilla & Córdoba</span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center space-x-6">
             <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm">
              Inicio
            </Link>
            <Link to="/productos" className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm">
              Productos
            </Link>
             <Link to="/empresa" className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm">
              Empresa
            </Link>
            <Link to="/documentacion" className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm">
              Documentación
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/documentacion">
                <FileText className="h-5 w-5" />
              </Link>
            </Button>
            
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/carrito">
                    <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/dashboard">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" onClick={handleLogout}>
                  Cerrar Sesión
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <Link to="/login">Iniciar Sesión</Link>
                </Button>
                <Button asChild>
                  <Link to="/registro">Solicitar Acceso B2B</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Inicio
              </Link>
              <Link to="/productos" className="text-slate-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Productos
              </Link>
              <Link to="/empresa" className="text-slate-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Empresa
              </Link>
              <Link to="/documentacion" className="text-slate-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Documentación
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/carrito" className="text-slate-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Carrito
                  </Link>
                  <Link to="/dashboard" className="text-slate-700 hover:text-blue-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                    Mi Cuenta
                  </Link>
                  <Button variant="outline" onClick={() => { handleLogout(); setMobileMenuOpen(false); }}>
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/login">Iniciar Sesión</Link>
                  </Button>
                  <Button asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/registro">Solicitar Acceso B2B</Link>
                  </Button>
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
