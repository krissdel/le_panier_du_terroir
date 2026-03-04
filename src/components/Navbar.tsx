import { Menu, ShoppingBasket, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { totalItems, setIsOpen: setCartOpen } = useCart();

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    const links = [
        { id: 'accueil', label: 'Accueil' },
        { id: 'boutique', label: 'Boutique' },
        { id: 'apropos', label: 'Notre Histoire' },
        { id: 'producteurs', label: 'Producteurs' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header className="fixed w-full top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sage-200/50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <button onClick={() => scrollTo('accueil')} className="flex items-center gap-3 group">
                        <span className="text-3xl">🧺</span>
                        <div>
                            <h1 className="text-xl font-bold text-sage-800 tracking-wide">Le Panier du Terroir</h1>
                            <p className="text-xs text-sage-500 tracking-widest uppercase">Produits Locaux</p>
                        </div>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="text-sage-600 hover:text-sage-800 transition-colors text-sm tracking-wide uppercase font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Panier */}
                        <button
                            onClick={() => setCartOpen(true)}
                            className="relative bg-sage-700 hover:bg-sage-800 text-white px-4 py-2.5 rounded-full flex items-center gap-2 transition-colors"
                        >
                            <ShoppingBasket className="w-5 h-5" />
                            <span className="text-sm font-semibold">Panier</span>
                            {totalItems > 0 && (
                                <span className="absolute -top-2 -right-2 w-6 h-6 bg-terracotta text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                    </nav>

                    {/* Mobile */}
                    <div className="flex items-center gap-3 md:hidden">
                        <button
                            onClick={() => setCartOpen(true)}
                            className="relative p-2 text-sage-700"
                        >
                            <ShoppingBasket className="w-6 h-6" />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-terracotta text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <button
                            className="p-2 text-sage-700 hover:bg-sage-100 rounded-lg transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-cream border-t border-sage-200">
                    <div className="px-4 py-4 space-y-1">
                        {links.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="block w-full text-left px-4 py-3 text-sage-600 hover:text-sage-800 hover:bg-sage-50 rounded-lg transition-colors text-sm tracking-wide uppercase"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

export default Navbar;
