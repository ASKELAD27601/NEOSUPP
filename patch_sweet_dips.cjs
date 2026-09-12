const fs = require('fs');

let code = fs.readFileSync('src/data/products.ts', 'utf8');

const newProduct = `  {
    id: 'dragon-pharma-sweet-dips',
    slug: 'dragon-pharma-sweet-dips',
    name: 'SWEET DIPS',
    subtitle: 'SIROPES ZERO CALORÍAS // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'GOURMET CONDIMENTS',
    category: 'sauces',
    price: 100,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 95,
    badge: 'NUEVO INGRESO',
    description: 'Salsas dulces y Siropes de Dragon Pharma. El toque perfecto y dulce para tus panqueques, avena y postres sin remordimientos. Zero calorías, zero azúcar y zero grasas.',
    image: '/images/products/sweet-dips-chocolate.png',
    flavors: ['CHOCOLATE', 'COOKIES & CREAM', 'DULCE DE LECHE', 'HAZELNUT'],
    currentFlavor: 'CHOCOLATE',
    flavorImages: {
      'CHOCOLATE': '/images/products/sweet-dips-chocolate.png',
      'COOKIES & CREAM': '/images/products/sweet-dips-cookies.png',
      'DULCE DE LECHE': '/images/products/sweet-dips-dulce.png',
      'HAZELNUT': '/images/products/sweet-dips-hazelnut.png'
    },
    flavorThemes: {
      'CHOCOLATE': { color: '#3d2314', accentBg: '#21120a', tag: '🍫 CHOCOLATE', label: 'CHOCOLATE', image: '/images/products/sweet-dips-chocolate.png', netWt: '350 ML' },
      'COOKIES & CREAM': { color: '#d9d4c5', accentBg: '#2b2a26', tag: '🍪 COOKIES', label: 'COOKIES & CREAM', image: '/images/products/sweet-dips-cookies.png', netWt: '350 ML' },
      'DULCE DE LECHE': { color: '#c27e38', accentBg: '#4a2f13', tag: '🍮 DULCE', label: 'DULCE DE LECHE', image: '/images/products/sweet-dips-dulce.png', netWt: '350 ML' },
      'HAZELNUT': { color: '#824d26', accentBg: '#361e0d', tag: '🌰 HAZELNUT', label: 'HAZELNUT', image: '/images/products/sweet-dips-hazelnut.png', netWt: '350 ML' }
    },
    sizes: ['350 ML'],
    currentSize: '350 ML',
    sizePrices: {
      '350 ML': 100
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
      { id: 'b1', title: 'Zero Calorías', description: 'Disfruta tus postres sin afectar tus macros diarios.' },
      { id: 'b2', title: 'Sin Azúcar ni Grasas', description: 'Ideal para desayunos fitness y dietas estrictas.', highlight: true },
      { id: 'b3', title: 'Sabores Dulces', description: 'Textura y sabor idénticos a los siropes tradicionales.' }
    ],
    usage: {
      description: 'Agitar bien antes de usar. Añadir al gusto sobre tus postres, panqueques, avena o batidos.',
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
        { name: 'Sodio', amount: '15 mg', dailyValue: '1%' }
      ]
    }
  }
];`;

const productIndex = code.indexOf('export const CLASS_TICKETS: ClassTicket[] = [');
if (productIndex !== -1) {
  const precedingCode = code.substring(0, productIndex);
  const closingIndex = precedingCode.lastIndexOf('];');
  
  if (closingIndex !== -1) {
    const newCode = precedingCode.substring(0, closingIndex) + ',\\n' + newProduct + '\\n\\n' + code.substring(productIndex);
    fs.writeFileSync('src/data/products.ts', newCode);
    console.log("Successfully added SWEET DIPS");
  }
}
