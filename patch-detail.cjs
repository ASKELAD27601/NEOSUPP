const fs = require('fs');
let code = fs.readFileSync('src/components/ProductDetailView.tsx', 'utf8');

code = code.replace(
  '<p className="text-sm text-[#c8c8c0] font-bold">',
  `{product.brand && (
              <div className={\`inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2 border \${
                product.brand === 'MYPROTEIN' 
                  ? 'bg-[#007eb3] text-white border-[#00293d] shadow-[2px_2px_0px_#00293d]' 
                  : 'bg-[#ff4757] text-white border-[#550000] shadow-[2px_2px_0px_#550000]'
              }\`}>
                {product.brand}
              </div>
            )}
            <p className="text-sm text-[#c8c8c0] font-bold">`
);

fs.writeFileSync('src/components/ProductDetailView.tsx', code);
