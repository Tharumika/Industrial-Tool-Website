import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Clock, Info } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
        setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
        <div className="bg-industrial-900 text-white py-16 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Contact Info Card */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-industrial-900 mb-6 border-b border-gray-100 pb-4">Contact Details</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <MapPin className="h-6 w-6 text-safety-500 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">{t('contact.address')}</h4>
                                    <p className="text-gray-600 text-sm">123 Industrial Way, Tech Park District<br/>Tokyo, Japan 100-0001</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-6 w-6 text-safety-500 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">{t('contact.phone')}</h4>
                                    <p className="text-gray-600 text-sm">+81 3-1234-5678</p>
                                    <p className="text-gray-500 text-xs mt-1">Support: Ext 2</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-6 w-6 text-safety-500 mt-1 mr-4 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-1">{t('contact.email')}</h4>
                                    <p className="text-gray-600 text-sm">sales@titan-tools.global</p>
                                    <p className="text-gray-500 text-xs mt-1">support@titan-tools.global</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-industrial-800 text-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-center mb-6">
                            <Clock className="h-6 w-6 text-safety-500 mr-3" />
                            <h3 className="text-lg font-bold">{t('contact.hours_label')}</h3>
                        </div>
                        <p className="text-gray-300 mb-4">{t('contact.hours_value')}</p>
                        <div className="flex items-start bg-industrial-700/50 p-3 rounded">
                            <Info className="h-5 w-5 text-safety-500 mr-2 flex-shrink-0 mt-0.5" />
                            <p className="text-xs text-gray-400 italic">{t('contact.response_note')}</p>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg h-full">
                        {formStatus === 'success' ? (
                            <div className="text-center py-20 h-full flex flex-col justify-center items-center">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                                    <Send className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-green-700 mb-2">Message Sent Successfully!</h3>
                                <p className="text-gray-600 text-lg mb-8">Thank you for contacting Titan Industrial Tools. <br/>A representative will be in touch shortly.</p>
                                <button onClick={() => setFormStatus('idle')} className="text-industrial-900 font-bold underline hover:text-safety-600">Send another message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-industrial-900">{t('contact.intro')}</h3>
                                    <p className="text-gray-500 mt-1">Fill out the form below and we will get back to you.</p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.name')} <span className="text-red-500">*</span></label>
                                        <input type="text" id="name" required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-safety-500 focus:border-safety-500 outline-none transition-all" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.email')} <span className="text-red-500">*</span></label>
                                        <input type="email" id="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-safety-500 focus:border-safety-500 outline-none transition-all" />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.company')}</label>
                                    <input type="text" id="company" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-safety-500 focus:border-safety-500 outline-none transition-all" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">{t('contact.message')} <span className="text-red-500">*</span></label>
                                    <textarea id="message" rows={5} required className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-safety-500 focus:border-safety-500 outline-none transition-all"></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'submitting'}
                                    className={`w-full bg-safety-500 text-industrial-900 font-bold text-lg py-4 px-6 rounded hover:bg-safety-600 transition-colors flex items-center justify-center shadow-lg ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {formStatus === 'submitting' ? 'Sending Message...' : t('contact.submit')}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="mt-16 bg-white p-4 rounded-lg shadow-md">
                 <div className="w-full h-96 bg-gray-200 rounded flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-slate-300 flex flex-col items-center justify-center text-slate-500 group-hover:bg-slate-200 transition-colors cursor-pointer">
                         <MapPin className="h-12 w-12 mb-3 text-industrial-500" />
                         <span className="font-bold text-lg">Interactive Global Map Loading...</span>
                         <span className="text-sm">(Google Maps API Placeholder)</span>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;