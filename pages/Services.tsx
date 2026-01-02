import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrench, Truck, BookOpen, Settings, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'supply',
      icon: <Truck className="h-12 w-12 text-white" />,
      title: t('services.supply'),
      desc: t('services.supply_desc'),
      benefit: t('services.supply_benefit')
    },
    {
      key: 'maintenance',
      icon: <Wrench className="h-12 w-12 text-white" />,
      title: t('services.maintenance'),
      desc: t('services.maintenance_desc'),
      benefit: t('services.maintenance_benefit')
    },
    {
      key: 'consulting',
      icon: <BookOpen className="h-12 w-12 text-white" />,
      title: t('services.consulting'),
      desc: t('services.consulting_desc'),
      benefit: t('services.consulting_benefit')
    },
    {
      key: 'custom',
      icon: <Settings className="h-12 w-12 text-white" />,
      title: t('services.custom'),
      desc: t('services.custom_desc'),
      benefit: t('services.custom_benefit')
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-industrial-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">{t('services.title')}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{t('services.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-300">
                    <div className="md:w-1/3 bg-industrial-900 p-10 flex flex-col justify-center items-center text-center">
                        <div className="bg-industrial-800 p-4 rounded-full mb-6 ring-4 ring-industrial-700">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <div className="md:w-2/3 p-10 flex flex-col justify-center">
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed border-b border-gray-100 pb-6">
                            {service.desc}
                        </p>
                        <div className="flex items-start">
                            <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                                <Check className="h-4 w-4 text-green-600" />
                            </div>
                            <span className="font-bold text-industrial-800">{service.benefit}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-safety-500 rounded-xl p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-industrial-900/10 pattern-grid-lg"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-industrial-900">
                    <h3 className="text-3xl font-display font-bold mb-2">Need a custom solution?</h3>
                    <p className="text-lg font-medium opacity-90">Speak to our engineers about your specific industrial requirements.</p>
                </div>
                <Link to="/contact" className="bg-industrial-900 text-white font-bold py-4 px-10 rounded-lg hover:bg-industrial-800 transition-colors shadow-lg flex items-center whitespace-nowrap">
                    Contact Engineers <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;