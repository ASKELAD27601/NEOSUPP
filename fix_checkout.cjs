const fs = require('fs');
let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

code = code.replace(
  "message += `\\nDescuento: Promo ${promoCode} (-${discountInfo?.type === \\'percent\\' ? discountInfo.value + \\'%\\' : discountInfo?.value + \\' Bs./item\\'})\\n`;",
  "message += `\\nDescuento: Promo ${promoCode} (-${discountInfo?.type === 'percent' ? discountInfo.value + '%' : discountInfo?.value + ' Bs./item'})\\n`;"
);

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
