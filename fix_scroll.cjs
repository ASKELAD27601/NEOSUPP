const fs = require('fs');
let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

code = code.replace(
  '<div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 font-mono">',
  '<div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 py-10 font-mono">'
);

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('Fixed scroll');
