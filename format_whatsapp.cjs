const fs = require('fs');

let code = fs.readFileSync('src/components/CheckoutModal.tsx', 'utf8');

// Start the message with backticks and remove asterisks
code = code.replace(
  'let message = `*NUEVO PEDIDO - NEOSUPP*\\n`;',
  "let message = '```\\n' + `NUEVO PEDIDO - NEOSUPP\\n`;"
);

// Remove asterisks from headers
code = code.replace(/`\*DATOS DEL CLIENTE:\*\\n`/g, "`DATOS DEL CLIENTE:\\n`");
code = code.replace(/`\*ENVÍO:\*\\n`/g, "`ENVÍO:\\n`");
code = code.replace(/`\*DETALLE DEL PEDIDO:\*\\n`/g, "`DETALLE DEL PEDIDO:\\n`");
code = code.replace(/`\\n\*PAGO:\*\\n`/g, "`\\nPAGO:\\n`");
code = code.replace(/`\\n\*ATENCIÓN\*\\n`/g, "`\\nATENCIÓN\\n`");

// Add closing backticks before encodeURIComponent
code = code.replace(
  'const encodedMessage = encodeURIComponent(message);',
  "message += '```';\n    const encodedMessage = encodeURIComponent(message);"
);

fs.writeFileSync('src/components/CheckoutModal.tsx', code);
console.log('WhatsApp message formatted');
