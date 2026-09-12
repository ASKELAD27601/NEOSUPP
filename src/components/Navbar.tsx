import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Zap } from 'lucide-react';
import { Product } from '../types';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeTab: 'shop' | 'tickets' | 'athletes' | 'about' | 'rules';
  setActiveTab: (tab: 'shop' | 'tickets' | 'athletes' | 'about' | 'rules') => void;
  selectedProductId: string | null;
  onSelectProduct: (id: string | null) => void;
  products: Product[];
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedProductId,
  onSelectProduct,
  products,
  cartCount,
  onOpenCart,
  onOpenSearch,
  selectedCategory = 'all',
  onSelectCategory = (cat: string) => {},
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0d0d0d] border-b-2 border-[#2a2a2a]">
      {/* Neo-Brutalist Marquee Warning Banner */}
      <div className="bg-[#c3f400] text-black border-b-2 border-black py-1 overflow-hidden font-mono font-bold text-[11px] uppercase tracking-wider select-none">
        <div className="animate-neo-marquee whitespace-nowrap flex items-center gap-8">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-black"></span>
            NEOSUPP <span className="text-[9px]">BY NEO NUTRITION</span>
          </span>
          <span>★ 100% PUREZA CLÍNICA</span>
          <span>✓ ENVÍO GRATIS PEDIDOS &gt; 250 Bs.</span>
          <span>[LAB-TESTED HPLC NO BANNED SUBSTANCES]</span>
          <span>⚡ MICRONIZED CREATINE &amp; WHEY &amp; ISOLATE</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-black"></span>
            NEOSUPP <span className="text-[9px]">BY NEO NUTRITION</span>
          </span>
          <span>★ 100% PUREZA CLÍNICA</span>
          <span>✓ ENVÍO GRATIS PEDIDOS &gt; 250 Bs.</span>
          <span>[LAB-TESTED HPLC NO BANNED SUBSTANCES]</span>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-3.5 flex justify-between items-center">
        {/* Brand Block */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-[#171717] border-2 border-[#333] text-white hover:border-[#c3f400] shadow-[2px_2px_0px_#000]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <button
            onClick={() => {
              setActiveTab('shop');
              onSelectProduct(null);
            }}
            className="text-left group flex items-center gap-3"
          >
            <div>
              <div className="text-xl sm:text-2xl font-mono font-bold text-white tracking-tight leading-none group-hover:text-[#c3f400] transition-colors flex items-center gap-2">
                <div className="flex flex-col"><span>NEOSUPP</span><span className="text-[10px] text-[#c3f400] leading-none mt-0.5">BY NEO NUTRITION</span></div>
                <span className="bg-[#ff4757] text-white text-[9px] font-mono font-bold px-1.5 py-0.5 border border-black hidden sm:inline-block shadow-[1px_1px_0px_#000]">
                  PRO
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#c3f400] tracking-[0.25em] font-bold uppercase mt-0.5">
                 
              </div>
            </div>
          </button>

          {/* Quick Product Switcher Pill (Neo Brutalist Style) */}
          <div className="relative hidden xl:block">
            <button
              onClick={() => setProductDropdownOpen(!productDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#171717] border-2 border-[#333] text-xs font-mono text-[#f4f4f0] hover:border-[#c3f400] hover:bg-black shadow-[2px_2px_0px_#000] hover:shadow-[3px_3px_0px_#c3f400] transition-all"
            >
              <Zap className="w-3.5 h-3.5 text-[#c3f400]" />
              <span className="font-bold">
                {selectedProductId
                  ? products.find((p) => p.id === selectedProductId)?.name || 'PRODUCTOS'
                  : 'CATÁLOGO RÁPIDO'}
              </span>
              <span className="text-[#c3f400] text-[10px]">▼</span>
            </button>

            {productDropdownOpen && (
              <div className="absolute left-0 mt-2 w-72 bg-[#121212] border-2 border-[#c3f400] shadow-[6px_6px_0px_#000] p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="text-[10px] font-mono text-[#c3f400] font-bold uppercase px-2 py-1 border-b border-[#2a2a2a] mb-1 flex justify-between">
                  <span>SELECCIÓN DIRECTA</span>
                  <span>[4 ITEMS]</span>
                </div>
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p.id);
                      setActiveTab('shop');
                      setProductDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs font-mono flex items-center justify-between border mb-1 transition-all ${
                      selectedProductId === p.id
                        ? 'bg-[#c3f400] text-black font-bold border-black shadow-[2px_2px_0px_#ffffff]'
                        : 'text-white border-transparent hover:border-[#c3f400] hover:bg-[#1a1a1a] hover:text-[#c3f400]'
                    }`}
                  >
                    <span className="truncate pr-2">{p.name}</span>
                    <span className="font-bold shrink-0">{p.currency}{p.price}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Tab Navigation (Neo Brutalist Tabs) */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2 font-mono text-xs uppercase font-bold">
          <button
            onClick={() => {
              onSelectCategory('all');
            }}
            className={`px-3 py-1.5 border-2 transition-all neo-btn-press ${
              selectedCategory === 'all' && activeTab === 'shop' && !selectedProductId
                ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                : 'bg-[#181818] text-[#e0e0dc] border-[#333333] hover:border-[#c3f400] hover:text-white shadow-[2px_2px_0px_#000]'
            }`}
          >
            CATÁLOGO
          </button>

          {/* Categories */}
          {[
            { id: 'combos', label: 'PROMOS Y COMBOS' },
            { id: 'creatinas', label: 'CREATINAS' },
            { id: 'proteinas', label: 'PROTEINAS ISOLADAS' },
            { id: 'preentreno', label: 'PREENTRENO Y ACCESORIOS' },
            { id: 'snacks', label: 'SNACKS' },
            { id: 'salsas', label: 'SALSAS GOURMET' },
            { id: 'bienestar', label: 'SALUD Y BIENESTAR' },
            { id: 'quemadores', label: 'QUEMADORES' },
            { id: 'diureticos', label: 'DIURÉTICOS' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
              }}
              className={`px-3 py-1.5 border-2 text-[10px] transition-all neo-btn-press ${
                selectedCategory === cat.id && activeTab === 'shop' && !selectedProductId
                  ? 'bg-white text-black border-black shadow-[3px_3px_0px_#c3f400] font-bold'
                  : 'bg-[#141414] text-[#a0a09a] border-[#2c2c2c] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
              }`}
            >
              {cat.label}
            </button>
          ))}

          <button
            onClick={() => {
              setActiveTab('about');
              onSelectProduct(null);
            }}
            className={`px-3 py-1.5 border-2 transition-all neo-btn-press ${
              activeTab === 'about'
                ? 'bg-white text-black border-black shadow-[3px_3px_0px_#c3f400]'
                : 'bg-[#181818] text-[#e0e0dc] border-[#333333] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
            }`}
          >
            SOMOS
          </button>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="hidden sm:block">
            <PWAInstallButton />
          </div>

          <button
            onClick={onOpenSearch}
            aria-label="Buscar"
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 bg-[#171717] border-2 border-[#333] text-white hover:border-[#c3f400] hover:text-black hover:bg-[#c3f400] shadow-[2px_2px_0px_#000] hover:shadow-[4px_4px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all font-mono font-bold text-xs"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">BUSCAR</span>
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Carrito de compras"
            className="flex items-center gap-2 p-2 sm:px-3 sm:py-2 bg-[#c3f400] text-black border-2 border-black shadow-[2px_2px_0px_#ffffff] hover:shadow-[4px_4px_0px_#ffffff] active:translate-x-0.5 active:translate-y-0.5 transition-all font-mono font-bold text-xs"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">CART</span>
            {cartCount > 0 && (
              <span className="bg-black text-[#c3f400] text-[10px] px-1.5 py-0.5 border border-black min-w-[20px] text-center flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b-4 border-[#c3f400] p-5 space-y-4 font-mono">
          <div className="text-[10px] text-[#c3f400] uppercase font-bold tracking-widest border-b border-[#262626] pb-2">
            // NEO NAVIGATION MENU
          </div>
          
          <div className="w-full flex justify-center pb-2">
            <PWAInstallButton />
          </div>
          
          <button
            onClick={() => {
              onSelectCategory('all');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2 px-3 font-bold transition-all border-2 flex items-center justify-between ${
              selectedCategory === 'all' && activeTab === 'shop' && !selectedProductId
                ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                : 'bg-[#181818] text-white border-[#333] hover:border-white hover:bg-white hover:text-black shadow-[3px_3px_0px_#000]'
            }`}
          >
            <span>CATÁLOGO COMPLETO</span>
            {selectedCategory === 'all' && activeTab === 'shop' && !selectedProductId && <span>✓</span>}
          </button>

          <div className="pl-2 space-y-1.5 border-l-2 border-[#333]">
            {[
              { id: 'combos', label: 'PROMOS Y COMBOS' },
              { id: 'creatinas', label: 'CREATINAS' },
              { id: 'proteinas', label: 'PROTEINAS ISOLADAS' },
              { id: 'preentreno', label: 'PREENTRENO Y ACCESORIOS' },
              { id: 'snacks', label: 'SNACKS' },
              { id: 'salsas', label: 'SALSAS GOURMET' },
              { id: 'bienestar', label: 'SALUD Y BIENESTAR' },
              { id: 'quemadores', label: 'QUEMADORES' },
              { id: 'diureticos', label: 'DIURÉTICOS' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2 px-3 text-xs font-mono border-2 transition-all flex justify-between items-center ${
                  selectedCategory === cat.id && activeTab === 'shop' && !selectedProductId
                    ? 'bg-[#c3f400] text-black border-black font-bold shadow-[2px_2px_0px_#ffffff]'
                    : 'bg-[#111] text-[#a0a09a] border-transparent hover:border-white hover:text-white hover:bg-[#181818]'
                }`}
              >
                <span>{selectedCategory === cat.id && activeTab === 'shop' && !selectedProductId ? '✓' : '→'} {cat.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setActiveTab('about');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left py-2 px-3 font-bold transition-all border-2 flex justify-between items-center ${
              activeTab === 'about'
                ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                : 'bg-[#181818] text-white border-[#333] hover:border-white hover:bg-white hover:text-black shadow-[3px_3px_0px_#000]'
            }`}
          >
            <span>SOMOS <span className="text-[9px] opacity-70">BY NEO NUTRITION</span></span>
            {activeTab === 'about' && <span>✓</span>}
          </button>
        </div>
      )}
    </header>
  );
};
