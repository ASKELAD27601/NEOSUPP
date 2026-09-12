const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

// First, remove the bad insert at the end of ATHLETES
const regexToRemove = /\\n  \{\n    id: 'dragon-pharma-dips'[\s\S]*\}\n  \}\n  \}\n\];/;
code = code.replace(regexToRemove, '];');

// Let's verify it worked.
if (code.includes('dragon-pharma-dips')) {
  console.log("Still has the bad insert. Adjusting regex...");
  code = code.substring(0, code.indexOf("\\n  {\n    id: 'dragon-pharma-dips'")) + "];";
}

// Now find where PRODUCTS ends
const productIndex = code.indexOf('export const CLASS_TICKETS: ClassTicket[] = [');
if (productIndex !== -1) {
  // It is right before CLASS_TICKETS
  // Let's find the closing bracket of PRODUCTS array before this index
  const precedingCode = code.substring(0, productIndex);
  const closingIndex = precedingCode.lastIndexOf('];');
  
  if (closingIndex !== -1) {
    const newProduct = `  {
    id: 'dragon-pharma-dips',
    slug: 'dragon-pharma-dips',
    name: 'DRIP SAUCE DIPS',
    subtitle: 'SALSAS ZERO CALORÍAS // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'GOURMET CONDIMENTS',
    category: 'sauces',
    price: 60,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 112,
    badge: 'NUEVO INGRESO',
    description: 'Dips y Salsas de Dragon Pharma. Disfruta del mejor sabor en tus comidas sin remordimientos. Zero calorías, zero azúcar y zero grasas. El complemento perfecto para mantener tu dieta estricta sin sacrificar el sabor.',
    image: '/images/products/dips-ketchup.png',
    flavors: ['MAYONESA', 'BUFFALO WING', 'MOSTAZA', 'KETCHUP', 'BARBECUE'],
    currentFlavor: 'KETCHUP',
    flavorImages: {
      'MAYONESA': '/images/products/dips-mayonesa.png',
      'BUFFALO WING': '/images/products/dips-buffalo.png',
      'MOSTAZA': '/images/products/dips-mostaza.png',
      'KETCHUP': '/images/products/dips-ketchup.png',
      'BARBECUE': '/images/products/dips-bbq.png'
    },
    flavorThemes: {
      'MAYONESA': { color: '#f5e3ba', accentBg: '#4a412b', tag: '🥚 MAYONESA', label: 'MAYONESA', image: '/images/products/dips-mayonesa.png', netWt: '350 ML' },
      'BUFFALO WING': { color: '#ff6600', accentBg: '#4a1d00', tag: '🌶️ BUFFALO WING', label: 'BUFFALO WING', image: '/images/products/dips-buffalo.png', netWt: '350 ML' },
      'MOSTAZA': { color: '#ffcc00', accentBg: '#4a3c00', tag: '🌭 MOSTAZA', label: 'MOSTAZA', image: '/images/products/dips-mostaza.png', netWt: '350 ML' },
      'KETCHUP': { color: '#ff0000', accentBg: '#4a0000', tag: '🍅 KETCHUP', label: 'KETCHUP', image: '/images/products/dips-ketchup.png', netWt: '350 ML' },
      'BARBECUE': { color: '#8b4513', accentBg: '#2a1202', tag: '🍖 BARBECUE', label: 'BARBECUE', image: '/images/products/dips-bbq.png', netWt: '350 ML' }
    },
    sizes: ['350 ML'],
    currentSize: '350 ML',
    sizePrices: {
      '350 ML': 60
    },
    sizeSpecs: {
      '350 ML': { servings: 35, netWt: '350 ML', servingSize: '1 Cucharada (10ml)', jarHeight: 'BOTELLA', badge: '😋 ZERO CALORÍAS' }
    },
    specs: [
      { label: 'SIZE', value: '350', sublabel: 'ML', icon: 'water_drop' },
      { label: 'CALORIES', value: '0', sublabel: 'PER SERVING', icon: 'local_fire_department', isPrimary: true },
      { label: 'SUGAR', value: '0g', sublabel: 'SUGAR FREE', icon: 'block' }
    ],
    benefits: [
      { id: 'b1', title: 'Zero Calorías', description: 'Disfruta sin afectar tus macros diarios.' },
      { id: 'b2', title: 'Sin Azúcar ni Grasas', description: 'Ideal para preparaciones fitness y dietas estrictas.', highlight: true },
      { id: 'b3', title: 'Sabores Gourmet', description: 'Textura y sabor idénticos a las salsas tradicionales.' }
    ],
    usage: {
      description: 'Agitar bien antes de usar. Añadir al gusto sobre tus comidas favoritas (pollo, arroz, papas, ensaladas).',
      liquid: 'USO DIRECTO',
      timing: 'CUALQUIER MOMENTO'
    },
    nutritionFacts: {
      servingSize: '1 Cucharada (10ml)',
      calories: '0',
      items: [
        { name: 'Grasas Totales', amount: '0 g', dailyValue: '0%' },
        { name: 'Carbohidratos', amount: '0 g', dailyValue: '0%' },
        { name: 'Azúcares', amount: '0 g', dailyValue: '0%' },        
        { name: 'Sodio', amount: '20 mg', dailyValue: '1%' }
      ]
    }
  }
];`;

    const newCode = precedingCode.substring(0, closingIndex) + ',\\n' + newProduct + '\\n\\n' + code.substring(productIndex);
    fs.writeFileSync('src/data/products.ts', newCode);
    console.log("Successfully patched PRODUCTS array");
  } else {
    console.log("Could not find closing bracket of PRODUCTS");
  }
} else {
  console.log("Could not find CLASS_TICKETS");
}

