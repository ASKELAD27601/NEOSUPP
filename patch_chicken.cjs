const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

// 1. Add CHICKEN to flavors array
code = code.replace(
  "flavors: ['MAYONESA', 'BUFFALO WING', 'MOSTAZA', 'KETCHUP', 'BARBECUE'],",
  "flavors: ['MAYONESA', 'BUFFALO WING', 'MOSTAZA', 'KETCHUP', 'BARBECUE', 'CHICKEN'],"
);

// 2. Add CHICKEN to flavorImages
code = code.replace(
  "'BARBECUE': '/images/products/dips-barbecue.png'",
  "'BARBECUE': '/images/products/dips-barbecue.png',\n      'CHICKEN': '/images/products/dips-chicken.png'"
);

// 3. Add CHICKEN to flavorThemes
code = code.replace(
  "'BARBECUE': { color: '#8b4513', accentBg: '#2a1202', tag: '🍖 BARBECUE', label: 'BARBECUE', image: '/images/products/dips-barbecue.png', netWt: '350 ML' }",
  "'BARBECUE': { color: '#8b4513', accentBg: '#2a1202', tag: '🍖 BARBECUE', label: 'BARBECUE', image: '/images/products/dips-barbecue.png', netWt: '350 ML' },\n      'CHICKEN': { color: '#e5c158', accentBg: '#4a3b12', tag: '🍗 CHICKEN', label: 'CHICKEN', image: '/images/products/dips-chicken.png', netWt: '350 ML' }"
);

fs.writeFileSync('src/data/products.ts', code);
console.log('Added CHICKEN to dips');
