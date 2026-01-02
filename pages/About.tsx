import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Users, TrendingUp, Shield, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Header */}
      <div className="bg-industrial-800 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-900/50"></div>
        <div className="relative z-10">
             <h1 className="text-4xl md:text-5xl font-display font-bold">{t('about.title')}</h1>
             <div className="h-1 w-24 bg-safety-500 mx-auto mt-6"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Overview */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
            <div className="md:w-1/2">
                 <h2 className="text-sm font-bold text-safety-600 uppercase tracking-widest mb-2">{t('about.overview_title')}</h2>
                 <h3 className="text-3xl font-display font-bold text-industrial-900 mb-6">Global Precision. Local Support.</h3>
                 <p className="text-gray-600 leading-relaxed text-lg mb-6">{t('about.overview_text')}</p>
                 <div className="grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                    <div>
                        <span className="block text-4xl font-bold text-industrial-900">25+</span>
                        <span className="text-sm text-gray-500 font-medium uppercase mt-1 block">Years of Excellence</span>
                    </div>
                    <div>
                        <span className="block text-4xl font-bold text-industrial-900">50+</span>
                        <span className="text-sm text-gray-500 font-medium uppercase mt-1 block">Countries Served</span>
                    </div>
                 </div>
            </div>
            <div className="md:w-1/2 relative">
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-industrial-100 rounded-lg -z-10"></div>
                <img src="https://picsum.photos/600/400?grayscale&blur=1" alt="Factory Floor" className="rounded-lg shadow-xl w-full" />
            </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-white p-10 rounded-lg shadow-lg border-l-8 border-safety-500">
                <div className="w-14 h-14 bg-industrial-900 rounded-full flex items-center justify-center mb-6 shadow-md">
                    <Award className="text-safety-500 h-7 w-7" />
                </div>
                <h2 className="text-2xl font-display font-bold text-industrial-900 mb-4">{t('about.mission')}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{t('about.mission_text')}</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg border-l-8 border-industrial-900">
                <div className="w-14 h-14 bg-safety-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                    <TrendingUp className="text-industrial-900 h-7 w-7" />
                </div>
                <h2 className="text-2xl font-display font-bold text-industrial-900 mb-4">{t('about.vision')}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{t('about.vision_text')}</p>
            </div>
        </div>

        {/* Core Values */}
        <div className="mb-24 text-center">
            <h2 className="text-3xl font-display font-bold text-industrial-900 mb-12">{t('about.values_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-industrial-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                    <Heart className="h-10 w-10 text-safety-600 mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-industrial-900 mb-3">{t('about.value_integrity')}</h3>
                    <p className="text-gray-600">{t('about.value_integrity_text')}</p>
                </div>
                <div className="bg-industrial-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                    <Zap className="h-10 w-10 text-safety-600 mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-industrial-900 mb-3">{t('about.value_innovation')}</h3>
                    <p className="text-gray-600">{t('about.value_innovation_text')}</p>
                </div>
                <div className="bg-industrial-50 p-8 rounded-xl hover:shadow-md transition-shadow">
                    <Shield className="h-10 w-10 text-safety-600 mx-auto mb-4" />
                    <h3 className="font-bold text-xl text-industrial-900 mb-3">{t('about.value_safety')}</h3>
                    <p className="text-gray-600">{t('about.value_safety_text')}</p>
                </div>
            </div>
        </div>

        {/* Safety Commitment */}
        <div className="bg-industrial-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-safety-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
             
             <div className="relative z-10 max-w-3xl mx-auto">
                 <Shield className="mx-auto h-16 w-16 text-safety-500 mb-6" />
                 <h3 className="text-3xl font-display font-bold mb-4">{t('about.safety_commitment')}</h3>
                 <p className="text-gray-300 text-lg leading-relaxed">
                    {t('about.safety_text')}
                 </p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default About;