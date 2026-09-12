const fs = require('fs');
let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

const whatsappTarget = `    message += \`\\n*PAGO:*\\n\`;
    message += \`Método: \${formData.paymentMethod === 'transferencia' ? 'Transferencia Bancaria' : 'Pago QR'}\\n\`;
    message += \`Total Pagado: \${formatPrice(grandTotal)} \${primaryCurrency === 'Bs.' ? 'BOB' : 'USD'}\\n\`;
    
    message += \`\\n*ATENCIÓN*\\n\`;
    if (formData.receiptName) {
      message += \`Por favor, asegúrate de adjuntar la captura de tu comprobante en este chat para procesar la orden.\\n\`;
    } else {
      message += \`Aún no has adjuntado el comprobante de pago. Por favor envíalo en este chat.\\n\`;
    }`;

const whatsappReplacement = `    message += \`\\n*PAGO:*\\n\`;
    let methodText = formData.paymentMethod === 'transferencia' ? 'Transferencia Bancaria' : (formData.paymentMethod === 'qr' ? 'Pago QR' : 'Pago contra entrega (Efectivo/QR)');
    message += \`Método: \${methodText}\\n\`;
    message += \`Total \${formData.paymentMethod === 'pago_destino' ? 'a Pagar' : 'Pagado'}: \${formatPrice(grandTotal)} \${primaryCurrency === 'Bs.' ? 'BOB' : 'USD'}\\n\`;
    
    if (formData.paymentMethod !== 'pago_destino') {
      message += \`\\n*ATENCIÓN*\\n\`;
      if (formData.receiptName) {
        message += \`Por favor, asegúrate de adjuntar la captura de tu comprobante en este chat para procesar la orden.\\n\`;
      } else {
        message += \`Aún no has adjuntado el comprobante de pago. Por favor envíalo en este chat.\\n\`;
      }
    } else {
      message += \`\\n*ATENCIÓN*\\n\`;
      message += \`Recuerda tener el dinero exacto o disponibilidad para pago QR al momento de la entrega.\\n\`;
    }`;

code = code.replace(whatsappTarget, whatsappReplacement);

// Buttons for Delivery method
const deliveryButtonsTarget = `                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'nacional' })}
                    className={\`flex-1 p-2 border-2 text-[10px] font-bold uppercase transition-all neo-btn-press \${
                      formData.deliveryMethod === 'nacional'
                        ? 'bg-[#c3f400] text-black border-black shadow-[2px_2px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
                  >
                    ENVÍO NACIONAL
                  </button>`;

const deliveryButtonsReplacement = `                  <button
                    type="button"
                    onClick={() => {
                      if (formData.paymentMethod === 'pago_destino') {
                        setFormData({ ...formData, deliveryMethod: 'nacional', paymentMethod: 'transferencia' });
                      } else {
                        setFormData({ ...formData, deliveryMethod: 'nacional' });
                      }
                    }}
                    className={\`flex-1 p-2 border-2 text-[10px] font-bold uppercase transition-all neo-btn-press \${
                      formData.deliveryMethod === 'nacional'
                        ? 'bg-[#c3f400] text-black border-black shadow-[2px_2px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
                  >
                    ENVÍO NACIONAL
                  </button>`;

code = code.replace(deliveryButtonsTarget, deliveryButtonsReplacement);

// Payment method section
const paymentMethodTarget = `                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'transferencia' })}
                    className={\`p-3 border-2 text-xs font-bold uppercase transition-all flex flex-col items-center gap-1 neo-btn-press \${
                      formData.paymentMethod === 'transferencia' || formData.paymentMethod === 'card'
                        ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
                  >
                    <Building className="w-5 h-5" />
                    <span>TRANSFERENCIA</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'qr' })}
                    className={\`p-3 border-2 text-xs font-bold uppercase transition-all flex flex-col items-center gap-1 neo-btn-press \${
                      formData.paymentMethod === 'qr' || formData.paymentMethod === 'studio'
                        ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
                  >
                    <QrCode className="w-5 h-5" />
                    <span>PAGO QR</span>
                  </button>
                </div>`;

const paymentMethodReplacement = `                <div className={\`grid \${formData.deliveryMethod === 'sucre' ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'} gap-2\`}>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'transferencia' })}
                    className={\`p-3 border-2 text-[10px] sm:text-xs font-bold uppercase transition-all flex flex-col items-center justify-center text-center gap-1 neo-btn-press \${
                      formData.paymentMethod === 'transferencia' || formData.paymentMethod === 'card'
                        ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
                  >
                    <Building className="w-5 h-5" />
                    <span>TRANSFERENCIA</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'qr' })}
                    className={\`p-3 border-2 text-[10px] sm:text-xs font-bold uppercase transition-all flex flex-col items-center justify-center text-center gap-1 neo-btn-press \${
                      formData.paymentMethod === 'qr' || formData.paymentMethod === 'studio'
                        ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
                  >
                    <QrCode className="w-5 h-5" />
                    <span>PAGO QR</span>
                  </button>

                  {formData.deliveryMethod === 'sucre' && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: 'pago_destino' })}
                      className={\`p-3 border-2 text-[10px] sm:text-xs font-bold uppercase transition-all flex flex-col items-center justify-center text-center gap-1 neo-btn-press \${
                        formData.paymentMethod === 'pago_destino'
                          ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                          : 'bg-black text-[#888] border-[#333]'
                      }\`}
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      <span>PAGAR EN DESTINO</span>
                    </button>
                  )}
                </div>`;

code = code.replace(paymentMethodTarget, paymentMethodReplacement);

const receiptUploadTarget = `                {/* Receipt Upload */}
                <div className="pt-2 border-t border-[#333]">
                  <span className="text-xs text-[#00f0ff] uppercase tracking-widest block font-bold mb-2">
                    03. COMPROBANTE DE PAGO
                  </span>
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
                    <div className={\`p-3 border-2 border-dashed flex items-center justify-center gap-2 text-xs font-bold transition-all \${
                      formData.receiptName 
                        ? 'border-[#c3f400] bg-[#c3f400]/10 text-[#c3f400]' 
                        : 'border-[#444] text-[#888] group-hover:border-white group-hover:text-white bg-[#181818]'
                    }\`}>
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
                      * Sube el comprobante de tu transferencia o pago QR
                    </p>
                  )}
                </div>`;

const receiptUploadReplacement = `                {/* Receipt Upload */}
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
                        <div className={\`p-3 border-2 border-dashed flex items-center justify-center gap-2 text-xs font-bold transition-all \${
                          formData.receiptName 
                            ? 'border-[#c3f400] bg-[#c3f400]/10 text-[#c3f400]' 
                            : 'border-[#444] text-[#888] group-hover:border-white group-hover:text-white bg-[#181818]'
                        }\`}>
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
                          * Sube el comprobante de tu transferencia o pago QR
                        </p>
                      )}
                    </>
                  )}
                </div>`;

code = code.replace(receiptUploadTarget, receiptUploadReplacement);

const totalTextTarget = `<span className="text-[#00f0ff] text-[10px] block font-bold">✓ PAGO PROCESADO</span>`;
const totalTextReplacement = `<span className="text-[#00f0ff] text-[10px] block font-bold">✓ {formData.paymentMethod === 'pago_destino' ? 'PAGO CONTRA ENTREGA' : 'PAGO PROCESADO'}</span>`;

code = code.replace(totalTextTarget, totalTextReplacement);

const ticketTotalTarget = `<span className="text-[#888] block font-bold">TOTAL PAGADO</span>`;
const ticketTotalReplacement = `<span className="text-[#888] block font-bold">{formData.paymentMethod === 'pago_destino' ? 'TOTAL A PAGAR' : 'TOTAL PAGADO'}</span>`;

code = code.replace(ticketTotalTarget, ticketTotalReplacement);


fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('File patched');
