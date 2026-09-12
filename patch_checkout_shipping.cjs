const fs = require('fs');
let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

const regex = /\{\/\* Shipping Data \*\/\}[\s\S]*?\{\/\* Payment Method \*\/\}/;

const replacement = `{/* Shipping Data */}
              <div className="space-y-3">
                <span className="text-xs text-[#c3f400] uppercase tracking-widest block font-bold">
                  01. TIPO Y DATOS DE ENVÍO
                </span>
                
                <div className="flex gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'sucre' })}
                    className={\`flex-1 p-2 border-2 text-[10px] font-bold uppercase transition-all neo-btn-press \${
                      formData.deliveryMethod === 'sucre'
                        ? 'bg-[#c3f400] text-black border-black shadow-[2px_2px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
                  >
                    DELIVERY (SUCRE)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, deliveryMethod: 'nacional' })}
                    className={\`flex-1 p-2 border-2 text-[10px] font-bold uppercase transition-all neo-btn-press \${
                      formData.deliveryMethod === 'nacional'
                        ? 'bg-[#c3f400] text-black border-black shadow-[2px_2px_0px_#ffffff]'
                        : 'bg-black text-[#888] border-[#333]'
                    }\`}
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

              {/* Payment Method */}`;

code = code.replace(regex, replacement);

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('File patched');
