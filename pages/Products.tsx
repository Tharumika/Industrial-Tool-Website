import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Filter, Hammer, Truck, Settings } from 'lucide-react';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Mock Products Data
  const products = [
    { id: 1, name: "Industrial Drill X500", category: "power", img: "https://picsum.photos/400/300?random=10", useCase: "Assembly Lines" },
    { id: 2, name: "Hydraulic Press Series 9", category: "machinery", img: "https://picsum.photos/400/300?random=11", useCase: "Metal Forming" },
    { id: 3, name: "Concrete Mixer Pro", category: "construction", img: "https://picsum.photos/400/300?random=12", useCase: "Site Preparation" },
    { id: 4, name: "Angle Grinder 20V", category: "power", img: "https://picsum.photos/400/300?random=13", useCase: "Metal Fabrication" },
    { id: 5, name: "Excavator Arm Attachment", category: "machinery", img: "https://picsum.photos/400/300?random=14", useCase: "Earthmoving" },
    { id: 6, name: "Safety Gear Set", category: "construction", img: "https://picsum.photos/400/300?random=15", useCase: "Worker Safety" },
  ];

  const categories = [
    { id: 'all', label: t('products.category_all'), icon: null },
    { id: 'power', label: t('products.category_power'), icon: <Hammer size={16} /> },
    { id: 'machinery', label: t('products.category_machinery'), icon: <Settings size={16} /> },
    { id: 'construction', label: t('products.category_construction'), icon: <Truck size={16} /> },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const getCategoryIntro = () => {
      switch(activeCategory) {
          case 'power': return t('products.intro_power');
          case 'machinery': return t('products.intro_machinery');
          case 'construction': return t('products.intro_construction');
          default: return t('products.subtitle');
      }
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-industrial-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold">{t('products.title')}</h1>
          <p className="text-gray-300 mt-4 text-xl max-w-2xl">{t('products.subtitle')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Category Filter & Intro */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center text-gray-700 mb-4">
                        <Filter size={20} className="text-safety-500" />
                        <span className="ml-2 font-bold uppercase tracking-wide text-sm">{t('products.filter_label')}</span>
                    </div>
                    <div className="space-y-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`w-full text-left px-4 py-3 rounded transition-all flex items-center ${
                                    activeCategory === cat.id 
                                    ? 'bg-industrial-900 text-white font-bold' 
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            >
                                {cat.icon && <span className="mr-3 opacity-70">{cat.icon}</span>}
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="md:w-3/4">
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-safety-500 mb-8">
                    <h3 className="font-bold text-industrial-900 text-lg mb-1">
                        {categories.find(c => c.id === activeCategory)?.label}
                    </h3>
                    <p className="text-gray-600">{getCategoryIntro()}</p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group">
                            <div className="h-48 overflow-hidden relative">
                                <img src={product.img} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-2 right-2 bg-industrial-900/90 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                                    {product.category.toUpperCase()}
                                </div>
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <h3 className="text-lg font-bold text-industrial-900 mb-2 leading-tight">{product.name}</h3>
                                
                                <div className="mt-2 mb-4">
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">{t('products.use_case')}</span>
                                    <span className="text-sm font-medium text-industrial-700 bg-industrial-50 px-2 py-1 rounded inline-block">
                                        {product.useCase}
                                    </span>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <button className="w-full bg-safety-500 text-industrial-900 font-bold py-2 px-4 rounded hover:bg-safety-600 transition-colors text-sm uppercase tracking-wide">
                                        {t('products.request_quote')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                        <p className="text-gray-500 font-medium">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;