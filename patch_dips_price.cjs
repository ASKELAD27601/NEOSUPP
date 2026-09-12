const fs = require('fs');

let code = fs.readFileSync('src/data/products.ts', 'utf8');

// The BBQ image was uploaded as dips-barbecue.png, but the code expects dips-bbq.png
code = code.replace(/\/images\/products\/dips-bbq.png/g, '/images/products/dips-barbecue.png');

// 1. Update the price property
const priceTarget = `    category: 'sauces',
    price: 60,
    currency: 'Bs.',`;
const priceReplacement = `    category: 'sauces',
    price: 100,
    currency: 'Bs.',`;
code = code.replace(priceTarget, priceReplacement);

// 2. Update sizePrices map
const sizePricesTarget = `    sizePrices: {
      '350 ML': 60
    },`;
const sizePricesReplacement = `    sizePrices: {
      '350 ML': 100
    },`;
code = code.replace(sizePricesTarget, sizePricesReplacement);

fs.writeFileSync('src/data/products.ts', code);
console.log('Patched Dips price and BBQ image path');
