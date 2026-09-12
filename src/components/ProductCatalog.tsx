import React, { useState } from 'react';
import { Product } from '../types';
import { ArrowUpRight, Star, ShoppingBag, Zap, ShieldCheck, Flame, Award, CheckCircle2 } from 'lucide-react';

interface ProductCatalogProps {
  selectedCategory?: string;
  products: Product[];
  onSelectProduct: (id: string) => void;
  onAddToCart: (product: Product, flavor: string, size: string, quantity: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory = 'all',
  products,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'creatinas' && !['creatine', 'creatine-flavored'].includes(p.category)) return false;
      if (selectedCategory === 'proteinas' && !['isolate', 'protein', 'blend'].includes(p.category)) return false;
      if (selectedCategory === 'preentreno' && !['pre-workout', 'accessories'].includes(p.category)) return false;
      if (selectedCategory === 'combos' && p.category !== 'combo') return false;
      if (selectedCategory === 'snacks' && p.category !== 'snacks') return false;
      if (selectedCategory === 'salsas' && p.category !== 'sauces') return false;
      if (selectedCategory === 'bienestar' && p.category !== 'wellness') return false;
      if (selectedCategory === 'quemadores' && p.category !== 'burners') return false;
      if (selectedCategory === 'diureticos' && p.category !== 'diuretics') return false;
    }
    if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
      return false;
    }
    return true;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-4 md:px-8 py-4 sm:py-8 space-y-5 sm:space-y-8 font-mono">
      {/* Brand Filter Tabs */}
      <div className="flex flex-nowrap items-center justify-start gap-2 sm:gap-3 pb-3 sm:pb-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <span className="shrink-0 text-[10px] sm:text-xs text-[#888] font-bold uppercase mr-1 sm:mr-2 tracking-widest flex items-center gap-1 sm:gap-1.5"><Star className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> MARCAS:</span>
          
          <button
            onClick={() => setSelectedBrand('DRAGON PHARMA')}
            className={`shrink-0 font-mono text-[10px] sm:text-sm font-black px-3 py-1.5 sm:px-4 sm:py-2 uppercase transition-all flex items-center gap-1 sm:gap-1.5 border-2 ${
              selectedBrand === 'DRAGON PHARMA' ? 'bg-[#ff4757] text-white border-black shadow-[3px_3px_0px_#ffffff] sm:shadow-[4px_4px_0px_#ffffff]' : 'bg-[#1a1a1a] text-[#aaa] border-[#333] hover:border-[#ff4757] hover:text-[#ff4757] hover:bg-black shadow-[2px_2px_0px_#000]'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${selectedBrand === 'DRAGON PHARMA' ? 'fill-current' : ''}`} /> DRAGON PHARMA
          </button>

          <button
            onClick={() => setSelectedBrand('MYPROTEIN')}
            className={`shrink-0 font-mono text-[10px] sm:text-sm font-black px-3 py-1.5 sm:px-4 sm:py-2 uppercase transition-all flex items-center gap-1 sm:gap-1.5 border-2 ${
              selectedBrand === 'MYPROTEIN' ? 'bg-[#007eb3] text-white border-black shadow-[3px_3px_0px_#ffffff] sm:shadow-[4px_4px_0px_#ffffff]' : 'bg-[#1a1a1a] text-[#aaa] border-[#333] hover:border-[#007eb3] hover:text-[#007eb3] hover:bg-black shadow-[2px_2px_0px_#000]'
            }`}
          >
            <ShieldCheck className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${selectedBrand === 'MYPROTEIN' ? 'fill-current' : ''}`} /> MYPROTEIN
          </button>

          <button
            onClick={() => setSelectedBrand('all')}
            className={`shrink-0 font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-1.5 sm:px-3 sm:py-1.5 uppercase transition-all border-2 ${
              selectedBrand === 'all' ? 'bg-white text-black border-black shadow-[2px_2px_0px_#c3f400] sm:shadow-[3px_3px_0px_#c3f400]' : 'bg-[#1a1a1a] text-[#888] border-[#333] hover:bg-[#333] hover:text-white'
            }`}
          >
            TODAS
          </button>
      </div>

      {/* Neo-Brutalist Hero Header Block */}
      <div className="bg-[#121212] border-2 border-black p-3 sm:p-4 md:p-5 neo-shadow-lime relative overflow-hidden">
        <div className="absolute -right-8 -top-8 bg-[#c3f400] text-black font-bold text-[10px] px-10 py-0.5 rotate-12 border-2 border-black uppercase tracking-widest hidden sm:block">
          CLINICAL GRADE // 2026
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1 sm:gap-1.5 px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-[#c3f400] text-black font-bold text-[9px] sm:text-[10px] uppercase border border-black shadow-[2px_2px_0px_#ffffff]">
              <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-black" />
              <span>OFFICIAL DISPENSARY</span>
            </div>
            
            <h1 className="text-xl sm:text-3xl md:text-4xl font-mono font-bold text-white uppercase tracking-tight leading-none">
              SUPLEMENTACIÓN <span className="bg-[#ff4757] text-white px-1.5 py-0.5 sm:px-2 inline-block border-2 border-black rotate-[-1deg]">NO LIMITS</span>
            </h1>
          </div>
        </div>
      </div>

        {/* Grid of Neo-Brutalist Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product, idx) => {
          const isHardcore = product.isHardcore || product.level === 'AVANZADO';
          const isHovered = hoveredCard === product.id;

          return (
            <div
              key={product.id}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-[#141414] border-3 ${
                isHardcore
                  ? 'border-[#ff4757]'
                  : 'border-[#333333]'
              } hover:border-[#c3f400] transition-all duration-150 flex flex-col justify-between relative group ${
                isHovered
                  ? 'shadow-[6px_6px_0px_#c3f400] -translate-x-1 -translate-y-1'
                  : 'shadow-[4px_4px_0px_#000000]'
              }`}
            >
              {/* Card Top Stamp Bar */}
              {product.brand && (
                <div className={`absolute top-0 left-0 -translate-y-1/2 translate-x-2 z-20 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider border ${
                  product.brand === 'MYPROTEIN' 
                    ? 'bg-[#007eb3] text-white border-[#00293d] shadow-[1px_1px_0px_#00293d]' 
                    : 'bg-[#ff4757] text-white border-[#550000] shadow-[1px_1px_0px_#550000]'
                }`}>
                  {product.brand}
                </div>
              )}
              <div className="bg-[#1e1e1e] p-3 border-b-2 border-inherit flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[10px] text-[#a0a09a] uppercase font-bold">
                  <span className="bg-black text-[#c3f400] px-1 py-0.5 border border-[#333]">
                    #{String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate">{product.series}</span>
                </div>

                {product.badge && (
                  <span
                    className={`font-mono text-[9px] font-bold px-1.5 py-0.5 uppercase border border-black ${
                      isHardcore
                        ? 'bg-[#ff4757] text-white shadow-[1px_1px_0px_#fff]'
                        : 'bg-[#c3f400] text-black shadow-[1px_1px_0px_#fff]'
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Visual Container with Neo-Brutalist Backplate */}
              <div
                onClick={() => onSelectProduct(product.id)}
                className="p-6 bg-[#0c0c0c] relative flex items-center justify-center cursor-pointer overflow-hidden aspect-square border-b-2 border-inherit neo-dots-bg"
              >
                {/* Technical Watermark Stamp */}
                <div className="absolute top-2 left-2 text-[9px] text-[#444] font-mono select-none">
                  SPEC: {product.specs[0]?.value || '100%'}
                </div>

                <div className="absolute bottom-2 right-2 text-[9px] text-[#333] font-mono select-none uppercase">
                  [NEO-NUTRICION]
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-52 w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] transform transition-transform duration-200 group-hover:scale-105"
                />

                {/* Quick Info Overlay on Hover */}
                {isHovered && (
                  <div className="absolute inset-0 bg-[#0d0d0d]/95 p-4 flex flex-col justify-between animate-in fade-in duration-100 z-10 border-2 border-[#c3f400]">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between border-b border-[#333] pb-1">
                        <span className="text-[10px] text-[#c3f400] font-bold uppercase">
                          // INGREDIENTES CLAVE
                        </span>
                        <span className="text-[9px] text-[#888]">DOSIS REAL</span>
                      </div>
                      
                      {product.specs.slice(0, 4).map((spec, sIdx) => (
                        <div key={sIdx} className="flex justify-between items-center text-xs py-0.5 border-b border-[#222]">
                          <span className="text-[#aaa] text-[11px]">{spec.label}</span>
                          <span className="text-white font-bold">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#c3f400] text-black text-center py-1.5 font-bold text-xs uppercase flex items-center justify-center gap-1">
                      <span>VER DETALLE COMPLETO</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#c3f400] text-[#c3f400]" />
                      <span className="text-xs font-bold text-white">
                        {product.rating.toFixed(1)}
                      </span>
                      <span className="text-[10px] text-[#777]">
                        ({product.reviewsCount} REVIEWS)
                      </span>
                    </div>

                    {product.level && (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 border ${
                          product.level === 'AVANZADO'
                            ? 'text-[#ff4757] border-[#ff4757] bg-[#ff4757]/10'
                            : 'text-[#c3f400] border-[#c3f400] bg-[#c3f400]/10'
                        }`}
                      >
                        {product.level}
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product.id)}
                    className="font-mono text-xl font-bold text-white group-hover:text-[#c3f400] transition-colors cursor-pointer uppercase leading-tight tracking-tight"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#999990] line-clamp-2 mt-1 leading-snug">
                    {product.subtitle}
                  </p>

                  {/* Flavor & Size Badges */}
                  <div className="pt-2 space-y-1.5">
                    {product.flavors && product.flavors.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {product.flavors.map((fl) => {
                          const fTheme = product.flavorThemes?.[fl];
                          let textColor = fTheme?.color || '#c3f400';
                          
                          if (!fTheme) {
                            const f = fl.toLowerCase();
                            if (f.includes('chocolate') || f.includes('churro') || f.includes('dulce') || f.includes('brownie') || f.includes('hazelnut') || f.includes('barbecue')) textColor = '#d29668';
                            else if (f.includes('strawberry') || f.includes('pink') || f.includes('cotton candy')) textColor = '#ff7675';
                            else if (f.includes('mango') || f.includes('orange') || f.includes('mangonada') || f.includes('buffalo')) textColor = '#ff9f43';
                            else if (f.includes('lemon') || f.includes('lime') || f.includes('kiwi')) textColor = '#1dd1a1';
                            else if (f.includes('jacked')) textColor = '#ff4757';
                            else if (f.includes('blueberry') || f.includes('grape') || f.includes('blue')) textColor = '#54a0ff';
                            else if (f.includes('vanilla') || f.includes('vainilla') || f.includes('coconut') || f.includes('white') || f.includes('leche') || f.includes('mayonesa')) textColor = '#c8d6e5';
                            else if (f.includes('ketchup')) textColor = '#ff6b6b';
                            else if (f.includes('mostaza') || f.includes('chicken')) textColor = '#feca57';
                          }

                          return (
                            <span
                              key={fl}
                              className="text-[9px] font-mono px-1.5 py-0.5 bg-[#1f1f1f] border border-[#333] font-bold"
                              style={{ color: textColor }}
                            >
                              {fl}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    {product.sizes && product.sizes.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {product.sizes.map((sz) => {
                          const p = product.sizePrices?.[sz];
                          return (
                            <span
                              key={sz}
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectProduct(product.id);
                              }}
                              className="text-[9px] font-mono px-1.5 py-0.5 bg-[#161616] border border-[#333] text-[#dcdcd0] hover:border-white hover:text-white cursor-pointer"
                            >
                              {sz} {p ? `• ${p} Bs.` : ''}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Price & Action Box */}
                <div className="pt-3 border-t-2 border-[#262626] flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] text-[#777] block font-bold uppercase">
                      {product.sizePrices ? 'DESDE' : 'PRECIO FINAL'}
                    </span>
                    <div className="flex items-end gap-1.5">
                      <span className="text-2xl font-bold text-white font-mono leading-none">
                        {product.currency === 'Bs.' ? `${product.price} ${product.currency}` : `${product.currency}${product.price.toFixed(2)}`}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm font-bold text-[#ff4757] font-mono line-through mb-0.5">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() =>
                        onAddToCart(
                          product,
                          product.flavors?.[0] || 'UNFLAVORED',
                          product.sizes?.[0] || 'STANDARD',
                          1
                        )
                      }
                      aria-label="Añadir al carrito"
                      className="p-2.5 bg-[#202020] border-2 border-[#444] hover:bg-[#c3f400] hover:text-black hover:border-black text-white transition-all neo-btn-press shadow-[2px_2px_0px_#000]"
                      title="Añadir rápido"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => onSelectProduct(product.id)}
                      className="px-3.5 py-2.5 bg-[#c3f400] text-black font-mono font-bold text-xs uppercase border-2 border-black hover:bg-white transition-all neo-btn-press shadow-[3px_3px_0px_#ffffff]"
                    >
                      COMPRAR
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Footer Barcode Sticker */}
              <div className="bg-[#0f0f0f] px-3 py-1.5 border-t border-[#222] flex items-center justify-between text-[9px] text-[#666]">
                <span className="font-mono">ART. #{product.id.substring(0, 8).toUpperCase()}</span>
                <div className="w-16 h-3 barcode-lime opacity-70"></div>
                <span className="text-[#c3f400] font-bold">STOCK DISP</span>
              </div>
            </div>
          );
        })}
      </div>


    </div>
  );
};
