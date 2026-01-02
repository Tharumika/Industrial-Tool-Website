import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Wrench } from 'lucide-react';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Close mobile menu if open when changing language (though language buttons are in top bar usually)
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/products' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-industrial-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-safety-500" />
            <span className="font-display font-bold text-2xl tracking-wide">TITAN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'bg-industrial-800 text-safety-500'
                      : 'hover:bg-industrial-800 hover:text-white text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Language Switcher & Quote Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white focus:outline-none">
                <Globe className="h-5 w-5 mr-1" />
                <span className="uppercase text-sm font-bold">{i18n.language.split('-')[0]}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50">
                <button
                  onClick={() => changeLanguage('en')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  English 🇬🇧
                </button>
                <button
                  onClick={() => changeLanguage('ja')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Japanese 🇯🇵
                </button>
                <button
                  onClick={() => changeLanguage('si')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sinhala 🇱🇰
                </button>
              </div>
            </div>
            
            <Link 
                to="/contact"
                className="bg-safety-500 hover:bg-safety-600 text-industrial-900 font-bold py-2 px-4 rounded transition-colors duration-200 text-sm"
            >
                {t('nav.quote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-industrial-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-industrial-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-industrial-900 border-t border-industrial-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                    ? 'bg-industrial-800 text-safety-500'
                    : 'text-gray-300 hover:bg-industrial-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="pt-4 pb-4 border-t border-industrial-800">
             <div className="flex items-center justify-center space-x-4 mb-4">
                <button onClick={() => changeLanguage('en')} className={`px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-industrial-800 text-safety-500' : 'text-gray-400'}`}>EN</button>
                <button onClick={() => changeLanguage('ja')} className={`px-2 py-1 rounded ${i18n.language === 'ja' ? 'bg-industrial-800 text-safety-500' : 'text-gray-400'}`}>JA</button>
                <button onClick={() => changeLanguage('si')} className={`px-2 py-1 rounded ${i18n.language === 'si' ? 'bg-industrial-800 text-safety-500' : 'text-gray-400'}`}>SI</button>
             </div>
             <div className="px-2">
                <Link 
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-safety-500 hover:bg-safety-600 text-industrial-900 font-bold py-3 px-4 rounded transition-colors duration-200"
                >
                    {t('nav.quote')}
                </Link>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;