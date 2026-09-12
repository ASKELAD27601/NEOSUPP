import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { PRODUCTS, CLASS_TICKETS } from './data/products';
import { Product, CartItem, ClassTicket } from './types';
import { Navbar } from './components/Navbar';
import { ProductDetailView } from './components/ProductDetailView';
import { ProductCatalog } from './components/ProductCatalog';
import { ClassTicketsSection } from './components/ClassTicketsSection';
import { AthletesSection } from './components/AthletesSection';
import { AboutSection } from './components/AboutSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';

export default function App() {
  // Navigation & Product Selection
  const [activeTab, setActiveTab] = useState<'shop' | 'tickets' | 'athletes' | 'about' | 'rules'>('shop');
  // Default to the first product (Creatine Monohydrate) to immediately show the Obsidian product detail screen, with easy toggle to full catalog
  const [selectedProductId, setSelectedProductId] = useState<string | null>('combo-essentials');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Cart & Modals State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      flavor: 'UNFLAVORED',
      size: '300g (60 SERV)',
      quantity: 1,
      price: PRODUCTS[0].price,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [appliedDiscount, setAppliedDiscount] = useState<{type: 'percent' | 'fixed_per_item', value: number} | null>(null);
  const [activePromoCode, setActivePromoCode] = useState<string>('');

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Cart operations
  const handleAddToCart = (product: Product, flavor: string, size: string, quantity: number) => {
    const itemPrice = product.sizePrices?.[size] ?? product.price;
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.flavor === flavor && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            product,
            flavor,
            size,
            quantity,
            price: itemPrice,
          },
        ];
      }
    });
    showToast(`✓ ${product.name} [${size}] añadido al carro (${itemPrice} ${product.currency}).`);
  };

  const handleBuyNow = (product: Product, flavor: string, size: string, quantity: number) => {
    handleAddToCart(product, flavor, size, quantity);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(index);
    } else {
      setCartItems((prev) => {
        const updated = [...prev];
        updated[index].quantity = quantity;
        return updated;
      });
    }
  };

  const handleRemoveItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
    showToast('Artículo eliminado del carro.');
  };

  const handleAddTicketToCart = (ticket: ClassTicket) => {
    // Wrap ticket into a cart compatible product format
    const ticketProduct: Product = {
      id: ticket.id,
      slug: ticket.id,
      name: `PASS: ${ticket.title}`,
      subtitle: `${ticket.classesCount} Sesiones SDC Dance & Strength`,
      series: 'SEASON TICKET',
      category: 'creatine',
      price: ticket.price,
      currency: ticket.currency,
      rating: 5.0,
      reviewsCount: 95,
      description: ticket.features.join('. '),
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDrLRsr4QutGFqegs07MEIpSh4Bb7pzNKmjPXxX0mRCwphTJ6_prMLX-Qjr-nq7Huwe1tm6IibEofGwwu2uQwl3GZg9qAHn7XYQoxDjnxCb_aq-k47SfB3s4Ck81SYka6459XPUP9KaMOv_Kw5bSci6jI-f96tqbp_0NZw96KQMoRdudzexLRIF9Rg4TX13WcM9Zoq8Zy-VmVbwLXH1FaCuHc2S5AqXXpydIQ759yqR4avzQU6s8e0',
      specs: [{ label: 'CLASES', value: `${ticket.classesCount}`, sublabel: 'SDC STUDIO' }],
      benefits: [],
      usage: { description: 'Presentar ticket digital en recepción.', liquid: 'N/A', timing: 'ACCESO ILIMITADO' },
    };

    handleAddToCart(ticketProduct, 'DIGITAL PASS', `${ticket.classesCount} CLASES`, 1);
    showToast(`✓ Ticket ${ticket.title} añadido al carro.`);
  };

  const handleInstantBuyTicket = (ticket: ClassTicket) => {
    handleAddTicketToCart(ticket);
    setIsCartOpen(true);
  };

  const handleProceedToCheckout = (discount: {type: 'percent' | 'fixed_per_item', value: number} | null, promo: string) => {
    setAppliedDiscount(discount);
    setActivePromoCode(promo);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSelectProductByName = (productName: string) => {
    const found = PRODUCTS.find((p) => p.name.toLowerCase().includes(productName.toLowerCase()));
    if (found) {
      setSelectedProductId(found.id);
      setActiveTab('shop');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedProductId);
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col justify-between selection:bg-[#c3f400] selection:text-[#161e00]">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#c3f400] text-[#161e00] font-mono-code text-xs font-bold px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] animate-fade-in flex items-center gap-2">
          <span className="w-2 h-2 bg-black rounded-full animate-ping"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Obsidian Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedProductId={selectedProductId}
        onSelectProduct={(id) => {
          setSelectedProductId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setSelectedProductId(null);
          setActiveTab('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        products={PRODUCTS}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Viewport Routing */}
      <main className="flex-1">
        {/* SHOP TAB: Either Full Detail View (like in user screenshots) or Complete Grid */}
        {activeTab === 'shop' && (
          <>
            {selectedProduct ? (
              <div>
                <ProductDetailView
                  product={selectedProduct}
                  allProducts={PRODUCTS}
                  onSelectProduct={(id) => {
                    setSelectedProductId(id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  onAddToCart={handleAddToCart}
                  onBuyNow={handleBuyNow}
                />

                {/* Bottom Related Catalog Preview */}
                <div className="border-t-2 border-[#353534] bg-[#0e0e0e] py-12 mt-16">
                  <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-end mb-8">
                      <div>
                        <span className="font-mono-code text-xs text-[#c3f400] uppercase tracking-widest block font-bold">
                          COMPLETA TU STACK DE RENDIMIENTO
                        </span>
                        <h3 className="font-display text-3xl md:text-4xl text-white uppercase">
                          OTROS SUPLEMENTOS NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span>
                        </h3>
                      </div>

                      <button
                        onClick={() => {
                          setSelectedProductId(null);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="font-mono-code text-xs text-[#c3f400] underline hover:text-white uppercase hidden sm:block"
                      >
                        VER CATÁLOGO COMPLETO →
                      </button>
                    </div>

                    <ProductCatalog
                      products={PRODUCTS.filter((p) => p.id !== selectedProduct.id)}
                      onSelectProduct={(id) => {
                        setSelectedProductId(id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      onAddToCart={handleAddToCart}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <ProductCatalog
                      products={PRODUCTS}
                      selectedCategory={selectedCategory}
                      onSelectProduct={(id) => {
                  setSelectedProductId(id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onAddToCart={handleAddToCart}
              />
            )}
          </>
        )}

        {/* CLASS TICKETS & GENERAL RULES TAB (SDC SCREEN) */}
        {(activeTab === 'tickets' || activeTab === 'rules') && (
          <ClassTicketsSection
            onAddTicketToCart={handleAddTicketToCart}
            onInstantBuyTicket={handleInstantBuyTicket}
          />
        )}

        {/* ATHLETES ROSTER TAB */}
        {activeTab === 'athletes' && (
          <AthletesSection
            products={PRODUCTS}
            onSelectProductByName={handleSelectProductByName}
          />
        )}

        {/* ABOUT & MANIFESTO TAB */}
        {activeTab === 'about' && (
          <AboutSection
            onGoToShop={() => {
              setActiveTab('shop');
              setSelectedProductId(null);
            }}
          />
        )}
      </main>

      {/* Cart Slide-over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Checkout & Digital Order Ticket Generator */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountInfo={appliedDiscount}
        promoCode={activePromoCode}
        onClearCart={() => setCartItems([])}
      />

      {/* Instant Search Popup */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        tickets={CLASS_TICKETS}
        onSelectProduct={(id) => {
          setSelectedProductId(id);
          setActiveTab('shop');
        }}
        onSelectTicket={() => {
          setActiveTab('tickets');
        }}
      />

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveTab('shop');
          setSelectedProductId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenTickets={() => {
          setActiveTab('tickets');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAthletes={() => {
          setActiveTab('athletes');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAbout={() => {
          setActiveTab('about');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Consultoria Profesional Floating CTA */}
      <a
        href="https://wa.me/59174409120?text=Hola%2C%20quisiera%20agendar%20una%20consulta%20con%20un%20profesional%20de%20NeoNutrition."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center gap-1.5 bg-white text-black px-3 py-2 border-2 border-black shadow-[3px_3px_0px_#c3f400] hover:bg-[#c3f400] active:scale-90 active:shadow-[0px_0px_0px_#c3f400] transition-all duration-300 font-mono font-bold text-[10px] sm:text-[11px] origin-center animate-custom-pulse"
      >
        <span className="text-sm sm:text-base">🦦</span>
        <span className="hidden sm:inline">CONSULTA PROFESIONAL</span>
        <span className="sm:hidden">CONSULTA</span>
      </a>
    </div>
  );
}
