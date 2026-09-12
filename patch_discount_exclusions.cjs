const fs = require('fs');

// Patch CartDrawer.tsx
let cartCode = fs.readFileSync('src/components/CartDrawer.tsx', 'utf8');
cartCode = cartCode.replace(
  "items.reduce((sum, item) => sum + (discountInfo.value * item.quantity), 0)",
  "items.reduce((sum, item) => sum + ((['sauces', 'accessories'].includes(item.product.category) ? 0 : discountInfo.value) * item.quantity), 0)"
);
fs.writeFileSync('src/components/CartDrawer.tsx', cartCode);

// Patch CheckoutModal.tsx
let checkoutCode = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');
checkoutCode = checkoutCode.replace(
  "items.reduce((sum, item) => sum + (discountInfo.value * item.quantity), 0)",
  "items.reduce((sum, item) => sum + ((['sauces', 'accessories'].includes(item.product.category) ? 0 : discountInfo.value) * item.quantity), 0)"
);
fs.writeFileSync('src/components/CheckoutModal.tsx', checkoutCode);

console.log('Discount logic patched');
