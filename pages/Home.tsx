import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Globe2, Hammer, Wrench, Headset } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[800px] flex items-center bg-industrial-900 text-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Industrial Background" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-900/95 via-industrial-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="inline-block bg-safety-500 text-industrial-900 font-bold px-3 py-1 mb-6 text-sm uppercase tracking-widest rounded-sm">
                Global Industrial Standard
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight mb-6 shadow-black drop-shadow-lg">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl border-l-4 border-safety-500 pl-6">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="inline-flex items-center justify-center bg-safety-500 text-industrial-900 font-bold text-lg px-8 py-4 rounded hover:bg-safety-600 transition-all duration-300 shadow-lg hover:shadow-safety-500/50"
              >
                {t('hero.cta_primary')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-lg px-8 py-4 rounded hover:bg-white hover:text-industrial-900 transition-all duration-300"
              >
                {t('hero.cta_secondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="md:w-1/2 relative">
                      <div className="absolute -top-4 -left-4 w-24 h-24 bg-safety-500 z-0"></div>
                      <img src="https://picsum.photos/600/400?random=101" alt="Factory Interior" className="relative z-10 rounded-lg shadow-2xl w-full" />
                  </div>
                  <div className="md:w-1/2">
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-industrial-900 mb-6">{t('home.about_preview_title')}</h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                          {t('home.about_preview_text')}
                      </p>
                      <Link to="/about" className="text-safety-600 font-bold hover:text-safety-700 flex items-center text-lg">
                          {t('home.read_more')} <ArrowRight className="ml-2" />
                      </Link>
                  </div>
              </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-industrial-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t('home.why_us_title')}</h2>
              <div className="h-1 w-20 bg-safety-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-industrial-800 p-8 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform duration-300 border border-industrial-700">
              <div className="w-16 h-16 bg-industrial-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-safety-500" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('home.why_quality_title')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('home.why_quality_text')}</p>
            </div>
            <div className="bg-industrial-800 p-8 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform duration-300 border border-industrial-700">
              <div className="w-16 h-16 bg-industrial-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Headset className="h-8 w-8 text-safety-500" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('home.why_support_title')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('home.why_support_text')}</p>
            </div>
            <div className="bg-industrial-800 p-8 rounded-lg text-center hover:transform hover:-translate-y-2 transition-transform duration-300 border border-industrial-700">
              <div className="w-16 h-16 bg-industrial-700 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe2 className="h-8 w-8 text-safety-500" />
              </div>
              <h3 className="font-bold text-xl mb-3">{t('home.why_global_title')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('home.why_global_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-industrial-900 mb-4">{t('products.title')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('products.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('products.category_power'), img: 'https://picsum.photos/400/300?random=1', icon: <Hammer /> },
              { title: t('products.category_machinery'), img: 'https://picsum.photos/400/300?random=2', icon: <Wrench /> },
              { title: t('products.category_construction'), img: 'https://picsum.photos/400/300?random=3', icon: <ShieldCheck /> },
            ].map((cat, idx) => (
               <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg bg-white border border-gray-100">
                 <div className="h-56 overflow-hidden">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold font-display">{cat.title}</h3>
                    </div>
                 </div>
                 <div className="p-6">
                    <Link to="/products" className="inline-flex items-center justify-between w-full text-industrial-900 font-bold hover:text-safety-600 transition-colors">
                        {t('products.view_details')} <ArrowRight className="h-5 w-5" />
                    </Link>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-safety-500 relative overflow-hidden">
         <div className="absolute inset-0 bg-industrial-900/10 pattern-grid-lg"></div>
         <div className="relative max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-4xl font-display font-bold text-industrial-900 mb-6">{t('home.final_cta_title')}</h2>
             <p className="text-industrial-900/80 text-xl mb-10 font-medium">Join thousands of industrial partners optimizing their workflow with Titan.</p>
             <Link to="/contact" className="inline-block bg-industrial-900 text-white font-bold text-xl px-12 py-5 rounded hover:bg-industrial-800 shadow-2xl transform hover:-translate-y-1 transition-all">
                {t('home.final_cta_button')}
             </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;