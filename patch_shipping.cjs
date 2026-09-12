const fs = require('fs');

function replaceInFile(file, search, replacement) {
  let code = fs.readFileSync(file, 'utf8');
  code = code.replace(search, replacement);
  fs.writeFileSync(file, code);
}

replaceInFile(
  'src/components/CartDrawer.tsx', 
  /const shippingCost = rawSubtotal > 300/g, 
  'const shippingCost = rawSubtotal >= 250'
);

replaceInFile(
  'src/components/CheckoutModal.tsx', 
  /const shippingCost = rawSubtotal > 300/g, 
  'const shippingCost = rawSubtotal >= 250'
);

replaceInFile(
  'src/components/Navbar.tsx', 
  /ENVÍO GRATIS PEDIDOS >\$60 USD/g, 
  'ENVÍO GRATIS PEDIDOS > 250 Bs.'
);

console.log('Patched shipping thresholds');
