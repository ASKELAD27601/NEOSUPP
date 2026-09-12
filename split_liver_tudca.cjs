const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const oldProduct = `  {
    id: 'hf-liver-tudca',
    slug: 'liver-tudca-human-first',
    name: 'LIVER TUDCA (Cuidado Hepático)',
    subtitle: 'PROTECCIÓN Y DETOX HEPÁTICO // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 390,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 65,
    badge: 'HUMAN FIRST',
    description: 'Liver TUDCA es el soporte hepático definitivo. Diseñado para desintoxicar y proteger el hígado del estrés extremo, promueve la regeneración celular y optimiza la función del órgano más importante para tu metabolismo.',
    image: '/images/products/liver-tudca.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 390
    },
    sizeSpecs: {
      '60 CAPS': { servings: 30, netWt: '60 CAPS', servingSize: '2 Cápsulas', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '30', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'SUPPORT', value: 'LIVER', sublabel: 'DETOX', icon: 'healing' },
      { label: 'QUALITY', value: 'TUDCA', sublabel: 'PREMIUM', icon: 'science' }
    ],
    benefits: [
      { id: 'b1', title: 'Protección Extrema', description: 'El compuesto más potente para la salud del hígado.', highlight: true },
      { id: 'b2', title: 'Desintoxicación', description: 'Limpia el hígado de toxinas y mejora el perfil de enzimas.' }
    ],
    usage: {
      description: 'Tomar 2 cápsulas al día con comida.',
      liquid: 'AGUA',
      timing: 'CON COMIDA'
    }
  }`;

const newProducts = `  {
    id: 'hf-liver-rx',
    slug: 'liver-rx-human-first',
    name: 'LIVER RX (Cuidado Hepático)',
    subtitle: 'PROTECCIÓN HEPÁTICA DIARIA // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 390,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 52,
    badge: 'HUMAN FIRST',
    description: 'Liver Rx es un soporte hepático avanzado diseñado para proteger, desintoxicar y regenerar el hígado, ideal para atletas que someten su cuerpo a estrés intenso o consumo elevado de suplementos.',
    image: '/images/products/liver-rx.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 390
    },
    sizeSpecs: {
      '60 CAPS': { servings: 30, netWt: '60 CAPS', servingSize: '2 Cápsulas', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '30', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'SUPPORT', value: 'LIVER', sublabel: 'DETOX', icon: 'healing' }
    ],
    benefits: [
      { id: 'b1', title: 'Regeneración', description: 'Promueve la salud y regeneración de las células hepáticas.', highlight: true },
      { id: 'b2', title: 'Desintoxicación', description: 'Ayuda a limpiar el hígado de toxinas acumuladas.' }
    ],
    usage: {
      description: 'Tomar 2 cápsulas al día con comida.',
      liquid: 'AGUA',
      timing: 'CON COMIDA'
    }
  },
  {
    id: 'hf-tudca',
    slug: 'tudca-human-first',
    name: 'TUDCA (Soporte Hepático Avanzado)',
    subtitle: 'MÁXIMA PROTECCIÓN HEPÁTICA // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 450,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 41,
    badge: 'HUMAN FIRST',
    description: 'TUDCA es el estándar de oro en soporte hepático. Es un ácido biliar que ayuda en la desintoxicación profunda del hígado, mejora el flujo biliar y protege las células hepáticas del daño celular extremo.',
    image: '/images/products/tudca.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 450
    },
    sizeSpecs: {
      '60 CAPS': { servings: 60, netWt: '60 CAPS', servingSize: '1 Cápsula', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '60', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'SUPPORT', value: 'TUDCA', sublabel: 'PREMIUM', icon: 'science' }
    ],
    benefits: [
      { id: 'b1', title: 'Protección Extrema', description: 'El compuesto más potente para evitar la toxicidad hepática.', highlight: true },
      { id: 'b2', title: 'Flujo Biliar', description: 'Optimiza el flujo biliar previniendo la colestasis.' }
    ],
    usage: {
      description: 'Tomar 1 cápsula de una a dos veces al día.',
      liquid: 'AGUA',
      timing: 'CON COMIDA'
    }
  }`;

if (code.includes(oldProduct)) {
  code = code.replace(oldProduct, newProducts);
  fs.writeFileSync('src/data/products.ts', code);
  console.log('Successfully split Liver and TUDCA');
} else {
  console.log('Could not find exact string. Attempting regex replacement.');
  // backup regex if spacing is weird
}

