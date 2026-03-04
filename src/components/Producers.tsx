function Producers() {
    const producers = [
        {
            name: "Ferme des Collines",
            specialty: "Fruits & Légumes Bio",
            image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&q=80",
            location: "Saint-Rémy, 12 km",
            description: "Pierre cultive ses légumes bio depuis 15 ans dans le respect des saisons.",
            products: 18
        },
        {
            name: "Fromagerie du Jura",
            specialty: "Fromages AOP",
            image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80",
            location: "Poligny, 25 km",
            description: "La famille Martin affine ses comtés dans des caves centenaires.",
            products: 8
        },
        {
            name: "Rucher des Alpes",
            specialty: "Miels & Produits de la ruche",
            image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80",
            location: "Mens, 28 km",
            description: "Jean-Luc et ses 200 ruches produisent des miels aux saveurs uniques.",
            products: 6
        },
        {
            name: "Domaine du Ventoux",
            specialty: "Vins & Spiritueux",
            image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&q=80",
            location: "Bédoin, 22 km",
            description: "Des vins bio élaborés avec passion au pied du Mont Ventoux.",
            products: 12
        },
    ];

    return (
        <section id="producteurs" className="py-24 bg-cream">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <span className="text-terracotta tracking-widest uppercase text-sm font-semibold">Nos partenaires</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-sage-800 mt-3 mb-4">
                        Nos Producteurs
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-terracotta to-terracotta-light mx-auto mb-6 rounded-full" />
                    <p className="text-lg text-sage-500 max-w-2xl mx-auto">
                        Des femmes et des hommes passionnés qui cultivent, élèvent et transforment avec soin
                    </p>
                </div>

                {/* Grille producteurs */}
                <div className="grid md:grid-cols-2 gap-8">
                    {producers.map((producer, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col sm:flex-row">
                            {/* Image */}
                            <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                                <img
                                    src={producer.image}
                                    alt={producer.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Contenu */}
                            <div className="p-6 flex-1">
                                <span className="text-terracotta text-xs font-semibold uppercase tracking-wider">{producer.specialty}</span>
                                <h3 className="text-xl font-bold text-sage-800 mt-1 mb-2">{producer.name}</h3>
                                <p className="text-sage-400 text-sm mb-3">{producer.description}</p>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-sage-500">📍 {producer.location}</span>
                                    <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        {producer.products} produits
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Producers;
