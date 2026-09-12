import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Tag, Ticket } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onProceedToCheckout: (appliedDiscount: {type: 'percent' | 'fixed_per_item', value: number} | null, promoCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [promoCodeInput, setPromoCodeInput] = useState<string>('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [discountInfo, setDiscountInfo] = useState<{type: 'percent' | 'fixed_per_item', value: number} | null>(null);

  if (!isOpen) return null;

  const primaryCurrency = items[0]?.product.currency || 'Bs.';
  const rawSubtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = discountInfo 
    ? (discountInfo.type === 'percent' 
        ? rawSubtotal * (discountInfo.value / 100) 
        : items.reduce((sum, item) => sum + ((['sauces', 'accessories'].includes(item.product.category) ? 0 : discountInfo.value) * item.quantity), 0))
    : 0;
  const shippingCost = rawSubtotal >= 250 || rawSubtotal === 0 ? 0 : primaryCurrency === 'Bs.' ? 20 : 4.99;
  const grandTotal = Math.max(0, rawSubtotal - discountAmount + shippingCost);

  const formatPrice = (amount: number) => {
    if (primaryCurrency === 'Bs.') {
      return `${amount % 1 === 0 ? amount : amount.toFixed(2)} Bs.`;
    }
    return `${primaryCurrency}${amount.toFixed(2)}`;
  };

  const handleApplyPromo = () => {
    setPromoError(null);
    const code = promoCodeInput.trim().toUpperCase();
    if (
      code === 'OBSIDIAN' ||
      code === 'OBSIDIAN20' ||
      code === 'NEO20' ||
      code === 'NEONUTRICION' ||
      code === 'NEONUTRICION20' ||
      code === 'DRAGON20'
    ) {
      setAppliedPromo(code);
      setDiscountInfo({ type: 'percent', value: 20 });
      setPromoCodeInput('');
    } else if (code === 'NEO10' || code === 'NEONUTRICION10' || code === 'DRAGON10' || code === 'ELITE10') {
      setAppliedPromo(code);
      setDiscountInfo({ type: 'percent', value: 10 });
      setPromoCodeInput('');
    } else if (code === 'JESUS10') {
      setAppliedPromo(code);
      setDiscountInfo({ type: 'fixed_per_item', value: 10 });
      setPromoCodeInput('');
    } else {
      setPromoError('Código inválido. Prueba NEONUTRICION20, NEO20 o JESUS10');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setDiscountInfo(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-mono">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md bg-[#111111] border-l-4 border-black text-[#f4f4f0] flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.9)] relative">
          {/* Top Bar */}
          <div className="bg-[#181818] border-b-3 border-black p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#c3f400] border border-black animate-pulse"></span>
              <span className="text-xs uppercase tracking-widest text-white font-bold">
                [ TICKET RECEIPT // CART ]
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 bg-black text-white hover:text-[#c3f400] border border-[#333] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Barcode Accent */}
          <div className="h-5 w-full barcode-lime opacity-50 border-b-2 border-black"></div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-3">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <Ticket className="w-12 h-12 text-[#444] mx-auto" />
                <p className="text-xl font-bold text-white uppercase">
                  TU CARRO ESTÁ VACÍO
                </p>
                <p className="text-xs text-[#888]">
                  Explora el catálogo o los pases de clase para agregar productos.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 bg-[#c3f400] text-black text-xs uppercase font-bold border-2 border-black neo-shadow-white hover:bg-white transition-all neo-btn-press"
                >
                  VER CATÁLOGO
                </button>
              </div>
            ) : (
              items.map((item, index) => (
                <div
                  key={`${item.product.id}-${item.flavor}-${item.size}-${index}`}
                  className="bg-[#181818] border-2 border-black p-3.5 relative group shadow-[3px_3px_0px_#000]"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain bg-black p-1 border-2 border-black"
                    />

                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-bold text-white uppercase leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(index)}
                          className="text-[#888] hover:text-[#ff4757] transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-1.5 text-[10px] text-[#aaa]">
                        {item.flavor !== 'DEFAULT' && (
                          <span className="bg-black px-1.5 py-0.5 border border-[#333] text-[#c3f400]">
                            {item.flavor}
                          </span>
                        )}
                        {item.size !== 'STANDARD' && (
                          <span className="bg-black px-1.5 py-0.5 border border-[#333]">
                            {item.size}
                          </span>
                        )}
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-black bg-black">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-[#888] hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs text-white font-bold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-[#888] hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-base font-bold text-white">
                          {item.product.currency === 'Bs.'
                            ? `${item.price * item.quantity} Bs.`
                            : `${item.product.currency}${(item.price * item.quantity).toFixed(2)}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Bottom Summary & Checkout */}
          {items.length > 0 && (
            <div className="bg-[#141414] border-t-3 border-black p-4 md:p-5 space-y-3">
              {/* Promo Code Input */}
              <div className="space-y-1">
                {appliedPromo ? (
                  <div className="flex items-center justify-between bg-[#c3f400] text-black border-2 border-black px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_#000]">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      <span>CÓDIGO {appliedPromo} (-{discountInfo?.type === 'percent' ? discountInfo.value + '%' : discountInfo?.value + ' Bs./item'})</span>
                    </div>
                    <button
                      onClick={handleRemovePromo}
                      className="text-xs text-[#ff4757] hover:underline uppercase font-bold"
                    >
                      ELIMINAR
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="CÓDIGO (EJ: NEONUTRICION20)"
                      value={promoCodeInput}
                      onChange={(e) => setPromoCodeInput(e.target.value)}
                      className="flex-1 bg-black border-2 border-black px-3 py-2 text-xs text-white uppercase font-bold focus:outline-none focus:border-[#c3f400]"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-[#c3f400] text-black border-2 border-black text-xs font-bold hover:bg-white transition-all neo-btn-press"
                    >
                      APLICAR
                    </button>
                  </div>
                )}
                {promoError && (
                  <p className="text-[10px] text-[#ff4757] font-bold">{promoError}</p>
                )}
              </div>

              {/* Cost Calculations */}
              <div className="space-y-1 text-xs text-[#aaa] border-t border-[#262626] pt-2">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span className="text-white font-bold">{formatPrice(rawSubtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#c3f400] font-bold">
                    <span>DESCUENTO PROMO</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>ENVÍO EXPRESS</span>
                  <span className="text-white font-bold">
                    {shippingCost === 0 ? (
                      <span className="text-[#c3f400]">GRATIS</span>
                    ) : (
                      formatPrice(shippingCost)
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t-2 border-black text-white">
                  <span className="text-xs uppercase font-bold text-[#888]">TOTAL ORDEN</span>
                  <span className="text-2xl font-mono font-bold text-[#c3f400]">
                    {formatPrice(grandTotal)} {primaryCurrency === 'Bs.' ? 'BOB' : 'USD'}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => onProceedToCheckout(discountInfo, appliedPromo || '')}
                className="w-full bg-[#c3f400] text-black font-mono font-bold text-sm uppercase py-3.5 border-3 border-black neo-shadow-white hover:bg-white transition-all neo-btn-press flex items-center justify-center gap-2"
              >
                <span>PROCEDER AL CHECKOUT</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#888] font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c3f400]" />
                <span>PAGO 100% ENCRIPTADO &amp; GARANTIZADO</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
