import { Heart, Leaf, MapPin, Sprout } from 'lucide-react';

function About() {
    const values = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Circuit Court",
            description: "Tous nos produits viennent de producteurs situés à moins de 30 km."
        },
        {
            icon: <Sprout className="w-6 h-6" />,
            title: "Agriculture Raisonnée",
            description: "Nous privilégions le bio et les pratiques respectueuses de l'environnement."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Prix Justes",
            description: "Les producteurs fixent leurs prix, nous garantissons une rémunération équitable."
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Traçabilité",
            description: "Chaque produit est tracé de la ferme à votre assiette."
        },
    ];

    return (
        <section id="apropos" className="py-24 bg-sage-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <span className="text-terracotta tracking-widest uppercase text-sm font-semibold">Depuis 2019</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mt-3 mb-4">
                        Notre Histoire
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-terracotta to-terracotta-light mx-auto mb-6 rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                                alt="Notre boutique de produits locaux"
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 right-4 lg:-bottom-6 lg:right-4 bg-white rounded-2xl shadow-xl p-5 lg:p-6 hidden md:block">
                            <div className="text-center">
                                <span className="text-4xl font-bold text-terracotta">25+</span>
                                <p className="text-sage-500 text-sm mt-1">producteurs partenaires</p>
                            </div>
                        </div>
                    </div>

                    {/* Texte */}
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold text-sage-800 mb-6">
                            Rapprocher producteurs et consommateurs
                        </h3>

                        <div className="space-y-5 text-sage-600 leading-relaxed">
                            <p>
                                <strong className="text-sage-800">Le Panier du Terroir</strong> est né en <strong className="text-sage-800">2019</strong> d'une idée simple : permettre à chacun d'accéder à des produits frais, locaux et de qualité, tout en soutenant directement les producteurs de notre région.
                            </p>
                            <p>
                                Lassés de voir des produits parcourir des milliers de kilomètres avant d'arriver dans nos assiettes, <strong className="text-sage-800">Sophie et Marc Durand</strong> ont créé cette boutique en ligne pour raccourcir la chaîne et offrir le meilleur du terroir.
                            </p>
                            <p className="text-terracotta italic text-lg">
                                "Chaque commande est un acte citoyen. Vous soutenez l'économie locale et mangez mieux."
                            </p>
                            <p className="text-sage-500 text-sm">— Sophie Durand, Fondatrice</p>
                        </div>
                    </div>
                </div>

                {/* Valeurs */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center group">
                            <div className="w-14 h-14 bg-gradient-to-br from-sage-600 to-sage-700 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h4 className="font-bold text-sage-800 mb-2">{value.title}</h4>
                            <p className="text-sage-400 text-sm">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default About;
