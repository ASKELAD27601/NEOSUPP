const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');
code = code.replace(/\\n/g, '\n');
fs.writeFileSync('src/data/products.ts', code);
console.log('Fixed newlines');
