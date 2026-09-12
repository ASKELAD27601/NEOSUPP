const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const wellnessIds = [
  'hf-multi-rx', 
  'hf-joint-rx', 
  'hf-pre-probiotics', 
  'hf-enzymes', 
  'hf-liver-rx', 
  'hf-tudca'
];

wellnessIds.forEach(id => {
  const idIndex = code.indexOf(`id: '${id}'`);
  if (idIndex !== -1) {
    // Replace price: <num> with price: 310
    const priceIndex = code.indexOf('price:', idIndex);
    const endPriceIndex = code.indexOf(',', priceIndex);
    if (priceIndex !== -1 && endPriceIndex !== -1 && priceIndex < idIndex + 1000) {
      code = code.substring(0, priceIndex) + 'price: 310' + code.substring(endPriceIndex);
    }
    
    // Replace sizePrices: { '...': <num> } with 310
    const sizePricesIndex = code.indexOf('sizePrices:', idIndex);
    const endSizePricesIndex = code.indexOf('}', sizePricesIndex);
    if (sizePricesIndex !== -1 && endSizePricesIndex !== -1 && sizePricesIndex < idIndex + 1500) {
      let sizePricesBlock = code.substring(sizePricesIndex, endSizePricesIndex);
      sizePricesBlock = sizePricesBlock.replace(/:\s*\d+/, ': 310');
      code = code.substring(0, sizePricesIndex) + sizePricesBlock + code.substring(endSizePricesIndex);
    }
  }
});

fs.writeFileSync('src/data/products.ts', code);
console.log('Updated all wellness product prices to 310 Bs.');
