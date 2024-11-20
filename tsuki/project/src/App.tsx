import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800",
      name: "TSUKI ESSENTIAL TEE",
      price: "€40.00"
    },
    {
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800",
      name: "OVERSIZED COAT",
      price: "¥42,800"
    },
    {
      image: "https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?auto=format&fit=crop&q=80&w=800",
      name: "CARGO PANTS",
      price: "¥26,400"
    },
    {
      image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&q=80&w=800",
      name: "TECH HOODIE",
      price: "¥32,800"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?auto=format&fit=crop&q=80&w=1200"
          alt="Hero"
          className="w-full h-full object-cover filter grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-[1px] h-16 bg-white/30"></div>
              <h1 className="text-7xl md:text-9xl font-serif tracking-[0.2em] text-white">月</h1>
              <div className="w-[1px] h-16 bg-white/30"></div>
            </div>
            <p className="text-lg tracking-[1em] font-light">TSUKI</p>
          </div>
        </div>
      </div>

      {/* Collection Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex items-center justify-between mb-24">
          <div className="w-16 h-[1px] bg-white/30"></div>
          <h2 className="text-2xl tracking-[0.5em] font-light">COLLECTION</h2>
          <div className="w-16 h-[1px] bg-white/30"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="bg-white/5 backdrop-blur-sm py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-2xl tracking-[0.5em] font-light">MANIFESTO</h2>
          <p className="text-lg font-light leading-relaxed tracking-wider text-gray-300">
            Minimalism meets industrial design. Each piece tells a story of simplicity and purpose, 
            where form follows function in perfect harmony.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <h2 className="text-2xl tracking-[0.5em] font-light">CONNECT</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border-b border-white/30 px-4 py-2 focus:outline-none focus:border-white transition-colors"
              />
              <button className="border-b border-white/30 px-8 py-2 hover:border-white transition-colors tracking-wider">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-sm tracking-wider text-gray-500">
            <p>© TSUKI 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;