import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="text-sm tracking-[0.3em] text-white/70 group-hover:text-white transition-colors">{name}</h3>
        <p className="text-sm tracking-wider text-white/50 group-hover:text-white/70 transition-colors">{price}</p>
      </div>
    </div>
  );
}