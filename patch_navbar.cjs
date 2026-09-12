const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
code = code.replace(/ENVÍO GRATIS PEDIDOS &gt;\$60 USD/g, 'ENVÍO GRATIS PEDIDOS &gt; 250 Bs.');
fs.writeFileSync('src/components/Navbar.tsx', code);
console.log('Patched navbar');
