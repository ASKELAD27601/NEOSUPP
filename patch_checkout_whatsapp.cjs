const fs = require('fs');
let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

// 1. Add MessageCircle to imports
code = code.replace(
  `  Upload,
  FileImage
} from 'lucide-react';`,
  `  Upload,
  FileImage,
  MessageCircle
} from 'lucide-react';`
);

// 2. Add handleWhatsApp before handlePrint
const handlePrintTarget = `  const handlePrint = () => {`;
const handleWhatsAppCode = `  const handleWhatsApp = () => {
    // NOTA PARA EL USUARIO: Reemplaza "59170000000" con tu número real de WhatsApp.
    const phone = "59170000000"; 
    
    let message = \`*NUEVO PEDIDO - NEOSUPP* 🚀\\n\`;
    message += \`ID: \${orderId}\\n\\n\`;

    message += \`*👤 DATOS DEL CLIENTE:*\\n\`;
    message += \`Nombre: \${formData.name}\\n\`;
    message += \`Teléfono: \${formData.phone}\\n\`;
    message += \`Email: \${formData.email}\\n\\n\`;

    message += \`*📍 ENVÍO:*\\n\`;
    if (formData.deliveryMethod === 'sucre') {
      message += \`Método: Delivery (Sucre)\\n\`;
      message += \`Dirección: \${formData.address}\\n\\n\`;
    } else {
      message += \`Método: Envío Nacional\\n\`;
      message += \`Ciudad: \${formData.city}\\n\`;
      message += \`Agencia/Dirección: \${formData.address}\\n\\n\`;
    }

    message += \`*🛒 DETALLE DEL PEDIDO:*\\n\`;
    items.forEach(item => {
      message += \`- \${item.quantity}x \${item.product.name} (\${item.size}) - \${item.price * item.quantity} \${item.product.currency}\\n\`;
    });
    if (promoCode) {
      message += \`\\nDescuento: Promo \${promoCode} (-\${discountPercent}%)\\n\`;
    }
    
    message += \`\\n*💳 PAGO:*\\n\`;
    message += \`Método: \${formData.paymentMethod === 'transferencia' ? 'Transferencia Bancaria' : 'Pago QR'}\\n\`;
    message += \`Total Pagado: \${formatPrice(grandTotal)} \${primaryCurrency === 'Bs.' ? 'BOB' : 'USD'}\\n\`;
    
    if (formData.receiptName) {
      message += \`Comprobante: (Te enviaré la imagen del comprobante por aquí)\\n\`;
    } else {
      message += \`Comprobante: (Pendiente de adjuntar)\\n\`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = \`https://wa.me/\${phone}?text=\${encodedMessage}\`;
    window.open(whatsappUrl, '_blank');
  };

`;

code = code.replace(handlePrintTarget, handleWhatsAppCode + handlePrintTarget);

// 3. Add the WhatsApp button next to the others
const buttonsTarget = `            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePrint}
                className="flex-1 py-3 bg-black border-2 border-[#333] text-white text-xs uppercase font-bold hover:border-[#c3f400] hover:text-[#c3f400] transition-colors flex items-center justify-center gap-2 neo-btn-press"
              >
                <Printer className="w-4 h-4" />
                <span>IMPRIMIR / GUARDAR COMPROBANTE</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 bg-[#c3f400] text-black font-mono font-bold text-sm uppercase border-2 border-black neo-shadow-black hover:bg-white transition-all flex items-center justify-center gap-2 neo-btn-press"
              >
                <span>VOLVER A LA TIENDA</span>
                <CheckCircle2 className="w-5 h-5" />
              </button>
            </div>`;

const buttonsReplacement = `            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 bg-[#25D366] text-white font-mono font-bold text-base uppercase border-3 border-black neo-shadow-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 neo-btn-press"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>ENVIAR PEDIDO POR WHATSAPP</span>
              </button>
              
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
            </div>`;

code = code.replace(buttonsTarget, buttonsReplacement);

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('File patched.');
