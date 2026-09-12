const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');
code = code.replace(/name: 'DRIP SAUCE DIPS',/g, "name: 'SAUCE DIPS',");
fs.writeFileSync('src/data/products.ts', code);
console.log('Removed "DRIP" from product name');
