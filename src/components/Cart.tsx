import { Minus, Plus, ShoppingBasket, Trash2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

function Cart() {
    const { items, removeFromCart, updateQuantity, clearCart, totalPrice, isOpen, setIsOpen } = useCart();

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 z-50 transition-opacity"
                onClick={() => setIsOpen(false)}
            />

            {/* Panneau latéral */}
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-sage-200">
                    <div className="flex items-center gap-3">
                        <ShoppingBasket className="w-6 h-6 text-sage-700" />
                        <h2 className="text-xl font-bold text-sage-800">Votre Panier</h2>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-sage-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5 text-sage-600" />
                    </button>
                </div>

                {/* Corps */}
                {items.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <span className="text-6xl block mb-4">🧺</span>
                            <p className="text-sage-500 text-lg mb-2">Votre panier est vide</p>
                            <p className="text-sage-400 text-sm">Découvrez nos produits locaux !</p>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-6 bg-sage-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-sage-800 transition-colors"
                            >
                                Continuer mes achats
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Liste des produits */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {items.map((item) => (
                                <div key={item.product.id} className="flex gap-4 bg-sage-50 rounded-xl p-4">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.name}
                                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-sage-800 text-sm leading-tight truncate">{item.product.name}</h4>
                                        <p className="text-sage-400 text-xs mt-0.5">{item.product.unit}</p>
                                        <p className="text-terracotta font-bold mt-1">{item.product.price.toFixed(2)}€</p>

                                        <div className="flex items-center justify-between mt-2">
                                            {/* Quantité */}
                                            <div className="flex items-center gap-2 bg-white rounded-full border border-sage-200">
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                    className="p-1.5 hover:bg-sage-100 rounded-full transition-colors"
                                                >
                                                    <Minus className="w-3.5 h-3.5 text-sage-600" />
                                                </button>
                                                <span className="text-sm font-semibold text-sage-800 w-6 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                    className="p-1.5 hover:bg-sage-100 rounded-full transition-colors"
                                                >
                                                    <Plus className="w-3.5 h-3.5 text-sage-600" />
                                                </button>
                                            </div>

                                            {/* Supprimer */}
                                            <button
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-sage-200 p-6 space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-sage-500">
                                    <span>Sous-total</span>
                                    <span>{totalPrice.toFixed(2)}€</span>
                                </div>
                                <div className="flex justify-between text-sm text-sage-500">
                                    <span>Livraison</span>
                                    <span className={totalPrice >= 35 ? 'text-green-600 font-semibold' : ''}>
                                        {totalPrice >= 35 ? 'Gratuite' : '4,90€'}
                                    </span>
                                </div>
                                {totalPrice < 35 && (
                                    <p className="text-xs text-sage-400 italic">
                                        Plus que {(35 - totalPrice).toFixed(2)}€ pour la livraison gratuite !
                                    </p>
                                )}
                                <div className="flex justify-between font-bold text-lg text-sage-800 pt-2 border-t border-sage-200">
                                    <span>Total</span>
                                    <span>{(totalPrice + (totalPrice >= 35 ? 0 : 4.90)).toFixed(2)}€</span>
                                </div>
                            </div>

                            <button className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-3.5 rounded-full font-semibold text-lg transition-all hover:shadow-lg">
                                Commander — {(totalPrice + (totalPrice >= 35 ? 0 : 4.90)).toFixed(2)}€
                            </button>

                            <button
                                onClick={clearCart}
                                className="w-full text-sage-400 hover:text-red-500 text-sm py-2 transition-colors"
                            >
                                Vider le panier
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;
