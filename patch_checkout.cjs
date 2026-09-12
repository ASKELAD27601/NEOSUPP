const fs = require('fs');

let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

code = code.replace(
  'discountPercent: number;',
  "discountInfo: { type: 'percent' | 'fixed_per_item', value: number } | null;"
);

code = code.replace(
  '  discountPercent,',
  '  discountInfo,'
);

code = code.replace(
  'const discountAmount = rawSubtotal * (discountPercent / 100);',
  `const discountAmount = discountInfo 
    ? (discountInfo.type === 'percent' 
        ? rawSubtotal * (discountInfo.value / 100) 
        : items.reduce((sum, item) => sum + (discountInfo.value * item.quantity), 0))
    : 0;`
);

code = code.replace(
  '`\\nDescuento: Promo ${promoCode} (-${discountPercent}%)\\n`',
  '`\\nDescuento: Promo ${promoCode} (-${discountInfo?.type === \\\'percent\\\' ? discountInfo.value + \\\'%\\\' : discountInfo?.value + \\\' Bs./item\\\'})\\n`'
);

code = code.replace(
  '{promoCode && <span className="text-[#c3f400]">PROMO {promoCode} (-{discountPercent}%)</span>}',
  `{promoCode && <span className="text-[#c3f400]">PROMO {promoCode} (-{discountInfo?.type === 'percent' ? \`\${discountInfo.value}%\` : \`\${discountInfo?.value} Bs./item\`})</span>}`
);

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('CheckoutModal patched');
