const fs = require('fs');
let code = fs.readFileSync('src/components/ProductDetailView.tsx', 'utf8');

code = code.replace(
  `            <p className="text-sm text-[#c8c8c0] font-bold">
              {product.subtitle}
            </p>`,
  ``
);

fs.writeFileSync('src/components/ProductDetailView.tsx', code);
console.log('Removed subtitle');
