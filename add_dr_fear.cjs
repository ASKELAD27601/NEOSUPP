const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const newProduct = `  {
    id: 'dp-dr-fear',
    slug: 'dr-feaar-dragon-pharma',
    name: 'DR FEAAR (EAA + BCAA)',
    subtitle: 'AMINOÁCIDOS ESENCIALES AVANZADOS // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'CORE',
    category: 'wellness',
    price: 360,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 89,
    badge: 'CORE LINE',
    description: 'Dr. FEAAR es una matriz completa de Aminoácidos Esenciales (EAA) y BCAA, formulada científicamente para maximizar la síntesis de proteínas musculares, acelerar la recuperación post-entrenamiento y prevenir el catabolismo muscular durante sesiones intensas.',
    image: '/images/products/dr-feaar.png',
    sizes: ['30 SERV'],
    currentSize: '30 SERV',
    sizePrices: {
      '30 SERV': 360
    },
    sizeSpecs: {
      '30 SERV': { servings: 30, netWt: '300G', servingSize: '1 Scoop', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '30', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'RECOVERY', value: 'MAX', sublabel: 'MUSCLE REPAIR', icon: 'favorite' }
    ],
    benefits: [
      { id: 'b1', title: 'Recuperación Rápida', description: 'Repara el daño muscular inmediatamente después de entrenar.', highlight: true },
      { id: 'b2', title: 'Anticatabólico', description: 'Protege tu masa muscular durante el entrenamiento.' }
    ],
    usage: {
      description: 'Mezclar 1 medida con agua y tomar durante o después del entrenamiento.',
      liquid: 'AGUA',
      timing: 'INTRA / POST ENTRENAMIENTO'
    }
  }
];`;

const productIndex = code.indexOf('export const CLASS_TICKETS: ClassTicket[] = [');

if (productIndex !== -1) {
  const precedingCode = code.substring(0, productIndex);
  const closingIndex = precedingCode.lastIndexOf('];');
  
  if (closingIndex !== -1) {
    const combinedCode = precedingCode.substring(0, closingIndex) + ',\n' + newProduct.slice(0, -2) + '\n];\n\n' + code.substring(productIndex);
    fs.writeFileSync('src/data/products.ts', combinedCode);
    console.log("Successfully added Dr. FEAAR.");
  }
}

