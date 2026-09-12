import React, { useState } from 'react';
import {
  ArrowRight,
  Bolt,
  Dumbbell,
  Clock,
  Droplets,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  Star,
  Plus,
  Minus,
  Check,
  Sparkles,
  ShieldCheck,
  Package,
  Layers,
  Zap,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { Product } from '../types';

interface ProductDetailViewProps {
  product: Product;
  allProducts: Product[];
  onSelectProduct: (id: string | null) => void;
  onAddToCart: (product: Product, flavor: string, size: string, quantity: number) => void;
  onBuyNow: (product: Product, flavor: string, size: string, quantity: number) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  product,
  allProducts,
  onSelectProduct,
  onAddToCart,
  onBuyNow,
}) => {
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    product.flavors?.[0] || product.currentFlavor || 'DEFAULT'
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0] || product.currentSize || 'STANDARD'
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [showNutrition, setShowNutrition] = useState<boolean>(false);
  const [showShipping, setShowShipping] = useState<boolean>(false);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  // Sync state if product changes
  React.useEffect(() => {
    setSelectedFlavor(product.flavors?.[0] || product.currentFlavor || 'DEFAULT');
    setSelectedSize(product.sizes?.[0] || product.currentSize || 'STANDARD');
    setQuantity(1);
    setShowNutrition(false);
  }, [product.id]);

  const handleAddToCart = () => {
    onAddToCart(product, selectedFlavor, selectedSize, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  const handleBuyNow = () => {
    onBuyNow(product, selectedFlavor, selectedSize, quantity);
  };

  const currentFlavorTheme = product.flavorThemes?.[selectedFlavor];
  const currentSizeSpec = product.sizeSpecs?.[selectedSize];
  const activePrice = product.sizePrices?.[selectedSize] ?? product.price;
  const activeOriginalPrice =
    product.sizeOriginalPrices?.[selectedSize] ?? product.originalPrice;
  const activeProductImage =
    product.flavorImages?.[selectedFlavor] ||
    currentFlavorTheme?.image ||
    product.sizeImages?.[selectedSize] ||
    product.image;

  const currentNetWt =
    currentSizeSpec?.netWt ||
    currentFlavorTheme?.netWt ||
    (product.category === 'creatine'
      ? 'NET WT 150g (30 SERVINGS)'
      : 'NET WT 2 LBS (29 SERVINGS)');

  const isHardcore = product.isHardcore || product.level === 'AVANZADO';

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 space-y-10 font-mono">
      {/* High-Stim Warning Banner (Neo-Brutalist Style) */}
      {isHardcore && (
        <div className="bg-[#ff4757] text-black border-3 border-black p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-[4px_4px_0px_#ffffff]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-black text-[#ff4757] border-2 border-black">
              <AlertTriangle className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest block text-black">
                [ PROTOCOLO ALTA INTENSIDAD // HIGH-STIM FORMULA ]
              </span>
              <p className="text-xs font-bold text-black/90">
                {product.warningBanner ||
                  'Fórmula con 400mg de estimulantes activos y 8g de Citrulina. Solo para atletas experimentados.'}
              </p>
            </div>
          </div>
          <span className="text-xs bg-black text-white px-3 py-1.5 border-2 border-black font-bold uppercase whitespace-nowrap shadow-[2px_2px_0px_#000]">
            DOSIS COMPLETA REAL
          </span>
        </div>
      )}

      {/* Navigation Breadcrumb Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#2b2b2b] pb-4">
        <div className="flex items-center gap-2 text-xs text-[#a0a09a] w-full">
          <button 
            onClick={() => onSelectProduct(null)}
            className="flex items-center gap-1 hover:text-white transition-colors bg-[#181818] border border-[#333] px-2 py-0.5 hover:border-[#c3f400] mr-2 text-white font-bold neo-shadow-black"
          >
            ← CATÁLOGO
          </button>
          <span className="text-[#c3f400] font-bold uppercase hidden sm:inline">{product.brand || 'NEOSUPP'}</span>
          <span className="hidden sm:inline">/</span>
          <span className="text-white uppercase hidden sm:inline">{product.category}</span>
          <span className="hidden sm:inline">/</span>
          <span className="text-white font-bold bg-[#1e1e1e] px-2 py-0.5 border border-[#444] truncate">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main Grid: Product Stage (Left) & Controls (Right) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: Visual Presentation Stage */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Main Visual Box */}
          <div
            className="relative bg-[#111111] border-3 p-8 md:p-12 flex flex-col items-center justify-center overflow-hidden neo-shadow-lime-lg"
            style={{
              borderColor: currentFlavorTheme?.color || (isHardcore ? '#ff4757' : '#c3f400'),
            }}
          >
            {/* Hard Corner Brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 bg-[#c3f400] border-b-2 border-r-2 border-black"></div>
            <div className="absolute top-0 right-0 w-5 h-5 bg-[#c3f400] border-b-2 border-l-2 border-black"></div>
            <div className="absolute bottom-0 left-0 w-5 h-5 bg-[#c3f400] border-t-2 border-r-2 border-black"></div>
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#c3f400] border-t-2 border-l-2 border-black"></div>

            {/* Top Badges */}
            <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
              {currentSizeSpec?.badge ? (
                <div className="bg-[#c3f400] text-black font-mono text-xs font-bold px-3 py-1 uppercase border-2 border-black shadow-[3px_3px_0px_#000000]">
                  {currentSizeSpec.badge}
                </div>
              ) : product.badge ? (
                <div className="bg-[#c3f400] text-black font-mono text-xs font-bold px-3 py-1 uppercase border-2 border-black shadow-[3px_3px_0px_#000000]">
                  ★ {product.badge}
                </div>
              ) : null}
              {currentFlavorTheme?.tag && (
                <div
                  className="text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase border border-black shadow-[2px_2px_0px_#000]"
                  style={{
                    backgroundColor: currentFlavorTheme.accentBg || '#1e1e1e',
                  }}
                >
                  {currentFlavorTheme.tag}
                </div>
              )}
            </div>

            {/* Product Centerpiece */}
            <div className={`relative z-10 w-full max-w-[420px] aspect-square flex items-center justify-center my-2 sm:my-4 ${product.category === 'combo' && product.secondaryImage && !product.tertiaryImage ? 'gap-4' : ''}`}>
              <img
                key={activeProductImage}
                src={activeProductImage}
                alt={`${product.name} - ${selectedSize || selectedFlavor}`}
                className={`
                  ${product.category === 'combo' && product.secondaryImage && !product.tertiaryImage ? 'w-1/2' : ''}
                  ${product.category === 'combo' && product.tertiaryImage ? 'w-[55%] z-30' : ''}
                  ${!product.secondaryImage && !product.tertiaryImage ? 'w-full' : ''}
                  h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] transform transition-all duration-300 hover:scale-105
                `}
              />
              {product.category === 'combo' && product.secondaryImage && (
                <img
                  key={product.secondaryImage}
                  src={product.secondaryImage}
                  alt="Extra product"
                  className={`
                    ${product.category === 'combo' && product.tertiaryImage ? 'w-[35%] -ml-12 z-20 scale-95' : 'w-1/2'}
                    h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] transform transition-all duration-300 hover:scale-105
                  `}
                />
              )}
              {product.category === 'combo' && product.tertiaryImage && (
                <img
                  key={product.tertiaryImage}
                  src={product.tertiaryImage}
                  alt="Third product"
                  className="w-[28%] -ml-10 z-10 scale-75 h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] transform transition-all duration-300 hover:scale-105"
                />
              )}
            </div>
          </div>

          {/* Sub-Bento Secondary Cards */}
          <div className="grid grid-cols-1 gap-4">
            {/* Raw Barcode Spec Box */}
            <div className="bg-[#111111] border-2 border-[#333] p-4 flex flex-col justify-between shadow-[3px_3px_0px_#000]">
              <div className="flex justify-between items-center text-[10px] text-[#888]">
                <span>ART NO.</span>
                <span className="text-[#c3f400] font-bold">#NEO-{product.id.slice(0, 4).toUpperCase()}</span>
              </div>

              <div className="py-3">
                <div className="h-9 w-full barcode-lime opacity-80"></div>
                <p className="text-xs text-white text-center mt-1.5 font-bold tracking-wider">
                  {currentNetWt}
                </p>
              </div>

              <div className="flex justify-between text-[10px] border-t border-[#2a2a2a] pt-2">
                <span className="text-[#888]">DISOLUCIÓN:</span>
                <span className="text-[#c3f400] font-bold">INSTANTÁNEA</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Info, Selectors & Actions */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {/* Header Title Box */}
          <div className="bg-[#141414] border-3 border-black p-5 neo-shadow-white space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-[#c3f400] tracking-widest">
                // {product.series}
              </span>
              <span className="bg-black text-[#00f0ff] text-[10px] font-bold px-2 py-0.5 border border-[#333]">
                VERIFIED NEOSUPP
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white uppercase leading-none tracking-tight">
              {product.name}
            </h1>

            {product.brand && (
              <div className={`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2 border ${
                product.brand === 'MYPROTEIN' 
                  ? 'bg-[#007eb3] text-white border-[#00293d] shadow-[2px_2px_0px_#00293d]' 
                  : 'bg-[#ff4757] text-white border-[#550000] shadow-[2px_2px_0px_#550000]'
              }`}>
                {product.brand}
              </div>
            )}


            {/* Rating Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-[#262626]">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c3f400] text-[#c3f400]" />
                ))}
                <span className="text-xs font-bold text-white ml-1.5">
                  {product.rating.toFixed(1)}
                </span>
                <span className="text-xs text-[#888]">
                  ({product.reviewsCount} REVIEWS)
                </span>
              </div>

              <div className="flex items-center gap-1 text-[11px] text-[#c3f400] font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% PUREZA</span>
              </div>
            </div>
          </div>

          {/* Price & Quantity Box */}
          <div className="bg-[#181818] border-3 border-black p-5 neo-shadow-lime flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[10px] text-[#888] font-bold block uppercase">
                PRECIO OFICIAL DE DISPENSARIO
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-mono font-bold text-white">
                  {product.currency === 'Bs.' ? `${activePrice} ${product.currency}` : `${product.currency}${activePrice.toFixed(2)}`}
                </span>
                {activeOriginalPrice && (
                  <span className="text-2xl text-[#888] line-through font-mono font-bold">
                    {product.currency === 'Bs.' ? `${activeOriginalPrice} ${product.currency}` : `${product.currency}${activeOriginalPrice.toFixed(2)}`}
                  </span>
                )}
                <span className="text-xs text-[#c3f400] font-bold">
                  {product.currency === 'Bs.' ? 'BOB' : 'USD'}
                </span>
              </div>
            </div>

            {/* Quantity Controller (Neo Brutalist) */}
            <div className="flex items-center border-2 border-black bg-black shadow-[2px_2px_0px_#ffffff]">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-white hover:bg-[#c3f400] hover:text-black transition-colors font-bold"
                aria-label="Disminuir"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-sm font-bold text-white">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-white hover:bg-[#c3f400] hover:text-black transition-colors font-bold"
                aria-label="Aumentar"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Flavor Selectors (Tactile Neo-Brutalist Grid) */}
          {product.flavors && product.flavors.length > 0 && (
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs uppercase font-bold">
                <span className="text-[#888]">SELECCIONA SABOR:</span>
                <span className="text-[#c3f400]">
                  {currentFlavorTheme?.label || selectedFlavor}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {product.flavors.map((flavor) => {
                  const fTheme = product.flavorThemes?.[flavor];
                  const isSelected = selectedFlavor === flavor;
                  return (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`p-3 font-mono text-xs uppercase border-2 flex items-center justify-between gap-2 text-left transition-all neo-btn-press ${
                        isSelected
                          ? 'bg-[#c3f400] text-black border-black font-bold shadow-[3px_3px_0px_#ffffff]'
                          : 'bg-[#161616] text-[#dcdcd4] border-[#333] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span
                          className="w-3.5 h-3.5 border border-black shrink-0"
                          style={{ backgroundColor: fTheme?.color || '#c3f400' }}
                        ></span>
                        <span className="truncate">{flavor}</span>
                      </div>
                      {isSelected && <Check className="w-4 h-4 shrink-0 text-black stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Size Selectors */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs uppercase font-bold">
                <span className="text-[#888]">PRESENTACIÓN / TAMAÑO:</span>
                <span className="text-white">{selectedSize}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => {
                  const sizePrice = product.sizePrices?.[size];
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3.5 py-2.5 font-mono text-xs uppercase font-bold border-2 transition-all neo-btn-press flex items-center gap-2 ${
                        isSelected
                          ? 'bg-white text-black border-black shadow-[3px_3px_0px_#c3f400]'
                          : 'bg-[#181818] text-[#888] border-[#333] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
                      }`}
                    >
                      <span>{size}</span>
                      {sizePrice !== undefined && (
                        <span
                          className={`text-[10px] px-1.5 py-0.5 border font-bold ${
                            isSelected
                              ? 'bg-black text-[#c3f400] border-black'
                              : 'bg-black/50 text-white border-[#444]'
                          }`}
                        >
                          {product.currency === 'Bs.' ? `${sizePrice} Bs.` : `${product.currency}${sizePrice}`}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-[#c3f400] text-black font-mono font-bold text-base uppercase py-4 px-6 border-3 border-black neo-shadow-white hover:bg-white transition-all neo-btn-press flex items-center justify-center gap-2"
            >
              <span>COMPRAR AHORA</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <button
              onClick={handleAddToCart}
              className="sm:w-auto px-6 py-4 bg-[#1e1e1e] text-white font-mono font-bold text-xs uppercase border-3 border-black neo-shadow-black hover:border-[#c3f400] hover:text-[#c3f400] transition-all neo-btn-press flex items-center justify-center gap-2"
            >
              {addedToast ? (
                <>
                  <Check className="w-4 h-4 text-[#c3f400] stroke-[3]" />
                  <span className="text-[#c3f400]">¡AÑADIDO!</span>
                </>
              ) : (
                <>
                  <Package className="w-4 h-4" />
                  <span>AÑADIR AL CARRO</span>
                </>
              )}
            </button>
          </div>

          

          {/* Expanders: Nutrition & Shipping */}
          <div className="border-2 border-black divide-y-2 divide-black bg-[#121212] shadow-[3px_3px_0px_#000]">
            {product.nutritionFacts && (
              <div>
                <button
                  onClick={() => setShowNutrition(!showNutrition)}
                  className="w-full p-3.5 flex items-center justify-between text-xs font-bold uppercase text-white hover:bg-[#1a1a1a] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#c3f400]" />
                    <span>TABLA NUTRICIONAL &amp; DOSIFICACIÓN</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${showNutrition ? 'rotate-180 text-[#c3f400]' : ''}`}
                  />
                </button>

                {showNutrition && (
                  <div className="p-4 bg-black text-xs space-y-2 border-t-2 border-black">
                    <div className="flex justify-between border-b border-[#262626] pb-1.5">
                      <span className="text-[#888]">PORCIÓN SUGERIDA:</span>
                      <span className="text-white font-bold">{product.nutritionFacts.servingSize}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#262626] pb-1.5">
                      <span className="text-[#888]">CALORÍAS:</span>
                      <span className="text-[#c3f400] font-bold">{product.nutritionFacts.calories}</span>
                    </div>
                    <div className="space-y-1 pt-1">
                      {product.nutritionFacts.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between text-[#ccc]">
                          <span>{item.name}</span>
                          <span className="text-white font-bold">{item.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div>
              <button
                onClick={() => setShowShipping(!showShipping)}
                className="w-full p-3.5 flex items-center justify-between text-xs font-bold uppercase text-white hover:bg-[#1a1a1a] transition-colors"
              >
                <span>ENVÍOS, RASTREO Y GARANTÍAS</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${showShipping ? 'rotate-180 text-[#c3f400]' : ''}`}
                />
              </button>

              {showShipping && (
                <div className="p-4 bg-black text-xs text-[#ccc] space-y-2 border-t-2 border-black">
                  <p>• Despacho inmediato dentro de las primeras 24 horas.</p>
                  <p>• Número de seguimiento por email y WhatsApp.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECS: Physical Ticket Stubs (Neo-Brutalist) */}
      <section className="space-y-4 pt-4 border-t-2 border-[#2b2b2b]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-[#c3f400]"></span>
          <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase">
            ESPECIFICACIONES TÉCNICAS // LAB DOSING
          </h2>
        </div>

        <div className={`grid grid-cols-1 ${product.specs.length === 4 ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-3'} gap-4 md:gap-6`}>
          {product.specs.map((spec, index) => {
            const isPrimary = spec.isPrimary;
            const isServingsSpec =
              spec.label === 'SERVINGS' ||
              spec.label.includes('SERV') ||
              spec.sublabel?.includes('PRESENTACIONES');
            const displayValue =
              isServingsSpec && currentSizeSpec
                ? currentSizeSpec.servings.toString()
                : spec.value;
            const displaySublabel =
              isServingsSpec && currentSizeSpec
                ? currentSizeSpec.netWt
                : spec.sublabel;

            return (
              <div
                key={index}
                className={`p-6 border-3 border-black ticket-edge relative overflow-hidden transition-all neo-btn-press ${
                  isPrimary
                    ? 'bg-[#c3f400] text-black shadow-[5px_5px_0px_#ffffff]'
                    : 'bg-[#141414] text-white shadow-[4px_4px_0px_#000000]'
                }`}
              >
                {/* Barcode Accent */}
                <div className="absolute top-3 right-3 w-12 h-4 barcode-dark opacity-30"></div>

                <div className="mb-3">
                  {spec.icon === 'bolt' ? (
                    <Bolt className={`w-8 h-8 ${isPrimary ? 'text-black' : 'text-[#c3f400]'}`} />
                  ) : spec.icon === 'fitness_center' ? (
                    <Dumbbell className={`w-8 h-8 ${isPrimary ? 'text-black' : 'text-[#c3f400]'}`} />
                  ) : (
                    <Clock className={`w-8 h-8 ${isPrimary ? 'text-black' : 'text-[#c3f400]'}`} />
                  )}
                </div>

                <h3
                  className={`text-4xl md:text-5xl font-mono font-bold uppercase mb-1 leading-none ${
                    isPrimary ? 'text-black' : 'text-white'
                  }`}
                >
                  {displayValue}
                </h3>

                <p
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isPrimary ? 'text-black' : 'text-[#c3f400]'
                  }`}
                >
                  {spec.label}
                </p>

                <span
                  className={`text-[10px] uppercase mt-1 block font-bold ${
                    isPrimary ? 'text-black/70' : 'text-[#888]'
                  }`}
                >
                  {displaySublabel}
                </span>

                {/* Decorative Ticket Punch Notches */}
                <div className="absolute top-1/2 -left-3 w-5 h-5 bg-[#0c0c0c] border border-black rounded-full -translate-y-1/2"></div>
                <div className="absolute top-1/2 -right-3 w-5 h-5 bg-[#0c0c0c] border border-black rounded-full -translate-y-1/2"></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BENEFITS & USAGE IN NEO-BRUTALIST CARDS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t-2 border-[#2b2b2b] pt-8">
        {/* Left: Benefits */}
        <div className="space-y-4">
          <div className="inline-block bg-black border-2 border-[#c3f400] px-3 py-1 text-sm font-bold uppercase text-[#c3f400]">
            BENEFICIOS CLÍNICOS //
          </div>

          <div className="border-3 border-black divide-y-2 divide-black bg-[#121212] neo-shadow-white">
            {product.benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`p-4 transition-colors ${
                  benefit.highlight ? 'bg-[#c3f400]/10 border-l-4 border-l-[#c3f400]' : 'hover:bg-[#1a1a1a]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm uppercase font-bold text-white flex items-center gap-2">
                    <span className="bg-black text-[#c3f400] text-[10px] px-1.5 py-0.5 border border-[#333]">
                      0{index + 1}
                    </span>
                    <span>{benefit.title}</span>
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#c3f400]" />
                </div>
                <p className="text-xs text-[#b8b8b0] pl-7">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: How to use */}
        <div className="space-y-4">
          <div className="inline-block bg-black border-2 border-[#ff4757] px-3 py-1 text-sm font-bold uppercase text-[#ff4757]">
            MODO DE EMPLEO //
          </div>

          <div className="bg-[#141414] p-6 border-3 border-black neo-shadow-lime space-y-5">
            <p className="text-sm text-[#ecece4] leading-relaxed border-l-3 border-[#c3f400] pl-3 font-bold">
              {product.usage.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 border-2 border-black p-3 bg-black">
                <Droplets className="w-5 h-5 text-[#ff4757]" />
                <span className="text-xs text-white uppercase font-bold">
                  {product.usage.liquid}
                </span>
              </div>
              <div className="flex items-center gap-3 border-2 border-black p-3 bg-black">
                <Clock className="w-5 h-5 text-[#c3f400]" />
                <span className="text-xs text-white uppercase font-bold">
                  {product.usage.timing}
                </span>
              </div>
            </div>

            {product.usage.warning && (
              <div className="bg-[#2a0e12] border-2 border-[#ff4757] p-3.5 text-xs text-[#ffcdd2] space-y-1">
                <div className="flex items-center gap-2 font-bold uppercase text-[#ff4757]">
                  <AlertTriangle className="w-4 h-4" />
                  <span>PRECAUCIÓN Y RECOMENDACIÓN</span>
                </div>
                <p>{product.usage.warning}</p>
              </div>
            )}

            {product.usage.performanceNote && (
              <div className="text-[11px] text-[#a0a09a] italic">
                * Pro Tip: {product.usage.performanceNote}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
