const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

code = code.replace(
  /}export const CLASS_TICKETS/,
  "}\n];\n\nexport const CLASS_TICKETS"
);

fs.writeFileSync('src/data/products.ts', code);
console.log('Fixed syntax 3');
