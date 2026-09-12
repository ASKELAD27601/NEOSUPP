const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const newProducts = `
  {
    id: 'hf-multi-rx',
    slug: 'multi-rx-human-first',
    name: 'MULTI RX (Multivitaminas)',
    subtitle: 'COMPLEJO MULTIVITAMÍNICO // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 320,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 45,
    badge: 'HUMAN FIRST',
    description: 'Multi Rx de la línea Human First de Dragon Pharma es un complejo multivitamínico de espectro completo. Formulado para proporcionar todas las vitaminas y minerales esenciales para optimizar la salud general, el sistema inmunológico y el rendimiento diario.',
    image: '/images/products/multi-rx.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 320
    },
    sizeSpecs: {
      '60 CAPS': { servings: 30, netWt: '60 CAPS', servingSize: '2 Cápsulas', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '30', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'SUPPORT', value: 'IMMUNITY', sublabel: 'VITAMINS', icon: 'health_and_safety' },
      { label: 'HEALTH', value: '100%', sublabel: 'OPTIMIZED', icon: 'favorite' }
    ],
    benefits: [
      { id: 'b1', title: 'Salud Óptima', description: 'Cubre todas tus deficiencias nutricionales diarias.', highlight: true },
      { id: 'b2', title: 'Apoyo Inmunológico', description: 'Fortalece las defensas naturales de tu cuerpo.' }
    ],
    usage: {
      description: 'Tomar 2 cápsulas al día con abundante agua, de preferencia con una comida principal.',
      liquid: 'AGUA',
      timing: 'CON COMIDA'
    }
  },
  {
    id: 'hf-joint-rx',
    slug: 'joint-rx-human-first',
    name: 'JOINT RX (Cuidado Articular)',
    subtitle: 'PROTECCIÓN PARA ARTICULACIONES // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 350,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'HUMAN FIRST',
    description: 'Joint Rx está diseñado para apoyar la salud de las articulaciones, tendones y ligamentos. Reduce la inflamación, mejora la movilidad y acelera la recuperación de las articulaciones sometidas a estrés por el entrenamiento intenso.',
    image: '/images/products/joint-rx.png',
    sizes: ['120 CAPS'],
    currentSize: '120 CAPS',
    sizePrices: {
      '120 CAPS': 350
    },
    sizeSpecs: {
      '120 CAPS': { servings: 30, netWt: '120 CAPS', servingSize: '4 Cápsulas', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '30', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'SUPPORT', value: 'JOINTS', sublabel: 'MOBILITY', icon: 'directions_run' }
    ],
    benefits: [
      { id: 'b1', title: 'Recuperación Articular', description: 'Alivia el dolor y la inflamación de las articulaciones.', highlight: true },
      { id: 'b2', title: 'Mejora la Movilidad', description: 'Ayuda a mantener la flexibilidad y salud a largo plazo.' }
    ],
    usage: {
      description: 'Tomar 4 cápsulas al día con abundante agua y alimentos.',
      liquid: 'AGUA',
      timing: 'CON COMIDA'
    }
  },
  {
    id: 'hf-pre-probiotics',
    slug: 'pre-probiotics-human-first',
    name: 'PRE & PROBIOTICS (Flora Intestinal)',
    subtitle: 'SALUD DIGESTIVA // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 290,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 22,
    badge: 'HUMAN FIRST',
    description: 'Pre & Probiotics de Dragon Pharma combina bacterias beneficiosas con prebióticos para optimizar tu salud intestinal. Mejora la digestión, reduce la hinchazón y fortalece el sistema inmunológico desde el intestino.',
    image: '/images/products/probiotics.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 290
    },
    sizeSpecs: {
      '60 CAPS': { servings: 30, netWt: '60 CAPS', servingSize: '2 Cápsulas', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '30', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'SUPPORT', value: 'GUT', sublabel: 'HEALTH', icon: 'health_and_safety' }
    ],
    benefits: [
      { id: 'b1', title: 'Digestión Óptima', description: 'Mejora la absorción de nutrientes de tus comidas y batidos.', highlight: true },
      { id: 'b2', title: 'Salud Inmunológica', description: 'Una gran parte de tu sistema inmune reside en el intestino.' }
    ],
    usage: {
      description: 'Tomar 2 cápsulas al día, preferiblemente en ayunas o antes de dormir.',
      liquid: 'AGUA',
      timing: 'AYUNAS'
    }
  },
  {
    id: 'hf-enzymes',
    slug: 'digestive-enzymes-human-first',
    name: 'DIGESTIVE ENZYMES (Enzimas Digestivas)',
    subtitle: 'OPTIMIZACIÓN DIGESTIVA // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 290,
    currency: 'Bs.',
    rating: 4.8,
    reviewsCount: 19,
    badge: 'HUMAN FIRST',
    description: 'Digestive Enzymes de Dragon Pharma ayuda a tu cuerpo a descomponer proteínas, carbohidratos y grasas de manera eficiente. Evita la pesadez estomacal y maximiza la absorción de nutrientes de cada comida.',
    image: '/images/products/enzymes.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 290
    },
    sizeSpecs: {
      '60 CAPS': { servings: 60, netWt: '60 CAPS', servingSize: '1 Cápsula', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '60', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'SUPPORT', value: 'DIGESTION', sublabel: 'ABSORPTION', icon: 'restaurant' }
    ],
    benefits: [
      { id: 'b1', title: 'Máxima Absorción', description: 'Aprovecha al máximo cada gramo de proteína que consumes.', highlight: true },
      { id: 'b2', title: 'Adiós Pesadez', description: 'Reduce gases e hinchazón después de comidas copiosas.' }
    ],
    usage: {
      description: 'Tomar 1 cápsula justo antes o durante tus comidas más pesadas.',
      liquid: 'AGUA',
      timing: 'PRE COMIDA'
    }
  },
  {
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
  }
];`;

const productIndex = code.indexOf('export const CLASS_TICKETS: ClassTicket[] = [');
if (productIndex !== -1) {
  const precedingCode = code.substring(0, productIndex);
  const closingIndex = precedingCode.lastIndexOf('];');
  
  if (closingIndex !== -1) {
    const newCode = precedingCode.substring(0, closingIndex) + ',\\n' + newProducts.slice(1, -2) + '\\n\\n' + code.substring(productIndex);
    fs.writeFileSync('src/data/products.ts', newCode);
    console.log("Successfully added Wellness Products");
  }
}

