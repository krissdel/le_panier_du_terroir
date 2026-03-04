import { Clock, Mail, MapPin, Phone, Truck } from 'lucide-react';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section id="contact" className="py-24 bg-sage-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <span className="text-terracotta tracking-widest uppercase text-sm font-semibold">Une question ?</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mt-3 mb-4">
                        Contactez-nous
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-terracotta to-terracotta-light mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-sage-500 max-w-2xl mx-auto">
                        Besoin d'un renseignement ? Envie de devenir producteur partenaire ? Écrivez-nous !
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Infos */}
                    <div className="space-y-6">
                        {/* Livraison */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                    <Truck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sage-800 mb-1">Livraison</h4>
                                    <p className="text-sage-500 text-sm">Gratuite dès 35€ — Mardi et vendredi</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact rapide */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-5 shadow-md text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-700 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-sage-800 text-sm mb-1">Téléphone</h4>
                                <a href="tel:+33476123456" className="text-sage-500 text-sm hover:text-terracotta transition-colors">
                                    04 76 12 34 56
                                </a>
                            </div>
                            <div className="bg-white rounded-xl p-5 shadow-md text-center">
                                <div className="w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-700 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h4 className="font-bold text-sage-800 text-sm mb-1">Email</h4>
                                <a href="mailto:contact@panierduterroir.fr" className="text-sage-500 text-sm hover:text-terracotta transition-colors">
                                    contact@panierduterroir.fr
                                </a>
                            </div>
                        </div>

                        {/* Adresse & Horaires */}
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sage-800 mb-1">Point de retrait</h4>
                                    <p className="text-sage-500 text-sm">12 Place du Marché, 38000 Grenoble</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-sage-600 to-sage-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sage-800 mb-1">Horaires retrait</h4>
                                    <p className="text-sage-500 text-sm">Mar. et Ven. 16h–19h / Sam. 9h–13h</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="bg-white rounded-xl p-8 shadow-md">
                        <h3 className="text-2xl font-bold text-sage-800 mb-2">Envoyez-nous un message</h3>
                        <p className="text-sage-400 text-sm mb-6">Nous vous répondons sous 24h.</p>

                        {status === 'success' && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-700 text-sm">✓ Message envoyé ! Nous reviendrons vers vous rapidement.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-sage-700 mb-1.5">Votre nom</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                                    className="w-full px-4 py-3 bg-sage-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta text-sage-800 placeholder-sage-400"
                                    placeholder="Marie Dupont" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-sage-700 mb-1.5">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                                    className="w-full px-4 py-3 bg-sage-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta text-sage-800 placeholder-sage-400"
                                    placeholder="marie@exemple.fr" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-sage-700 mb-1.5">Téléphone</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                    className="w-full px-4 py-3 bg-sage-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta text-sage-800 placeholder-sage-400"
                                    placeholder="06 12 34 56 78" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-sage-700 mb-1.5">Votre message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4}
                                    className="w-full px-4 py-3 bg-sage-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta text-sage-800 placeholder-sage-400 resize-none"
                                    placeholder="Je souhaiterais en savoir plus sur..." />
                            </div>
                            <button type="submit"
                                className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-3 px-6 rounded-lg font-semibold transition-all hover:shadow-lg">
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
                    <iframe
                        title="Localisation Le Panier du Terroir"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.5!2d5.7243!3d45.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48bd689be3f%3A0x!2sPlace+du+March%C3%A9%2C+38000+Grenoble!5e0!3m2!1sfr!2sfr!4v1"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}

export default Contact;
