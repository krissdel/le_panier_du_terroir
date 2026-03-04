import { ArrowDown, Leaf, Truck } from 'lucide-react';

function Hero() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1920&q=80')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-sage-900/50 via-sage-900/30 to-sage-900/60" />
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
                {/* Badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm">
                        <Leaf className="w-4 h-4 text-green-300" />
                        100% Local
                    </div>
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm">
                        <Truck className="w-4 h-4 text-green-300" />
                        Livraison à domicile
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                    Le Panier
                    <span className="block text-green-300">du Terroir</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/85 mb-4 font-light max-w-2xl mx-auto leading-relaxed">
                    Des produits locaux et artisanaux, directement de nos producteurs à votre table.
                    Fraîcheur, qualité et circuit court.
                </p>

                <p className="text-lg text-green-200/80 mb-10 italic">
                    "Manger local, c'est soutenir nos producteurs"
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => scrollTo('boutique')}
                        className="w-full sm:w-auto bg-terracotta hover:bg-terracotta-dark text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-center"
                    >
                        Découvrir nos produits
                    </button>
                    <button
                        onClick={() => scrollTo('apropos')}
                        className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-center"
                    >
                        Notre histoire
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto">
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-white">25+</span>
                        <span className="text-white/60 text-sm">Producteurs</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-white">150+</span>
                        <span className="text-white/60 text-sm">Produits</span>
                    </div>
                    <div className="text-center">
                        <span className="block text-3xl font-bold text-white">30km</span>
                        <span className="text-white/60 text-sm">Rayon max</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={() => scrollTo('boutique')}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce"
            >
                <ArrowDown className="w-8 h-8" />
            </button>
        </section>
    );
}

export default Hero;
