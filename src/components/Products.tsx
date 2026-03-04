import { Plus, Search } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { categories, products } from '../data/products';

function Products() {
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState<number | null>(null);

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "Tous" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.producer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleAdd = (product: typeof products[0]) => {
        addToCart(product);
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 800);
    };

    return (
        <section id="boutique" className="py-24 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-12">
                    <span className="text-terracotta tracking-widest uppercase text-sm font-semibold">Du producteur à votre table</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mt-3 mb-4">
                        Notre Boutique
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-terracotta to-terracotta-light mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-sage-500 max-w-2xl mx-auto">
                        Tous nos produits sont sélectionnés auprès de producteurs locaux dans un rayon de 30 km
                    </p>
                </div>

                {/* Barre de recherche */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sage-400" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher un produit, un producteur..."
                            className="w-full pl-12 pr-4 py-3 bg-white border border-sage-200 rounded-full focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta text-sage-800 placeholder-sage-400 transition-all"
                        />
                    </div>
                </div>

                {/* Catégories */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.name}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeCategory === cat.name
                                ? 'bg-sage-700 text-white shadow-lg'
                                : 'bg-white text-sage-600 hover:bg-sage-100 border border-sage-200'
                                }`}
                        >
                            <span>{cat.icon}</span>
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grille de produits */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {product.badge && (
                                    <span className="absolute top-3 left-3 bg-sage-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {product.badge}
                                    </span>
                                )}
                            </div>

                            {/* Contenu */}
                            <div className="p-5">
                                <p className="text-sage-400 text-xs uppercase tracking-wider mb-1">{product.category}</p>
                                <h3 className="font-bold text-sage-800 mb-1 leading-tight">{product.name}</h3>
                                <p className="text-sage-400 text-xs mb-3">
                                    par <span className="text-terracotta font-medium">{product.producer}</span>
                                </p>

                                <div className="flex items-end justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-sage-800">{product.price.toFixed(2)}€</span>
                                        <span className="text-sage-400 text-xs block">{product.unit}</span>
                                    </div>
                                    <button
                                        onClick={() => handleAdd(product)}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${addedId === product.id
                                            ? 'bg-green-500 text-white scale-95'
                                            : 'bg-terracotta hover:bg-terracotta-dark text-white hover:shadow-md'
                                            }`}
                                    >
                                        {addedId === product.id ? (
                                            '✓ Ajouté'
                                        ) : (
                                            <>
                                                <Plus className="w-4 h-4" />
                                                Ajouter
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-16">
                        <span className="text-5xl mb-4 block">🔍</span>
                        <p className="text-sage-500 text-lg">Aucun produit trouvé</p>
                        <p className="text-sage-400 text-sm mt-2">Essayez un autre terme de recherche</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Products;
