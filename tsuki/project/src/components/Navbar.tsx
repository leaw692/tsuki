import React from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Menu className="h-5 w-5 cursor-pointer text-white/70 hover:text-white transition-colors" />
          <div className="flex items-center space-x-3">
            <span className="text-xl tracking-[0.5em] font-light">TSUKI</span>
          </div>
          <div className="flex items-center space-x-6">
            <Search className="h-4 w-4 cursor-pointer text-white/70 hover:text-white transition-colors" />
            <ShoppingBag className="h-4 w-4 cursor-pointer text-white/70 hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
}