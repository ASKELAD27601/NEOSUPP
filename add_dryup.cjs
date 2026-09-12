const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const newProduct = `  {
    id: 'dp-dryup',
    slug: 'dryup-dragon-pharma',
    name: 'DRYUP (Diurético)',
    subtitle: 'DIURÉTICO DE DEFINICIÓN EXTREMA // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HARDCORE',
    category: 'wellness',
    price: 330,
    currency: 'Bs.',
    rating: 4.8,
    reviewsCount: 42,
    badge: 'HARDCORE',
    description: 'DryUp es un diurético y termogénico de alta potencia diseñado para eliminar el exceso de retención de agua subcutánea, revelando una definición muscular máxima. Perfecto para preparaciones, sesiones de fotos o eventos especiales.',
    image: '/images/products/dryup.png',
    sizes: ['80 CAPS'],
    currentSize: '80 CAPS',
    sizePrices: {
      '80 CAPS': 330
    },
    sizeSpecs: {
      '80 CAPS': { servings: 20, netWt: '80 CAPS', servingSize: '4 Cápsulas', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '20', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'WATER LOSS', value: 'MAX', sublabel: 'DEFINITION', icon: 'local_fire_department' }
    ],
    benefits: [
      { id: 'b1', title: 'Definición Extrema', description: 'Elimina el agua subcutánea para un look más rocoso.', highlight: true },
      { id: 'b2', title: 'Equilibrio de Electrolitos', description: 'Formulado para no agotar tus niveles de potasio y magnesio.' }
    ],
    usage: {
      description: 'Tomar 4 cápsulas en la mañana y 4 cápsulas 6-8 horas después. No exceder 8 cápsulas diarias.',
      liquid: 'AGUA',
      timing: 'MAÑANA / TARDE'
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
    console.log("Successfully added DryUp.");
  }
}

