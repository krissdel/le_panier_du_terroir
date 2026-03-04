import { Facebook, Instagram } from 'lucide-react';

function Footer() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-sage-900 text-sage-300 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Logo */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">🧺</span>
                            <div>
                                <h3 className="text-xl font-bold text-cream">Le Panier du Terroir</h3>
                                <p className="text-sage-500 text-xs tracking-widest uppercase">Produits Locaux & Artisanaux</p>
                            </div>
                        </div>
                        <p className="text-sage-500 leading-relaxed max-w-sm">
                            Depuis 2019, nous rapprochons les producteurs locaux et les consommateurs. Des produits frais, de qualité, livrés chez vous en circuit court.
                        </p>

                        <div className="flex gap-3 mt-6">
                            <a href="#" className="w-10 h-10 bg-sage-800 hover:bg-terracotta rounded-lg flex items-center justify-center transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-sage-800 hover:bg-terracotta rounded-lg flex items-center justify-center transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-cream font-bold mb-4 uppercase tracking-wide text-sm">Navigation</h4>
                        <ul className="space-y-3">
                            {[
                                { id: 'accueil', label: 'Accueil' },
                                { id: 'boutique', label: 'Boutique' },
                                { id: 'apropos', label: 'Notre Histoire' },
                                { id: 'producteurs', label: 'Producteurs' },
                                { id: 'contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollTo(link.id)}
                                        className="text-sage-500 hover:text-terracotta-light transition-colors text-sm"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Infos pratiques */}
                    <div>
                        <h4 className="text-cream font-bold mb-4 uppercase tracking-wide text-sm">Infos pratiques</h4>
                        <div className="space-y-3 text-sage-500 text-sm">
                            <p>🚚 Livraison gratuite dès 35€</p>
                            <p>📍 Retrait: Mar. Ven. Sam.</p>
                            <p>
                                <a href="tel:+33476123456" className="hover:text-terracotta-light transition-colors">📞 04 76 12 34 56</a>
                            </p>
                            <p>
                                <a href="mailto:contact@panierduterroir.fr" className="hover:text-terracotta-light transition-colors">✉️ contact@panierduterroir.fr</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Séparateur */}
                <div className="border-t border-sage-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sage-600 text-sm">
                        © 2026 Le Panier du Terroir — Tous droits réservés
                    </p>
                    <p className="text-sage-700 text-xs">
                        Site créé par <a href="https://eeldigit.com" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-terracotta-light transition-colors font-semibold">EelDigit</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
