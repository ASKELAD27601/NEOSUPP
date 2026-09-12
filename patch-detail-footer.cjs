const fs = require('fs');
let code = fs.readFileSync('src/components/ProductDetailView.tsx', 'utf8');

const target = `<div className="text-[10px] text-[#888] text-center font-bold uppercase border-t border-[#2b2b2b] pt-3">
            🔒 ENVÍOS SEGUROS // GARANTÍA DE SATISFACCIÓN 30 DÍAS NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span>
          </div>`;

code = code.replace(target, '');

fs.writeFileSync('src/components/ProductDetailView.tsx', code);
