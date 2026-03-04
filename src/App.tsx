import About from './components/About';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Producers from './components/Producers';
import Products from './components/Products';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <CartProvider>
            <div className="min-h-screen bg-cream overflow-x-hidden">
                <Navbar />
                <Hero />
                <Products />
                <About />
                <Producers />
                <Contact />
                <Footer />
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
