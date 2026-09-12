const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const regex = /name: '([^']+)',[\s\S]*?category: '[^']+',/g;

code = code.replace(regex, (match, name) => {
  if (match.includes("brand:")) return match;

  let brand = 'DRAGON PHARMA';
  if (['IMPACT CREATINE', 'SHAKER MYPROTEIN', 'CLEAR WHEY ISOLATE', 'IMPACT WHEY PROTEIN'].includes(name)) {
     brand = 'MYPROTEIN';
  }
  
  return match + `\n    brand: '${brand}',`;
});

fs.writeFileSync('src/data/products.ts', code);
