const fs = require('fs');
let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

const targetLogic = `  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    const generatedId = \`NEO-ORD-\${Math.floor(100000 + Math.random() * 900000)}\`;
    const dateStr = new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    setTimeout(() => {
      setOrderId(generatedId);
      setOrderDate(dateStr);
      setStep('ticket');
      onClearCart();
    }, 1000);
  };

  const handleWhatsApp = () => {
    // NOTA PARA EL USUARIO: Número de WhatsApp enlazado.
    const phone = "59174409120"; 
    
    let message = \`*NUEVO PEDIDO - NEOSUPP* 🚀\\n\`;
    message += \`ID: \${orderId}\\n\\n\`;

    message += \`*👤 DATOS DEL CLIENTE:*\\n\`;
    message += \`Nombre: \${formData.name}\\n\`;
    message += \`Teléfono: \${formData.phone}\\n\`;
    message += \`Email: \${formData.email}\\n\\n\`;

    message += \`*📍 ENVÍO:*\\n\`;
    if (formData.deliveryMethod === 'sucre') {
      message += \`Método: Delivery (Sucre)\\n\`;
      message += \`Dirección: \${formData.address}\\n\`;
      if (formData.mapsLink) {
        message += \`Ubicación (Maps): \${formData.mapsLink}\\n\`;
      }
      message += \`\\n\`;
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
      message += \`\\n🚨 *ATENCIÓN* 🚨\\n\`;
      message += \`Por favor, asegúrate de adjuntar la captura de tu comprobante en este chat para que procesemos tu orden. ✅\\n\`;
    } else {
      message += \`\\n🚨 *ATENCIÓN* 🚨\\n\`;
      message += \`Aún no has adjuntado el comprobante de pago. Por favor envíalo en este chat. ⚠️\\n\`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = \`https://wa.me/\${phone}?text=\${encodedMessage}\`;
    window.open(whatsappUrl, '_blank');
  };`;

const targetLogicEscaped = targetLogic.replace(/[.*+?^$\{\}()|[\\]\\\\]/g, '\\\\$&');

const logicReplacement = `  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    const generatedId = \`NEO-ORD-\${Math.floor(100000 + Math.random() * 900000)}\`;
    const dateStr = new Date().toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const phone = "59174409120"; 
    
    let message = \`*NUEVO PEDIDO - NEOSUPP*\\n\`;
    message += \`ID: \${generatedId}\\n\\n\`;

    message += \`*DATOS DEL CLIENTE:*\\n\`;
    message += \`Nombre: \${formData.name}\\n\`;
    message += \`Teléfono: \${formData.phone}\\n\`;
    message += \`Email: \${formData.email}\\n\\n\`;

    message += \`*ENVÍO:*\\n\`;
    if (formData.deliveryMethod === 'sucre') {
      message += \`Método: Delivery (Sucre)\\n\`;
      message += \`Dirección: \${formData.address}\\n\`;
      if (formData.mapsLink) {
        message += \`Ubicación (Maps): \${formData.mapsLink}\\n\`;
      }
      message += \`\\n\`;
    } else {
      message += \`Método: Envío Nacional\\n\`;
      message += \`Ciudad: \${formData.city}\\n\`;
      message += \`Agencia/Dirección: \${formData.address}\\n\\n\`;
    }

    message += \`*DETALLE DEL PEDIDO:*\\n\`;
    items.forEach(item => {
      message += \`- \${item.quantity}x \${item.product.name} (\${item.size}) - \${item.price * item.quantity} \${item.product.currency}\\n\`;
    });
    if (promoCode) {
      message += \`\\nDescuento: Promo \${promoCode} (-\${discountPercent}%)\\n\`;
    }
    
    message += \`\\n*PAGO:*\\n\`;
    message += \`Método: \${formData.paymentMethod === 'transferencia' ? 'Transferencia Bancaria' : 'Pago QR'}\\n\`;
    message += \`Total Pagado: \${formatPrice(grandTotal)} \${primaryCurrency === 'Bs.' ? 'BOB' : 'USD'}\\n\`;
    
    message += \`\\n*ATENCIÓN*\\n\`;
    if (formData.receiptName) {
      message += \`Por favor, asegúrate de adjuntar la captura de tu comprobante en este chat para procesar la orden.\\n\`;
    } else {
      message += \`Aún no has adjuntado el comprobante de pago. Por favor envíalo en este chat.\\n\`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = \`https://wa.me/\${phone}?text=\${encodedMessage}\`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setOrderId(generatedId);
      setOrderDate(dateStr);
      setStep('ticket');
      onClearCart();
    }, 1000);
  };`;

if (code.includes(targetLogic)) {
  code = code.replace(targetLogic, logicReplacement);
} else {
  console.log("Could not find logic replacement block");
}

const uiTarget = `            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-full py-4 bg-[#25D366] text-white font-mono font-bold text-base uppercase border-3 border-black neo-shadow-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 neo-btn-press"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>ENVIAR PEDIDO POR WHATSAPP</span>
              </button>
              
              <div className="flex flex-col sm:flex-row gap-3">`;

const uiReplacement = `            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              
              <div className="flex flex-col sm:flex-row gap-3">`;

if (code.includes(uiTarget)) {
  code = code.replace(uiTarget, uiReplacement);
} else {
  console.log("Could not find ui replacement block");
}

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('File patched');
