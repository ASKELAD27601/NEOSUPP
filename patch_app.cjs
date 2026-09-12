const fs = require('fs');

let appCode = fs.readFileSync('src/App.tsx', 'utf8');

appCode = appCode.replace(
  'const [appliedDiscount, setAppliedDiscount] = useState<number>(0);',
  "const [appliedDiscount, setAppliedDiscount] = useState<{type: 'percent' | 'fixed_per_item', value: number} | null>(null);"
);

appCode = appCode.replace(
  'const handleProceedToCheckout = (discount: number, promo: string) => {',
  "const handleProceedToCheckout = (discount: {type: 'percent' | 'fixed_per_item', value: number} | null, promo: string) => {"
);

appCode = appCode.replace(
  'discountPercent={appliedDiscount}',
  'discountInfo={appliedDiscount}'
);

fs.writeFileSync('src/App.tsx', appCode);
console.log('App.tsx patched');
