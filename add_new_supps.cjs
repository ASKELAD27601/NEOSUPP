const fs = require('fs');
let code = fs.readFileSync('src/data/products.ts', 'utf8');

const newProducts = `  {
    id: 'dp-l-citrulline',
    slug: 'l-citrulline-dragon-pharma',
    name: 'L-CITRULLINE (Bombeo Muscular)',
    subtitle: 'AMINOÁCIDOS PUROS // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'CORE',
    category: 'wellness',
    price: 310,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 34,
    badge: 'CORE LINE',
    description: 'La L-Citrulina es un potente aminoácido que aumenta los niveles de óxido nítrico en la sangre, mejorando drásticamente el flujo sanguíneo, el transporte de nutrientes y el bombeo muscular durante tus entrenamientos.',
    image: '/images/products/l-citrulline.png',
    sizes: ['60 SERV'],
    currentSize: '60 SERV',
    sizePrices: {
      '60 SERV': 310
    },
    sizeSpecs: {
      '60 SERV': { servings: 60, netWt: '300G', servingSize: '1 Scoop', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '60', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'PUMPS', value: 'MAX', sublabel: 'BLOOD FLOW', icon: 'favorite' }
    ],
    benefits: [
      { id: 'b1', title: 'Vasodilatación', description: 'Mejora el flujo sanguíneo y la entrega de oxígeno.', highlight: true },
      { id: 'b2', title: 'Resistencia', description: 'Retrasa la fatiga muscular durante el ejercicio.' }
    ],
    usage: {
      description: 'Mezclar 1 medida con agua o tu pre-entreno 15-30 minutos antes del ejercicio.',
      liquid: 'AGUA',
      timing: 'PRE ENTRENAMIENTO'
    }
  },
  {
    id: 'dp-beta-alanine',
    slug: 'beta-alanine-dragon-pharma',
    name: 'BETA ALANINE (Resistencia)',
    subtitle: 'AMINOÁCIDOS PUROS // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'CORE',
    category: 'wellness',
    price: 310,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 28,
    badge: 'CORE LINE',
    description: 'La Beta Alanina es clave para aumentar los niveles de carnosina muscular, lo que ayuda a amortiguar la acumulación de ácido láctico. El resultado: mayor resistencia, menos fatiga y entrenamientos más intensos.',
    image: '/images/products/beta-alanine.png',
    sizes: ['60 SERV'],
    currentSize: '60 SERV',
    sizePrices: {
      '60 SERV': 310
    },
    sizeSpecs: {
      '60 SERV': { servings: 60, netWt: '300G', servingSize: '1 Scoop', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '60', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'ENDURANCE', value: 'MAX', sublabel: 'STAMINA', icon: 'directions_run' }
    ],
    benefits: [
      { id: 'b1', title: 'Resistencia', description: 'Bloquea el ácido láctico para entrenar más duro.', highlight: true },
      { id: 'b2', title: 'Recuperación', description: 'Mejora la capacidad de trabajo y el volumen de entreno.' }
    ],
    usage: {
      description: 'Mezclar 1 medida con agua o tu pre-entreno antes de entrenar.',
      liquid: 'AGUA',
      timing: 'PRE ENTRENAMIENTO'
    }
  },
  {
    id: 'dp-black-viper',
    slug: 'black-viper-dragon-pharma',
    name: 'BLACK VIPER (Quemador)',
    subtitle: 'TERMOGÉNICO EXTREMO // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HARDCORE',
    category: 'wellness',
    price: 360,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 112,
    badge: 'HARDCORE',
    description: 'Black Viper es un poderoso termogénico formulado para aumentar drásticamente el metabolismo, suprimir el apetito y maximizar la quema de calorías. Diseñado para quienes buscan una definición muscular extrema.',
    image: '/images/products/black-viper.png',
    sizes: ['90 CAPS'],
    currentSize: '90 CAPS',
    sizePrices: {
      '90 CAPS': 360
    },
    sizeSpecs: {
      '90 CAPS': { servings: 90, netWt: '90 CAPS', servingSize: '1 Cápsula', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '90', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'ENERGY', value: 'EXTREME', sublabel: 'FAT BURN', icon: 'local_fire_department' }
    ],
    benefits: [
      { id: 'b1', title: 'Metabolismo', description: 'Acelera la quema de grasas y calorías.', highlight: true },
      { id: 'b2', title: 'Energía', description: 'Energía extrema y concentración prolongada.' }
    ],
    usage: {
      description: 'Tomar 1 cápsula por la mañana con el estómago vacío. No exceder 2 cápsulas al día.',
      liquid: 'AGUA',
      timing: 'AYUNAS'
    }
  },
  {
    id: 'dp-l-carnitine',
    slug: 'l-carnitine-dragon-pharma',
    name: 'L-CARNITINE (L-Carnitina)',
    subtitle: 'QUEMADOR SIN ESTIMULANTES // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'CORE',
    category: 'wellness',
    price: 330,
    currency: 'Bs.',
    rating: 4.8,
    reviewsCount: 56,
    badge: 'CORE LINE',
    description: 'La L-Carnitina ayuda a transportar los ácidos grasos a las mitocondrias, donde se queman para producir energía. Excelente para potenciar la quema de grasa sin el uso de estimulantes.',
    image: '/images/products/l-carnitine.png',
    sizes: ['60 SERV'],
    currentSize: '60 SERV',
    sizePrices: {
      '60 SERV': 330
    },
    sizeSpecs: {
      '60 SERV': { servings: 60, netWt: 'LIQUID / CAPS', servingSize: '1 Medida', jarHeight: 'BOTE' }
    },
    specs: [
      { label: 'SERVINGS', value: '60', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true },
      { label: 'FAT LOSS', value: 'STIM FREE', sublabel: 'METABOLISM', icon: 'local_fire_department' }
    ],
    benefits: [
      { id: 'b1', title: 'Energía Natural', description: 'Usa la grasa almacenada como fuente de energía.', highlight: true },
      { id: 'b2', title: 'Sin Estimulantes', description: 'Perfecto para apilar con Black Viper u otros pre-entrenos.' }
    ],
    usage: {
      description: 'Tomar 1 medida 15-30 minutos antes del entrenamiento.',
      liquid: 'AGUA',
      timing: 'PRE ENTRENAMIENTO'
    }
  }
];`;

// Find where CLASS_TICKETS is defined
const productIndex = code.indexOf('export const CLASS_TICKETS: ClassTicket[] = [');

if (productIndex !== -1) {
  const precedingCode = code.substring(0, productIndex);
  const closingIndex = precedingCode.lastIndexOf('];');
  
  if (closingIndex !== -1) {
    const combinedCode = precedingCode.substring(0, closingIndex) + ',\n' + newProducts.slice(0, -2) + '\n];\n\n' + code.substring(productIndex);
    fs.writeFileSync('src/data/products.ts', combinedCode);
    console.log("Successfully added new supplements.");
  }
}

