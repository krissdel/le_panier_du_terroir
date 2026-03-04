import { Product } from '../context/CartContext';

export const products: Product[] = [
    // Fruits & Légumes
    {
        id: 1,
        name: "Panier de Légumes de Saison",
        price: 18.90,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80",
        category: "Fruits & Légumes",
        producer: "Ferme des Collines",
        unit: "le panier (3kg)",
        badge: "Bio"
    },
    {
        id: 2,
        name: "Tomates Anciennes Variées",
        price: 4.90,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80",
        category: "Fruits & Légumes",
        producer: "Ferme des Collines",
        unit: "le kg"
    },
    {
        id: 3,
        name: "Pommes Golden Bio",
        price: 3.80,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80",
        category: "Fruits & Légumes",
        producer: "Verger du Soleil",
        unit: "le kg",
        badge: "Bio"
    },
    {
        id: 4,
        name: "Fraises Gariguettes",
        price: 6.50,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80",
        category: "Fruits & Légumes",
        producer: "Verger du Soleil",
        unit: "la barquette 500g",
        badge: "Saison"
    },

    // Fromages & Crèmerie
    {
        id: 5,
        name: "Comté AOP 18 mois",
        price: 24.90,
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=600&q=80",
        category: "Fromages & Crèmerie",
        producer: "Fromagerie Jura",
        unit: "le kg",
        badge: "AOP"
    },
    {
        id: 6,
        name: "Chèvre Frais aux Herbes",
        price: 4.20,
        image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=600&q=80",
        category: "Fromages & Crèmerie",
        producer: "Chèvrerie du Val",
        unit: "la pièce (150g)"
    },
    {
        id: 7,
        name: "Beurre de Baratte Demi-Sel",
        price: 4.80,
        image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80",
        category: "Fromages & Crèmerie",
        producer: "Laiterie du Pré",
        unit: "la motte (250g)",
        badge: "Artisanal"
    },
    {
        id: 8,
        name: "Yaourts Nature Fermiers",
        price: 3.90,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
        category: "Fromages & Crèmerie",
        producer: "Laiterie du Pré",
        unit: "les 4 pots"
    },

    // Épicerie & Conserves
    {
        id: 9,
        name: "Miel de Lavande",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
        category: "Épicerie & Conserves",
        producer: "Rucher des Alpes",
        unit: "le pot (500g)",
        badge: "Récolte locale"
    },
    {
        id: 10,
        name: "Confiture de Figues Maison",
        price: 6.90,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
        category: "Épicerie & Conserves",
        producer: "Les Douceurs de Marie",
        unit: "le pot (340g)"
    },
    {
        id: 11,
        name: "Huile d'Olive Vierge Extra",
        price: 14.90,
        image: "https://images.unsplash.com/photo-1474979266404-7eaacdc50f73?w=600&q=80",
        category: "Épicerie & Conserves",
        producer: "Moulin du Sud",
        unit: "la bouteille (75cl)",
        badge: "Pressée à froid"
    },
    {
        id: 12,
        name: "Pâtes Artisanales aux Œufs",
        price: 5.40,
        image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=600&q=80",
        category: "Épicerie & Conserves",
        producer: "Atelier Pasta",
        unit: "le paquet (500g)"
    },

    // Boissons
    {
        id: 13,
        name: "Jus de Pomme Artisanal",
        price: 5.90,
        image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=600&q=80",
        category: "Boissons",
        producer: "Verger du Soleil",
        unit: "la bouteille (1L)",
        badge: "Pur jus"
    },
    {
        id: 14,
        name: "Vin Rouge Côtes du Rhône",
        price: 9.80,
        image: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80",
        category: "Boissons",
        producer: "Domaine du Ventoux",
        unit: "la bouteille (75cl)"
    },
    {
        id: 15,
        name: "Limonade Bio au Citron",
        price: 3.90,
        image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
        category: "Boissons",
        producer: "Brasserie des Sources",
        unit: "la bouteille (33cl)",
        badge: "Bio"
    },
    {
        id: 16,
        name: "Cidre Fermier Brut",
        price: 6.50,
        image: "https://images.unsplash.com/photo-1585684614242-0b4b2e136f5c?w=600&q=80",
        category: "Boissons",
        producer: "Ferme des Pommiers",
        unit: "la bouteille (75cl)"
    },
];

export const categories = [
    { name: "Tous", icon: "🧺" },
    { name: "Fruits & Légumes", icon: "🥕" },
    { name: "Fromages & Crèmerie", icon: "🧀" },
    { name: "Épicerie & Conserves", icon: "🍯" },
    { name: "Boissons", icon: "🍷" },
];
