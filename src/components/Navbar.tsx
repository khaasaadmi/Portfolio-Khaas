import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Globe2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<'EN' | 'IT'>('EN');
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: language === 'EN' ? 'Home' : 'Casa', path: '/' },
    { name: language === 'EN' ? 'About' : 'Chi Siamo', path: '/about' },
    { name: language === 'EN' ? 'Services' : 'Servizi', path: '/services' },
    { name: language === 'EN' ? 'Portfolio' : 'Portafoglio', path: '/portfolio' },
    { name: language === 'EN' ? 'Contact' : 'Contatti', path: '/contact' },
  ];

  const toggleLanguage = (lang: 'EN' | 'IT') => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <nav className="bg-black/95 fixed w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-primary-500" />
              <span className="text-white font-bold text-xl">Khaas</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-primary-500'
                      : 'text-gray-300 hover:text-primary-400'
                  } px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Globe2 className="h-5 w-5" />
                <span>{language}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {['EN', 'IT'].map((lang) => (
                        <button
                          key={lang}
                          onClick={() => toggleLanguage(lang as 'EN' | 'IT')}
                          className={`${
                            language === lang ? 'text-primary-500' : 'text-gray-300'
                          } group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-700 transition-colors`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-primary-500'
                      : 'text-gray-300 hover:text-primary-400'
                  } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="px-3 py-2">
                <div className="flex space-x-2">
                  {['EN', 'IT'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => toggleLanguage(lang as 'EN' | 'IT')}
                      className={`${
                        language === lang
                          ? 'text-primary-500 bg-gray-800'
                          : 'text-gray-300 hover:bg-gray-800'
                      } px-3 py-1 rounded-md text-sm transition-colors`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}