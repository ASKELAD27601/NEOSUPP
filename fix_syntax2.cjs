const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

code = code.replace(
  "  }\nexport const CLASS_TICKETS: ClassTicket[] =",
  "  }\n];\n\nexport const CLASS_TICKETS: ClassTicket[] ="
);

fs.writeFileSync('src/data/products.ts', code);
console.log('Fixed syntax 2');
