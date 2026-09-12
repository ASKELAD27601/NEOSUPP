const fs = require('fs');

let cartCode = fs.readFileSync('src/components/CartDrawer.tsx', 'utf8');

cartCode = cartCode.replace(
  'onProceedToCheckout: (appliedDiscount: number, promoCode: string) => void;',
  "onProceedToCheckout: (appliedDiscount: {type: 'percent' | 'fixed_per_item', value: number} | null, promoCode: string) => void;"
);

cartCode = cartCode.replace(
  'const [discountPercent, setDiscountPercent] = useState<number>(0);',
  "const [discountInfo, setDiscountInfo] = useState<{type: 'percent' | 'fixed_per_item', value: number} | null>(null);"
);

const handleApplyPromoOriginal = `  const handleApplyPromo = () => {
    setPromoError(null);
    const code = promoCodeInput.trim().toUpperCase();
    if (
      code === 'OBSIDIAN' ||
      code === 'OBSIDIAN20' ||
      code === 'NEO20' ||
      code === 'NEONUTRICION' ||
      code === 'NEONUTRICION20' ||
      code === 'DRAGON20'
    ) {
      setAppliedPromo(code);
      setDiscountPercent(20);
      setPromoCodeInput('');
    } else if (code === 'NEO10' || code === 'NEONUTRICION10' || code === 'DRAGON10' || code === 'ELITE10') {
      setAppliedPromo(code);
      setDiscountPercent(10);
      setPromoCodeInput('');
    } else {
      setPromoError('Código inválido. Prueba NEONUTRICION20 o NEO20');
    }
  };`;

const handleApplyPromoNew = `  const handleApplyPromo = () => {
    setPromoError(null);
    const code = promoCodeInput.trim().toUpperCase();
    if (
      code === 'OBSIDIAN' ||
      code === 'OBSIDIAN20' ||
      code === 'NEO20' ||
      code === 'NEONUTRICION' ||
      code === 'NEONUTRICION20' ||
      code === 'DRAGON20'
    ) {
      setAppliedPromo(code);
      setDiscountInfo({ type: 'percent', value: 20 });
      setPromoCodeInput('');
    } else if (code === 'NEO10' || code === 'NEONUTRICION10' || code === 'DRAGON10' || code === 'ELITE10') {
      setAppliedPromo(code);
      setDiscountInfo({ type: 'percent', value: 10 });
      setPromoCodeInput('');
    } else if (code === 'JESUS10') {
      setAppliedPromo(code);
      setDiscountInfo({ type: 'fixed_per_item', value: 10 });
      setPromoCodeInput('');
    } else {
      setPromoError('Código inválido. Prueba NEONUTRICION20, NEO20 o JESUS10');
    }
  };`;
cartCode = cartCode.replace(handleApplyPromoOriginal, handleApplyPromoNew);

cartCode = cartCode.replace(
  `  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setDiscountPercent(0);
  };`,
  `  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setDiscountInfo(null);
  };`
);

cartCode = cartCode.replace(
  'const discountAmount = rawSubtotal * (discountPercent / 100);',
  `const discountAmount = discountInfo 
    ? (discountInfo.type === 'percent' 
        ? rawSubtotal * (discountInfo.value / 100) 
        : items.reduce((sum, item) => sum + (discountInfo.value * item.quantity), 0))
    : 0;`
);

cartCode = cartCode.replace(
  '{appliedPromo && <span className="text-[#c3f400]">PROMO {appliedPromo} (-{discountPercent}%)</span>}',
  `{appliedPromo && <span className="text-[#c3f400]">PROMO {appliedPromo} (-{discountInfo?.type === 'percent' ? \`\${discountInfo.value}%\` : \`\${discountInfo?.value} Bs./item\`})</span>}`
);

cartCode = cartCode.replace(
  'onProceedToCheckout(discountPercent, appliedPromo || \'\')',
  "onProceedToCheckout(discountInfo, appliedPromo || '')"
);

fs.writeFileSync('src/components/CartDrawer.tsx', cartCode);
console.log('CartDrawer patched');
