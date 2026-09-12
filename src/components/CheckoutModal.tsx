import React, { useState } from 'react';
import { CartItem } from '../types';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Printer,
  CreditCard,
  Building,
  Sparkles,
  ArrowRight,
  QrCode,
  Upload,
  FileImage,
  MessageCircle
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountInfo: { type: 'percent' | 'fixed_per_item', value: number } | null;
  promoCode: string;
  onClearCart: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountInfo,
  promoCode,
  onClearCart,
}) => {
  const [step, setStep] = useState<'form' | 'processing' | 'ticket'>('form');
  const [orderId, setOrderId] = useState<string>('');
  const [orderDate, setOrderDate] = useState<string>('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryMethod: 'sucre',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'qr',
    cardNumber: '',
    cardExp: '',
    cardCvc: '',
    receiptName: '',
    mapsLink: ''
  });

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

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    const generatedId = `NEO-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    const dateStr = new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const phone = "59174409120"; 
    
    let message = `*NUEVO PEDIDO - NEOSUPP*\n`;
    message += `*ID:* ${generatedId}\n\n`;

    message += `*DATOS DEL CLIENTE:*\n`;
    message += `Nombre: ${formData.name}\n`;
    message += `Teléfono: ${formData.phone}\n`;
    message += `Email: ${formData.email}\n\n`;

    message += `*ENVÍO:*\n`;
    if (formData.deliveryMethod === 'sucre') {
      message += `Método: Delivery (Sucre)\n`;
      message += `Dirección: ${formData.address}\n`;
      if (formData.mapsLink) {
        message += `Ubicación (Maps): ${formData.mapsLink}\n`;
      }
      message += `\n`;
    } else {
      message += `Método: Envío Nacional\n`;
      message += `Ciudad: ${formData.city}\n`;
      message += `Agencia/Dirección: ${formData.address}\n\n`;
    }

    message += `*DETALLE DEL PEDIDO:*\n`;
    items.forEach(item => {
      message += `- ${item.quantity}x ${item.product.name} (${item.size}) - ${item.price * item.quantity} ${item.product.currency}\n`;
    });
    if (promoCode) {
      message += `\n*Descuento:* Promo ${promoCode} (-${discountInfo?.type === 'percent' ? discountInfo.value + '%' : discountInfo?.value + ' Bs./item'})\n`;
    }
    
    message += `\n*PAGO:*\n`;
    let methodText = formData.paymentMethod === 'qr' ? 'Pago QR' : 'Pago contra entrega (Efectivo/QR)';
    message += `Método: ${methodText}\n`;
    message += `*Total ${formData.paymentMethod === 'pago_destino' ? 'a Pagar' : 'Pagado'}:* ${formatPrice(grandTotal)} ${primaryCurrency === 'Bs.' ? 'BOB' : 'USD'}\n`;
    
    if (formData.paymentMethod !== 'pago_destino') {
      message += `\n*ATENCIÓN:*\n`;
      if (formData.receiptName) {
        message += `Por favor, asegúrate de adjuntar la captura de tu comprobante en este chat para procesar la orden.\n`;
      } else {
        message += `Aún no has adjuntado el comprobante de pago. Por favor envíalo en este chat.\n`;
      }
    } else {
      message += `\n*ATENCIÓN:*\n`;
      message += `Recuerda tener el dinero exacto o disponibilidad para pago QR al momento de la entrega.\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setOrderId(generatedId);
      setOrderDate(dateStr);
      setStep('ticket');
      onClearCart();
    }, 1000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 py-10 font-mono">
      <div className="bg-[#111111] border-4 border-black text-[#f4f4f0] w-full max-w-3xl neo-shadow-lime-lg relative overflow-hidden">
        {/* Top Header */}
        <div className="bg-[#181818] border-b-3 border-black p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#c3f400] border border-black animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-[#c3f400] font-bold">
              {step === 'ticket' ? '[ RECIBO OFICIAL // ORDEN EMITIDA ]' : <>[ NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span> CHECKOUT TERMINAL ]</>}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 bg-black text-white hover:text-[#c3f400] border border-[#333] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: FORM */}
        {step === 'form' && (
          <form onSubmit={handleSubmitOrder} className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b-2 border-[#2a2a2a] pb-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase leading-none">
                  DATOS DE DESPACHO &amp; PAGO
                </h2>
                <p className="text-xs text-[#888] mt-1 font-bold">
                  Ingresa tus datos para generar tu orden oficial de NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span>.
                </p>
              </div>
              <span className="text-2xl font-mono font-bold text-[#c3f400] hidden sm:block">
                ${grandTotal.toFixed(2)} USD
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Shipping Data */}
              <div className="space-y-3">
                <span className="text-xs text-[#c3f400] uppercase tracking-widest block font-bold">
                  01. TIPO Y DATOS DE ENVÍO
                </span>
                
                <div className="flex gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'sucre' })}
                    className={`flex-1 p-2 border-2 text-[10px] font-bold uppercase transition-all neo-btn-press ${
                      formData.deliveryMethod === 'sucre'
                        ? 'bg-[#c3f400] text-black border-black shadow-[2px_2px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }`}
                  >
                    DELIVERY (SUCRE)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (formData.paymentMethod === 'pago_destino') {
                        setFormData({ ...formData, deliveryMethod: 'nacional', paymentMethod: 'qr' });
                      } else {
                        setFormData({ ...formData, deliveryMethod: 'nacional' });
                      }
                    }}
                    className={`flex-1 p-2 border-2 text-[10px] font-bold uppercase transition-all neo-btn-press ${
                      formData.deliveryMethod === 'nacional'
                        ? 'bg-[#c3f400] text-black border-black shadow-[2px_2px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }`}
                  >
                    ENVÍO NACIONAL
                  </button>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div>
                    <label className="text-[#888] block mb-1 font-bold">NOMBRE COMPLETO</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black border-2 border-black p-2.5 text-white font-bold focus:border-[#c3f400] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[#888] block mb-1 font-bold">EMAIL (PARA TICKET QR)</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black border-2 border-black p-2.5 text-white font-bold focus:border-[#c3f400] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[#888] block mb-1 font-bold">TELÉFONO MÓVIL</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black border-2 border-black p-2.5 text-white font-bold focus:border-[#c3f400] focus:outline-none"
                    />
                  </div>
                  
                  {formData.deliveryMethod === 'sucre' ? (
                    <div className="space-y-2.5">
                      <div>
                        <label className="text-[#888] block mb-1 font-bold">DIRECCIÓN DE ENTREGA</label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Calle Junín #123, Zona Central"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-black border-2 border-black p-2.5 text-white font-bold focus:border-[#c3f400] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[#888] block mb-1 font-bold flex items-center justify-between">
                          <span>ENLACE DE UBICACIÓN (MAPS)</span>
                          <span className="text-[10px] text-[#00f0ff]">OPCIONAL</span>
                        </label>
                        <input
                          type="url"
                          placeholder="Pega aquí el link de Google Maps..."
                          value={formData.mapsLink || ''}
                          onChange={(e) => setFormData({ ...formData, mapsLink: e.target.value })}
                          className="w-full bg-black border-2 border-black p-2.5 text-white font-bold focus:border-[#c3f400] focus:outline-none"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <label className="text-[#888] block mb-1 font-bold">DEPARTAMENTO / CIUDAD</label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. La Paz, Cochabamba, Potosí..."
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full bg-black border-2 border-black p-2.5 text-white font-bold focus:border-[#c3f400] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[#888] block mb-1 font-bold">AGENCIA O TERMINAL PARA RECOJO</label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Terminal de buses, Flota Copacabana"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-black border-2 border-black p-2.5 text-white font-bold focus:border-[#c3f400] focus:outline-none"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <span className="text-xs text-[#00f0ff] uppercase tracking-widest block font-bold">
                  02. MÉTODO DE PAGO
                </span>

                <div className={`grid ${formData.deliveryMethod === 'sucre' ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'qr' })}
                    className={`p-3 border-2 text-[10px] sm:text-xs font-bold uppercase transition-all flex flex-col items-center justify-center text-center gap-1 neo-btn-press ${
                      formData.paymentMethod === 'qr' || formData.paymentMethod === 'studio'
                        ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }`}
                  >
                    <QrCode className="w-5 h-5" />
                    <span>PAGO QR</span>
                  </button>

                  {formData.deliveryMethod === 'sucre' && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'pago_destino' })}
                      className={`p-3 border-2 text-[10px] sm:text-xs font-bold uppercase transition-all flex flex-col items-center justify-center text-center gap-1 neo-btn-press ${
                        formData.paymentMethod === 'pago_destino'
                          ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                          : 'bg-black text-[#888] border-[#333]'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>PAGAR EN DESTINO</span>
                    </button>
                  )}
                </div>

                
                {(formData.paymentMethod === 'qr' || formData.paymentMethod === 'studio') && (
                  <div className="p-4 bg-[#181818] border-2 border-[#333] flex flex-col items-center justify-center gap-3 text-xs">
                    <div className="w-48 h-48 bg-white border-2 border-black flex items-center justify-center relative">
                      <img 
                        src="/images/products/pago-qr.jpeg" 
                        alt="Código QR de Pago" 
                        className="w-full h-full object-contain" 
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <p className="text-[#c3f400] font-bold uppercase text-center">Escanea para pagar</p>
                    <p className="text-[#888] text-center max-w-[200px]">* Recuerda enviar el comprobante por WhatsApp una vez realizado el pago.</p>
                  </div>
                )}

                {/* Receipt Upload */}
                <div className="pt-2 border-t border-[#333]">
                  <span className="text-xs text-[#00f0ff] uppercase tracking-widest block font-bold mb-2">
                    03. COMPROBANTE DE PAGO
                  </span>
                  
                  {formData.paymentMethod === 'pago_destino' ? (
                    <div className="p-3 bg-[#181818] border-2 border-[#333] flex items-center justify-center gap-2 text-xs font-bold text-[#888]">
                      <ShieldCheck className="w-5 h-5" />
                      <span>NO REQUERIDO PARA PAGO EN DESTINO</span>
                    </div>
                  ) : (
                    <>
                      <label className="cursor-pointer group">
                        <input 
                          type="file" 
                          accept="image/*,.pdf" 
                          className="hidden" 
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setFormData({ ...formData, receiptName: e.target.files[0].name });
                            }
                          }}
                        />
                        <div className={`p-3 border-2 border-dashed flex items-center justify-center gap-2 text-xs font-bold transition-all ${
                          formData.receiptName 
                            ? 'border-[#c3f400] bg-[#c3f400]/10 text-[#c3f400]' 
                            : 'border-[#444] text-[#888] group-hover:border-white group-hover:text-white bg-[#181818]'
                        }`}>
                          {formData.receiptName ? (
                            <>
                              <CheckCircle2 className="w-5 h-5" />
                              <span className="truncate max-w-[200px]">{formData.receiptName}</span>
                            </>
                          ) : (
                            <>
                              <Upload className="w-5 h-5" />
                              <span>SUBIR FOTO / SCREENSHOT</span>
                            </>
                          )}
                        </div>
                      </label>
                      {!formData.receiptName && (
                        <p className="text-[10px] text-[#666] mt-1 text-center font-bold">
                          * Sube el comprobante de tu pago QR
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Order Items Snapshot */}
            <div className="border-t-2 border-black pt-3">
              <div className="flex justify-between items-center text-xs text-[#888] mb-2 font-bold">
                <span>ARTÍCULOS A DESPACHAR ({items.length})</span>
                {promoCode && <span className="text-[#c3f400]">PROMO {promoCode} (-{discountInfo?.type === 'percent' ? `${discountInfo.value}%` : `${discountInfo?.value} Bs./item`})</span>}
              </div>
              <div className="max-h-24 overflow-y-auto space-y-1 pr-2">
                {items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-[#dcdcd4]">
                    <span>
                      {item.quantity}x {item.product.name} ({item.size})
                    </span>
                    <span className="font-bold">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#888] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#c3f400]" />
                <span>ENCRIPTACIÓN 256-BIT SSL SEGURA</span>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-4 py-3.5 bg-black text-white font-mono font-bold text-sm uppercase border-3 border-[#333] hover:border-[#c3f400] transition-all neo-btn-press flex items-center justify-center"
                >
                  CANCELAR
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#c3f400] text-black font-mono font-bold text-sm uppercase border-3 border-black neo-shadow-white hover:bg-white transition-all neo-btn-press flex items-center justify-center gap-2"
                >
                  <span>CONFIRMAR ({formatPrice(grandTotal)})</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </form>
        )}

        {/* STEP 2: PROCESSING */}
        {step === 'processing' && (
          <div className="p-16 text-center space-y-6">
            <div className="w-16 h-16 border-4 border-black border-t-[#c3f400] rounded-full animate-spin mx-auto"></div>
            <h3 className="text-2xl font-mono font-bold text-white uppercase">
              GENERANDO TICKET DIGITAL...
            </h3>
            <p className="text-xs text-[#888] max-w-sm mx-auto font-bold">
              Verificando inventario en NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span> y asignando identificador único de despacho.
            </p>
          </div>
        )}

        {/* STEP 3: DIGITAL TICKET STUB */}
        {step === 'ticket' && (
          <div className="p-6 md:p-8 space-y-6">
            {/* Printable Ticket */}
            <div className="bg-[#181818] border-3 border-black p-6 md:p-8 relative overflow-hidden ticket-edge shadow-[6px_6px_0px_#c3f400]">
              <div className="h-6 w-full barcode-lime opacity-80 mb-4"></div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-black pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#c3f400]" />
                    <span className="text-[11px] text-[#c3f400] uppercase font-bold tracking-widest">
                      OFICIAL NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span> PASS
                    </span>
                  </div>
                  <h3 className="text-3xl font-mono font-bold text-white uppercase">
                    ORDEN CONFIRMADA
                  </h3>
                </div>

                <div className="text-right text-xs">
                  <span className="text-[#888] block font-bold">TICKET NO.</span>
                  <span className="text-[#c3f400] font-bold text-xl">{orderId}</span>
                </div>
              </div>

              {/* Body */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 text-xs border-b-2 border-black">
                <div className="space-y-1 text-[#dcdcd4]">
                  <span className="text-[#888] block uppercase font-bold">TITULAR DEL PEDIDO:</span>
                  <p className="text-white font-bold text-sm">{formData.name}</p>
                  <p>{formData.email}</p>
                  {formData.deliveryMethod === 'sucre' ? (
                    <p>{formData.address} (Sucre)</p>
                  ) : (
                    <p>{formData.city} - {formData.address}</p>
                  )}
                  <p className="text-[#888]">{orderDate}</p>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6">
                  <div className="text-right space-y-1">
                    <span className="text-[#888] block font-bold">{formData.paymentMethod === 'pago_destino' ? 'TOTAL A PAGAR' : 'TOTAL PAGADO'}</span>
                    <span className="text-3xl font-mono font-bold text-[#c3f400]">
                      {formatPrice(grandTotal)} {primaryCurrency === 'Bs.' ? 'BOB' : 'USD'}
                    </span>
                    <span className="text-[#00f0ff] text-[10px] block font-bold">✓ {formData.paymentMethod === 'pago_destino' ? 'PAGO CONTRA ENTREGA' : 'PAGO PROCESADO'}</span>
                  </div>

                  {/* QR Stamp */}
                  <div className="bg-white p-2 border-2 border-black shadow-[2px_2px_0px_#000]">
                    <QrCode className="w-14 h-14 text-black" />
                  </div>
                </div>
              </div>

              {/* Notches */}
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-[#0c0c0c] rounded-full -translate-y-1/2 border-r-2 border-black"></div>
              <div className="absolute top-1/2 -right-4 w-6 h-6 bg-[#0c0c0c] rounded-full -translate-y-1/2 border-l-2 border-black"></div>

              <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-[#888] font-bold">
                <span>Presenta este código QR en el estudio o ante el repartidor.</span>
                <span className="text-[#c3f400]">AUTHENTICATED // 2026</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              
              {/* WhatsApp Community Notification */}
              <div className="bg-[#25D366] border-3 border-black p-4 shadow-[4px_4px_0px_#ffffff] flex flex-col sm:flex-row items-center justify-between gap-4 animate-[pulse_2s_ease-in-out_infinite] mb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-2 border-2 border-black rounded-full shrink-0">
                    <MessageCircle className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-black font-black uppercase text-sm sm:text-base leading-tight">¡ÚNETE A LA COMUNIDAD NEOATHLETE!</h4>
                    <p className="text-black/80 text-xs font-bold leading-tight mt-0.5">Ingresa a nuestro grupo VIP de WhatsApp.</p>
                  </div>
                </div>
                <a 
                  href="https://chat.whatsapp.com/EHkGM1909ur9QA8JFFsOo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto shrink-0 bg-black text-white px-4 py-2.5 text-xs font-black uppercase border-2 border-black shadow-[2px_2px_0px_#ffffff] hover:bg-white hover:text-black transition-all text-center neo-btn-press"
                >
                  UNIRME AHORA
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handlePrint}
                  className="flex-1 py-3 bg-black border-2 border-[#333] text-white text-xs uppercase font-bold hover:border-[#c3f400] hover:text-[#c3f400] transition-colors flex items-center justify-center gap-2 neo-btn-press"
                >
                  <Printer className="w-4 h-4" />
                  <span>IMPRIMIR / GUARDAR</span>
                </button>

                <button
                  onClick={onClose}
                  className="flex-1 py-3 bg-[#c3f400] text-black font-mono font-bold text-xs uppercase border-2 border-black neo-shadow-black hover:bg-white transition-all flex items-center justify-center gap-2 neo-btn-press"
                >
                  <span>VOLVER A LA TIENDA</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
