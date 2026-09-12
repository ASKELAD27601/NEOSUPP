const fs = require('fs');
let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

// 1. Add mapsLink to state
const stateTarget = `  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryMethod: 'sucre',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'transferencia',
    cardNumber: '',
    cardExp: '',
    cardCvc: '',
    receiptName: ''
  });`;

const stateReplacement = `  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deliveryMethod: 'sucre',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'transferencia',
    cardNumber: '',
    cardExp: '',
    cardCvc: '',
    receiptName: '',
    mapsLink: ''
  });`;

code = code.replace(stateTarget, stateReplacement);


// 2. Update the WhatsApp message
const whatsappTarget = `    if (formData.deliveryMethod === 'sucre') {
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
    }`;

const whatsappReplacement = `    if (formData.deliveryMethod === 'sucre') {
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
    }`;

code = code.replace(whatsappTarget, whatsappReplacement);

// 3. Update the inputs
const inputsTarget = `                  {formData.deliveryMethod === 'sucre' ? (
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
                  ) : (`;

const inputsReplacement = `                  {formData.deliveryMethod === 'sucre' ? (
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
                  ) : (`;

code = code.replace(inputsTarget, inputsReplacement);

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('File patched');
