import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrench, Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-industrial-900 text-gray-400 border-t border-industrial-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-safety-500" />
              <span className="font-display font-bold text-2xl text-white tracking-wide">TITAN</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {t('footer.company_desc')}
            </p>
            <div>
                 <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">{t('footer.follow_us')}</h4>
                 <div className="flex space-x-4">
                    <a href="#" className="bg-industrial-800 p-2 rounded hover:bg-safety-500 hover:text-industrial-900 transition-colors"><Facebook size={18} /></a>
                    <a href="#" className="bg-industrial-800 p-2 rounded hover:bg-safety-500 hover:text-industrial-900 transition-colors"><Twitter size={18} /></a>
                    <a href="#" className="bg-industrial-800 p-2 rounded hover:bg-safety-500 hover:text-industrial-900 transition-colors"><Linkedin size={18} /></a>
                </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display uppercase tracking-wider">{t('footer.quick_links')}</h3>
            <ul className="space-y-3 text-sm">
                <li><Link to="/" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('nav.home')}</Link></li>
                <li><Link to="/products" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('nav.products')}</Link></li>
                <li><Link to="/services" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('nav.services')}</Link></li>
                <li><Link to="/about" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('nav.about')}</Link></li>
                <li><Link to="/contact" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Products & Services */}
          <div>
            <h3 className="text-white font-bold mb-6 font-display uppercase tracking-wider">{t('footer.products_services')}</h3>
            <ul className="space-y-3 text-sm">
                <li><Link to="/products" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('products.category_power')}</Link></li>
                <li><Link to="/products" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('products.category_machinery')}</Link></li>
                <li><Link to="/products" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('products.category_construction')}</Link></li>
                <li><Link to="/services" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('services.maintenance')}</Link></li>
                <li><Link to="/services" className="hover:text-safety-500 transition-colors flex items-center"><span className="mr-2">›</span> {t('services.custom')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
             <h3 className="text-white font-bold mb-6 font-display uppercase tracking-wider">{t('footer.contact_info')}</h3>
             <ul className="space-y-4 text-sm">
                 <li className="flex items-start">
                     <MapPin className="h-5 w-5 mr-3 text-safety-500 flex-shrink-0 mt-0.5" />
                     <span>123 Industrial Way, Tech Park District,<br/>Tokyo, Japan 100-0001</span>
                 </li>
                 <li className="flex items-center">
                     <Phone className="h-5 w-5 mr-3 text-safety-500 flex-shrink-0" />
                     <span>+81 3-1234-5678</span>
                 </li>
                 <li className="flex items-center">
                     <Mail className="h-5 w-5 mr-3 text-safety-500 flex-shrink-0" />
                     <span>sales@titan-tools.global</span>
                 </li>
                 <li className="flex items-start">
                     <Clock className="h-5 w-5 mr-3 text-safety-500 flex-shrink-0 mt-0.5" />
                     <span>{t('contact.hours_value')}</span>
                 </li>
             </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 Titan Industrial Tools. {t('footer.rights')}</p>
          <div className="mt-2 md:mt-0 flex space-x-6">
             <a href="#" className="hover:text-gray-400">Privacy Policy</a>
             <a href="#" className="hover:text-gray-400">Terms of Service</a>
             <a href="#" className="hover:text-gray-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;