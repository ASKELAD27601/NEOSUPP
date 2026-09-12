import { Product, ClassTicket, Athlete } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'impact-creatine-myprotein',
    slug: 'impact-creatine',
    name: 'IMPACT CREATINE',
    subtitle: 'CREATINA MONOHIDRATADA // MYPROTEIN',
    brand: 'MYPROTEIN',
    series: 'MYPROTEIN ESSENTIALS',
    category: 'creatine',
    price: 300,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 85,
    badge: 'NUEVO INGRESO',
    description: 'Impact Creatine de Myprotein ofrece monohidrato de creatina de alta calidad para mejorar el rendimiento físico en ráfagas sucesivas de ejercicio de corta duración y alta intensidad.',
    image: '/images/products/impact-creatine.png',
    flavors: ['UNFLAVORED'],
    currentFlavor: 'UNFLAVORED',
    flavorImages: {
      'UNFLAVORED': '/images/products/impact-creatine.png'
    },
    flavorThemes: {
      'UNFLAVORED': { color: '#007eb3', accentBg: '#00293d', tag: '⚪ SIN SABOR', label: 'UNFLAVORED', image: '/images/products/impact-creatine.png', netWt: '250G' }
    },
    sizes: ['250 GRAMOS'],
    currentSize: '250 GRAMOS',
    sizePrices: {
      '250 GRAMOS': 300
    },
    sizeSpecs: {
      '250 GRAMOS': { servings: 83, netWt: '250G', servingSize: '1 Cazo (3g)', jarHeight: '250G', badge: '💪 300 Bs.' }
    },
    specs: [
      { label: 'SIZE', value: '250', sublabel: 'GRAMS', icon: 'data_usage' },
      { label: 'PURITY', value: '100%', sublabel: 'MONOHYDRATE', icon: 'science' },
      { label: 'SERVINGS', value: '83', sublabel: 'PER CONTAINER', icon: 'bolt', isPrimary: true }
    ],
    benefits: [
      { id: 'ic1', title: 'RENDIMIENTO COMPROBADO', description: 'Mejora el rendimiento físico en ejercicios de alta intensidad.', highlight: true },
      { id: 'ic2', title: 'CALIDAD MYPROTEIN', description: 'Polvo de alta pureza que se mezcla fácilmente.' },
      { id: 'ic3', title: 'VERSATILIDAD', description: 'Sin sabor, ideal para añadir a tu batido de proteínas diario.' }
    ],
    usage: {
      description: 'Mezcla 1 cazo (3g) con 150-250 ml de agua, batido o zumo y consume una vez al día, preferiblemente antes o después de hacer ejercicio.',
      liquid: '150-250 ML AGUA',
      timing: 'CUALQUIER MOMENTO',
      warning: 'Mantener una adecuada hidratación al consumir creatina.'
    },
    nutritionFacts: {
      servingSize: '1 Cazo (3g)',
      calories: '0',
      items: [
        { name: 'Creatine Monohydrate', amount: '3 g', dailyValue: '**' }
      ]
    }
  },
  {
    id: 'shaker-myprotein',
    slug: 'shaker-myprotein',
    name: 'SHAKER MYPROTEIN',
    subtitle: 'MEZCLADOR CLÁSICO // 400 ML',
    brand: 'MYPROTEIN',
    series: 'ACCESORIOS',
    category: 'accessories',
    price: 60,
    currency: 'Bs.',
    rating: 4.8,
    reviewsCount: 120,
    badge: 'ACCESORIO',
    description: 'El Shaker Clásico de Myprotein es perfecto para mantener tus suplementos mezclados y sin grumos. Con una capacidad de 400 ml, es ideal para tus batidos de proteínas, pre-entrenos o aminoácidos.',
    image: '/images/products/shaker-myprotein.png',
    flavors: ['CLASSIC BLUE'],
    currentFlavor: 'CLASSIC BLUE',
    flavorImages: {
      'CLASSIC BLUE': '/images/products/shaker-myprotein.png'
    },
    flavorThemes: {
      'CLASSIC BLUE': { color: '#007eb3', accentBg: '#00293d', tag: '🔵 AZUL CLÁSICO', label: 'CLASSIC', image: '/images/products/shaker-myprotein.png', netWt: '400 ML' }
    },
    sizes: ['400 ML'],
    currentSize: '400 ML',
    sizePrices: {
      '400 ML': 60
    },
    sizeSpecs: {
      '400 ML': { servings: 0, netWt: '400 ML', servingSize: '400 ml', jarHeight: '400ML', badge: '💧 60 Bs.' }
    },
    specs: [
      { label: 'CAPACITY', value: '400', sublabel: 'MILILITROS', icon: 'local_drink', isPrimary: true },
      { label: 'MATERIAL', value: 'BPA', sublabel: 'FREE', icon: 'verified' },
      { label: 'MIXING', value: 'SMOOTH', sublabel: 'WIRE BALL', icon: 'science' }
    ],
    benefits: [
      { id: 'shk1', title: 'MEZCLA PERFECTA', description: 'Incluye mezclador interno para evitar grumos en tus batidos.', highlight: true },
      { id: 'shk2', title: 'TAMAÑO COMPACTO', description: 'Capacidad de 400 ml, perfecto para llevar cómodamente.' },
      { id: 'shk3', title: 'SEGURO Y DURADERO', description: 'Plástico libre de BPA y completamente hermético para evitar derrames.' }
    ],
    usage: {
      description: 'Añade tus suplementos y líquidos, cierra bien la tapa y agita vigorosamente.',
      liquid: 'HASTA 400 ML',
      timing: 'PARA TUS BATIDOS',
      warning: 'Lavar antes del primer uso. No recomendado para líquidos calientes.'
    },
    nutritionFacts: {
      servingSize: 'N/A',
      calories: '-',
      items: [
        { name: 'Accesorio', amount: '1', dailyValue: '-' }
      ]
    }
  },
  {
    id: 'clear-whey-isolate',
    slug: 'clear-whey-isolate',
    name: 'CLEAR WHEY ISOLATE',
    subtitle: 'PROTEÍNA AISLADA REFRESCANTE',
    brand: 'MYPROTEIN',
    series: 'ISOLATE SERIES',
    category: 'isolate',
    price: 450,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 156,
    badge: 'REFRESCANTE',
    description: 'Clear Whey Isolate no es el típico batido de proteínas. Es una alternativa ligera y refrescante, más parecida a un jugo o bebida deportiva que a un batido lácteo tradicional. Aporta proteína aislada de alta calidad con un increíble sabor afrutado.',
    image: '/images/products/clear-whey.png',
    flavors: ['ORANGE MANGO'],
    currentFlavor: 'ORANGE MANGO',
    flavorImages: {
      'ORANGE MANGO': '/images/products/clear-whey.png'
    },
    flavorThemes: {
      'ORANGE MANGO': { color: '#f39c12', accentBg: '#b35900', tag: '🥭🍊 ORANGE MANGO', label: 'ORANGE MANGO', image: '/images/products/clear-whey.png', netWt: '20 SERV' }
    },
    sizes: ['20 SERVINGS'],
    currentSize: '20 SERVINGS',
    sizePrices: {
      '20 SERVINGS': 450
    },
    sizeSpecs: {
      '20 SERVINGS': { servings: 20, netWt: '20 SERV', servingSize: '1 Scoop (25g)', jarHeight: '20 SERV', badge: '🥤 450 Bs.' }
    },
    specs: [
      { label: 'PROTEIN', value: '20G', sublabel: 'PER SERVING', icon: 'fitness_center' },
      { label: 'SUGAR', value: '0.1G', sublabel: 'LOW SUGAR', icon: 'water_drop' },
      { label: 'TYPE', value: 'CLEAR', sublabel: 'JUICE-LIKE', icon: 'local_drink', isPrimary: true }
    ],
    benefits: [
      { id: 'cw1', title: 'LIGERA Y REFRESCANTE', description: 'Una alternativa al tradicional batido lácteo, perfecta para después de sudar intensamente.', highlight: true },
      { id: 'cw2', title: 'PROTEÍNA DE ALTA PUREZA', description: '20g de proteína aislada de suero de leche de rápida absorción.' },
      { id: 'cw3', title: 'BAJA EN CALORÍAS', description: 'Mínimo contenido de azúcar y grasas para favorecer el mantenimiento o definición muscular.' }
    ],
    usage: {
      description: 'Mezcla 1 cazo (25g) con 300-400 ml de agua fría. Agita bien y deja reposar unos 15 segundos hasta que baje la espuma natural antes de beber.',
      liquid: '300-400 ML AGUA FRÍA',
      timing: 'POST-ENTRENAMIENTO O CUALQUIER MOMENTO',
      warning: 'Es normal que al agitarla genere espuma, déjala reposar.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (25g)',
      calories: '85',
      items: [
        { name: 'Protein', amount: '20 g', dailyValue: '40%' },
        { name: 'Total Carbohydrate', amount: '1.2 g', dailyValue: '<1%' },
        { name: 'Sugars', amount: '0.1 g', dailyValue: '**' },
        { name: 'Total Fat', amount: '0.1 g', dailyValue: '<1%' }
      ]
    }
  },
  {
    id: 'impact-whey-protein',
    slug: 'impact-whey-protein',
    name: 'IMPACT WHEY PROTEIN',
    subtitle: 'PROTEÍNA DE SUERO CONCENTRADA',
    brand: 'MYPROTEIN',
    series: 'MYPROTEIN ESSENTIALS',
    category: 'blend',
    price: 550,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 215,
    badge: 'MÁS VENDIDO',
    description: 'Impact Whey Protein es una proteína de suero de leche de alta calidad. Cada ración está repleta de proteínas de primera, además de los aminoácidos esenciales, para ayudar al mantenimiento y desarrollo de masa muscular.',
    image: '/images/products/impact-whey.png',
    flavors: ['CHOCOLATE SMOOTH', 'CAPUCHINO', 'VAINILLA'],
    currentFlavor: 'CHOCOLATE SMOOTH',
    flavorImages: {
      'CHOCOLATE SMOOTH': '/images/products/impact-whey.png',
      'CAPUCHINO': '/images/products/impact-whey.png',
      'VAINILLA': '/images/products/impact-whey.png'
    },
    flavorThemes: {
      'CHOCOLATE SMOOTH': { color: '#4a2511', accentBg: '#2d1406', tag: '🍫 CHOCOLATE SMOOTH', label: 'CHOCOLATE', image: '/images/products/impact-whey.png', netWt: '1 KG' },
      'CAPUCHINO': { color: '#8b5a2b', accentBg: '#4b3621', tag: '☕ CAPUCHINO', label: 'CAPUCHINO', image: '/images/products/impact-whey.png', netWt: '1 KG' },
      'VAINILLA': { color: '#f3e5ab', accentBg: '#d4c484', tag: '🍦 VAINILLA', label: 'VAINILLA', image: '/images/products/impact-whey.png', netWt: '1 KG' }
    },
    sizes: ['1 KILO'],
    currentSize: '1 KILO',
    sizePrices: {
      '1 KILO': 550
    },
    sizeSpecs: {
      '1 KILO': { servings: 40, netWt: '1 KG', servingSize: '1 Scoop (25g)', jarHeight: '1 KG', badge: '💪 550 Bs.' }
    },
    specs: [
      { label: 'PROTEIN', value: '21G', sublabel: 'PER SERVING', icon: 'fitness_center', isPrimary: true },
      { label: 'BCAAs', value: '4.5G', sublabel: 'NATURALLY OCCURRING', icon: 'science' },
      { label: 'SUGAR', value: '1.9G', sublabel: 'LOW SUGAR', icon: 'water_drop' }
    ],
    benefits: [
      { id: 'iw1', title: 'DESARROLLO MUSCULAR', description: 'Alta calidad de proteína que contribuye al crecimiento y mantenimiento de la masa muscular.', highlight: true },
      { id: 'iw2', title: 'RÁPIDA ABSORCIÓN', description: 'Ideal para consumir inmediatamente después del entrenamiento.' },
      { id: 'iw3', title: 'EXCELENTE SABOR', description: 'Fácil de mezclar y con un sabor increíble sin excesos de azúcar.' }
    ],
    usage: {
      description: 'Mezcla 1 cazo (25g) con 150-250 ml de agua o leche 30 minutos antes y/o después de tu entrenamiento.',
      liquid: '150-250 ML AGUA O LECHE',
      timing: 'PRE O POST-ENTRENAMIENTO',
      warning: 'Para obtener mejores resultados, toma tu batido entre 30 y 60 minutos después de tu entrenamiento.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (25g)',
      calories: '103',
      items: [
        { name: 'Protein', amount: '21 g', dailyValue: '42%' },
        { name: 'Total Carbohydrate', amount: '1.9 g', dailyValue: '<1%' },
        { name: 'Sugars', amount: '1.9 g', dailyValue: '**' },
        { name: 'Total Fat', amount: '1.9 g', dailyValue: '2%' }
      ]
    }
  },
  {
    id: 'creatine-monohydrate',
    slug: 'creatine-monohydrate',
    name: 'CREATINE MONOHYDRATE',
    subtitle: '100% MICRONIZED ESSENTIALS // SIN SABOR',
    series: 'ESSENTIALS SERIES',
    category: 'creatine',
    brand: 'DRAGON PHARMA',
    price: 230,
    originalPrice: 260,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 342,
    badge: '100% PURO MICRONIZADO',
    description: 'Creatina Monohidrato 100% Micronizada Dragon Pharma Essentials sin sabor. Diseñada para máxima absorción, fuerza explosiva e hipertrofia muscular real. 5g de creatina pura por servicio, cero aditivos y solubilidad instantánea.',
    image: '/images/products/creatine-30serv.png',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrLRsr4QutGFqegs07MEIpSh4Bb7pzNKmjPXxX0mRCwphTJ6_prMLX-Qjr-nq7Huwe1tm6IibEofGwwu2uQwl3GZg9qAHn7XYQoxDjnxCb_aq-k47SfB3s4Ck81SYka6459XPUP9KaMOv_Kw5bSci6jI-f96tqbp_0NZw96KQMoRdudzexLRIF9Rg4TX13WcM9Zoq8Zy-VmVbwLXH1FaCuHc2S5AqXXpydIQ759yqR4avzQU6s8e0',
    flavors: ['SIN SABOR (UNFLAVORED)'],
    currentFlavor: 'SIN SABOR (UNFLAVORED)',
    sizes: ['30 SERVICIOS (150g)', '60 SERVICIOS (300g)', '200 SERVICIOS (1 Kg)'],
    currentSize: '30 SERVICIOS (150g)',
    sizeImages: {
      '30 SERVICIOS (150g)': '/images/products/creatine-30serv.png',
      '60 SERVICIOS (300g)': '/images/products/creatine-60serv.png',
      '200 SERVICIOS (1 Kg)': '/images/products/creatine-200serv.png'
    },
    sizePrices: {
      '30 SERVICIOS (150g)': 230,
      '60 SERVICIOS (300g)': 330,
      '200 SERVICIOS (1 Kg)': 770
    },
    sizeOriginalPrices: {
      '30 SERVICIOS (150g)': 260,
      '60 SERVICIOS (300g)': 370,
      '200 SERVICIOS (1 Kg)': 850
    },
    sizeSpecs: {
      '30 SERVICIOS (150g)': {
        servings: 30,
        netWt: 'NET WT 150 g',
        servingSize: '1 Scoop (5g)',
        jarHeight: 'FRASCO COMPACTO 150G',
        badge: '⚡ 30 SERV • 230 Bs.'
      },
      '60 SERVICIOS (300g)': {
        servings: 60,
        netWt: 'NET WT 300 g',
        servingSize: '1 Scoop (5g)',
        jarHeight: 'FRASCO ESTÁNDAR 300G',
        badge: '★ 60 SERV • 330 Bs.'
      },
      '200 SERVICIOS (1 Kg)': {
        servings: 200,
        netWt: 'NET WT 2.205 lbs (1 Kg)',
        servingSize: '1 Scoop (5g)',
        jarHeight: 'BOTE MEGA 1 KG (1000G)',
        badge: '🔥 200 SERV • 770 Bs.'
      }
    },
    specs: [
      { label: 'MICRONIZED', value: '100%', sublabel: 'PURITY LEVEL', icon: 'bolt' },
      { label: 'CREATINE', value: '5G', sublabel: 'PER SERVING', icon: 'fitness_center', isPrimary: true },
      { label: 'SERVINGS', value: '30 / 60 / 200', sublabel: 'PRESENTACIONES', icon: 'data_usage' }
    ],
    benefits: [
      { id: 'b1', title: 'AUMENTO DE FUERZA Y POTENCIA', description: 'Satura las reservas intramusculares de fosfocreatina para un rendimiento explosivo en cargas pesadas.', highlight: true },
      { id: 'b2', title: 'HIPERTROFIA Y MASA MUSCULAR', description: 'Favorece la síntesis proteica e hidratación celular para un volumen muscular magro superior.' },
      { id: 'b3', title: 'RECUPERACIÓN ACELERADA ENTRE SERIES', description: 'Optimiza la reposición de ATP en intervalos cortos de alta intensidad.' },
      { id: 'b4', title: '100% SIN SABOR Y ALTA SOLUBILIDAD', description: 'Polvo ultra-fino micronizado a malla 200 que se disuelve al instante sin grumos en agua o batidos.' }
    ],
    usage: {
      description: 'Mezclar 1 scoop (5g) con 240-300 ml de agua, jugo o batido de proteína. Consumir diariamente, preferiblemente antes o después del entrenamiento.',
      liquid: '240-300 ML AGUA O BATIDO',
      timing: 'USO DIARIO (PRE/POST)',
      warning: 'Beber al menos 2 a 3 litros de agua diarios mientras se suplementa con creatina.',
      performanceNote: 'Fase de carga opcional: 20g diarios divididos en 4 tomas de 5g durante 5 a 7 días.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (5g)',
      calories: '0 kcal',
      items: [
        { name: 'Creatina Monohidrato (Micronizada 100%)', amount: '5,000 mg', dailyValue: '**' },
        { name: 'Sodio', amount: '0 mg', dailyValue: '0%' },
        { name: 'Carbohidratos totales', amount: '0 g', dailyValue: '0%' },
        { name: 'Grasas', amount: '0 g', dailyValue: '0%' }
      ]
    }
  },
  {
    id: 'creatine-flavored',
    slug: 'creatine-flavored',
    name: 'CREATINE MONOHYDRATE SABORIZADA',
    subtitle: '100% MICRONIZED ESSENTIALS // 45 SERVICIOS (306g)',
    series: 'ESSENTIALS SERIES',
    category: 'creatine-flavored',
    brand: 'DRAGON PHARMA',
    price: 380,
    originalPrice: 420,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 289,
    badge: '45 SERV • SABORES GOURMET',
    description: 'Creatina Monohidrato 100% Micronizada con sabores frutales gourmet de Dragon Pharma. 5g de creatina pura por servicio, solubilidad instantánea y refrescantes perfiles de sabor sin azúcar añadida. Potencia tu fuerza, recuperación y masa muscular.',
    image: '/images/products/creatine-grape-45serv.png',
    flavors: ['GRAPE', 'COTTON CANDY', 'LEMON LIME', 'PINK LEMONADE'],
    currentFlavor: 'GRAPE',
    flavorImages: {
      'GRAPE': '/images/products/creatine-grape-45serv.png',
      'COTTON CANDY': '/images/products/creatine-cottoncandy-45serv.png',
      'LEMON LIME': '/images/products/creatine-lemonlime-45serv.png',
      'PINK LEMONADE': '/images/products/creatine-pinklemonade-45serv.png'
    },
    flavorThemes: {
      'GRAPE': {
        color: '#9b59b6',
        accentBg: '#3d164d',
        tag: '🍇 UVA EXPLOSIVA',
        label: 'GRAPE (UVA)',
        image: '/images/products/creatine-grape-45serv.png',
        netWt: 'NET WT 306 g'
      },
      'COTTON CANDY': {
        color: '#ff69b4',
        accentBg: '#59183b',
        tag: '🍬 ALGODÓN DE AZÚCAR',
        label: 'COTTON CANDY',
        image: '/images/products/creatine-cottoncandy-45serv.png',
        netWt: 'NET WT 306 g'
      },
      'LEMON LIME': {
        color: '#2ed573',
        accentBg: '#184a24',
        tag: '🍋 LIMA LIMÓN REFRESCANTE',
        label: 'LEMON LIME',
        image: '/images/products/creatine-lemonlime-45serv.png',
        netWt: 'NET WT 306 g'
      },
      'PINK LEMONADE': {
        color: '#ff7675',
        accentBg: '#541c22',
        tag: '🥤 LIMONADA ROSA',
        label: 'PINK LEMONADE',
        image: '/images/products/creatine-pinklemonade-45serv.png',
        netWt: 'NET WT 306 g'
      }
    },
    sizes: ['45 SERVICIOS (306g)'],
    currentSize: '45 SERVICIOS (306g)',
    sizePrices: {
      '45 SERVICIOS (306g)': 380
    },
    sizeOriginalPrices: {
      '45 SERVICIOS (306g)': 420
    },
    sizeSpecs: {
      '45 SERVICIOS (306g)': {
        servings: 45,
        netWt: 'NET WT 306 g',
        servingSize: '1 Scoop (6.8g)',
        jarHeight: 'FRASCO SABORIZADO 306G',
        badge: '★ 45 SERV • 380 Bs.'
      }
    },
    specs: [
      { label: 'MICRONIZED', value: '100%', sublabel: 'PURITY LEVEL', icon: 'bolt' },
      { label: 'CREATINE', value: '5G', sublabel: 'PER SERVING', icon: 'fitness_center', isPrimary: true },
      { label: 'SERVINGS', value: '45', sublabel: 'NET WT 306G', icon: 'data_usage' }
    ],
    benefits: [
      { id: 'fb1', title: '5G DE CREATINA PURA MICRONIZADA', description: 'Incrementa la fuerza explosiva, potencia muscular y resistencia en entrenamientos de alta intensidad.', highlight: true },
      { id: 'fb2', title: 'SABOR REFRESCANTE GOURMET CERO AZÚCAR', description: 'Formulada con saborizantes premium que se mezclan sin esfuerzo en agua fría sin dejar residuos arenosos.' },
      { id: 'fb3', title: '45 SERVICIOS COMPLETOS (380 Bs.)', description: 'Rendimiento prolongado para mes y medio de saturación y mantenimiento muscular continuo.' },
      { id: 'fb4', title: 'ABSORCIÓN Y RECUPERACIÓN ÓPTIMA', description: 'Acelera la reposición de ATP intracelular y reduce la fatiga muscular post-entrenamiento.' }
    ],
    usage: {
      description: 'Mezclar 1 scoop (6.8g) con 240-300 ml de agua fría o tu bebida favorita. Consumir diariamente, preferiblemente 20-30 min antes o después del entrenamiento.',
      liquid: '240-300 ML AGUA FRÍA',
      timing: 'USO DIARIO (PRE/POST)',
      warning: 'Mantener una ingesta hídrica de al menos 2.5 a 3 litros de agua diarios.',
      performanceNote: 'No requiere fase de carga; tómalo consistentemente todos los días para mantener saturación muscular.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (6.8g)',
      calories: '5 kcal',
      items: [
        { name: 'Creatina Monohidrato (Micronizada 100%)', amount: '5,000 mg', dailyValue: '**' },
        { name: 'Carbohidratos totales', amount: '< 1 g', dailyValue: '<1%' },
        { name: 'Azúcares totales', amount: '0 g', dailyValue: '0%' },
        { name: 'Sodio', amount: '10 mg', dailyValue: '<1%' }
      ]
    }
  },
  {
    id: 'iso-phorm',
    slug: 'iso-phorm',
    name: 'ISO PHORM',
    subtitle: 'PREMIUM HYDROLYZED & WHEY PROTEIN ISOLATE',
    series: 'ISOLATE SERIES',
    category: 'isolate',
    brand: 'DRAGON PHARMA',
    price: 630,
    originalPrice: 700,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 384,
    badge: '100% WHEY ISOLATE',
    description: 'Proteína de suero 100% aislada e hidrolizada Dragon Pharma IsoPhorm. 25g de proteína pura por servicio, sabores gourmet inigualables de nivel heladería artesanal, asimilación ultrarrápida y cero impurezas para una masa muscular magra impecable.',
    image: '/images/products/isophorm-blueberry.png',
    secondaryImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrLRsr4QutGFqegs07MEIpSh4Bb7pzNKmjPXxX0mRCwphTJ6_prMLX-Qjr-nq7Huwe1tm6IibEofGwwu2uQwl3GZg9qAHn7XYQoxDjnxCb_aq-k47SfB3s4Ck81SYka6459XPUP9KaMOv_Kw5bSci6jI-f96tqbp_0NZw96KQMoRdudzexLRIF9Rg4TX13WcM9Zoq8Zy-VmVbwLXH1FaCuHc2S5AqXXpydIQ759yqR4avzQU6s8e0',
    flavors: ['BLUEBERRY ICE CREAM', 'COOKIES & CREAM', 'HOT CHOCOLATE', 'WHITE CHOCOLATE PEANUT BUTTER'],
    currentFlavor: 'BLUEBERRY ICE CREAM',
    flavorImages: {
      'BLUEBERRY ICE CREAM': '/images/products/isophorm-blueberry.png',
      'COOKIES & CREAM': '/images/products/isophorm-cookiescream.png',
      'HOT CHOCOLATE': '/images/products/isophorm-hotchocolate.png',
      'WHITE CHOCOLATE PEANUT BUTTER': '/images/products/isophorm-whitechocolate.png'
    },
    flavorThemes: {
      'BLUEBERRY ICE CREAM': {
        color: '#b588d9',
        accentBg: '#431d5b',
        tag: '🫐 BLUEBERRY ICE CREAM',
        label: 'BLUEBERRY ICE CREAM',
        image: '/images/products/isophorm-blueberry.png',
        netWt: 'NET WT 2 LBS / 5 LBS'
      },
      'COOKIES & CREAM': {
        color: '#3867d6',
        accentBg: '#0f295c',
        tag: '🍪 COOKIES & CREAM',
        label: 'COOKIES & CREAM',
        image: '/images/products/isophorm-cookiescream.png',
        netWt: 'NET WT 2 LBS / 5 LBS'
      },
      'HOT CHOCOLATE': {
        color: '#d19b67',
        accentBg: '#54381e',
        tag: '☕ HOT CHOCOLATE',
        label: 'HOT CHOCOLATE',
        image: '/images/products/isophorm-hotchocolate.png',
        netWt: 'NET WT 2 LBS / 5 LBS'
      },
      'WHITE CHOCOLATE PEANUT BUTTER': {
        color: '#e67e22',
        accentBg: '#5c2c06',
        tag: '🥜 WHITE CHOCOLATE PEANUT BUTTER',
        label: 'WHITE CHOCO PEANUT BUTTER',
        image: '/images/products/isophorm-whitechocolate.png',
        netWt: 'NET WT 2 LBS / 5 LBS'
      }
    },
    sizes: ['2 LBS (907g)', '5 LBS (2.27 Kg)'],
    currentSize: '2 LBS (907g)',
    sizePrices: {
      '2 LBS (907g)': 630,
      '5 LBS (2.27 Kg)': 1170
    },
    sizeOriginalPrices: {
      '2 LBS (907g)': 700,
      '5 LBS (2.27 Kg)': 1300
    },
    sizeSpecs: {
      '2 LBS (907g)': {
        servings: 28,
        netWt: 'NET WT 2 LBS (907 g)',
        servingSize: '1 Scoop (~32.4g)',
        jarHeight: 'BOTE 2 LBS (~28 SERV)',
        badge: '★ 2 LBS • 630 Bs.'
      },
      '5 LBS (2.27 Kg)': {
        servings: 70,
        netWt: 'NET WT 5 LBS (2.27 Kg)',
        servingSize: '1 Scoop (~32.4g)',
        jarHeight: 'BOTE 5 LBS (~70 SERV)',
        badge: '★ 5 LBS • 1,170 Bs. (MEJOR VALOR)'
      }
    },
    specs: [
      { label: 'PROTEÍNA', value: '25g', sublabel: 'PER SERVING', icon: 'fitness_center', isPrimary: true },
      { label: 'GOURMET', value: 'TASTE', sublabel: 'ZERO COMPROMISE', icon: 'restaurant' },
      { label: 'BCAAs & EAAs', value: '11.5g', sublabel: 'NATURALES', icon: 'bolt' }
    ],
    benefits: [
      { id: 'i1', title: 'PUREZA MÁXIMA & DIGESTIÓN INSTANTÁNEA', description: 'Proteína de suero 100% aislada e hidrolizada ultra-filtrada, eliminando casi por completo grasas, carbohidratos y lactosa.' },
      { id: 'i2', title: 'ABSORCIÓN RÁPIDA DE AMINOÁCIDOS', description: 'Diseñada para una absorción celular relámpago, nutriendo las fibras musculares en el periodo anabólico crítico.' },
      { id: 'i3', title: 'SABORES GOURMET DE NIVEL HELADERÍA', description: 'Blueberry Ice Cream, Cookies & Cream, Hot Chocolate y White Chocolate Peanut Butter con disolución perfecta.', highlight: true },
      { id: 'i4', title: 'PRESENTACIONES 2 LB (630 Bs.) Y 5 LB (1,170 Bs.)', description: 'Elige entre el formato estándar de 2 lb o el formato económico de 5 lb para máximo rendimiento de compra.' }
    ],
    usage: {
      description: 'Mezclar 1 scoop con 180-240 ml de agua fría o leche vegetal. Consumir inmediatamente después del entrenamiento o en tu ventana de mayor requerimiento proteico.',
      liquid: '180-240 ML AGUA FRÍA',
      timing: 'POST-WORKOUT / MAÑANA',
      warning: 'MANTENER EN LUGAR FRESCO Y SECO. CERRAR BIEN DESPUÉS DE CADA USO.',
      performanceNote: 'Ideal para etapas de definición muscular y ganancia de masa magra ultra limpia.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (32.4g)',
      calories: '120 kcal',
      items: [
        { name: 'Proteína Pura Aislada', amount: '25 g', dailyValue: '50%' },
        { name: 'Carbohidratos Totales', amount: '< 1 g', dailyValue: '<1%' },
        { name: 'Grasas Totales', amount: '0.5 g', dailyValue: '1%' },
        { name: 'Azúcares Añadidos', amount: '0 g', dailyValue: '0%' }
      ]
    }
  },
  {
    id: 'whey-phorm',
    slug: 'whey-phorm',
    name: 'WHEY PHORM',
    subtitle: 'PREMIUM WHEY PROTEIN MATRIX',
    series: 'ESSENTIALS PROTEIN',
    category: 'protein',
    brand: 'DRAGON PHARMA',
    price: 530,
    originalPrice: 590,
    currency: 'Bs.',
    rating: 4.8,
    reviewsCount: 412,
    badge: 'BESTSELLER',
    description: 'Matriz premium de proteína de suero ultra-filtrada combinando concentrado y aislado con sabor gourmet inigualable. Construcción de masa magra limpia con rápida digestión.',
    image: '/images/products/wheyphorm-vanilla.png',
    secondaryImage: '/images/products/wheyphorm-chocolate.png',
    flavors: ['WHITE CHOCOLATE VANILLA', 'DOUBLE CHOCOLATE BROWNIE', 'COCONUT ICE CREAM', 'CAPPUCCINO'],
    currentFlavor: 'WHITE CHOCOLATE VANILLA',
    flavorImages: {
      'WHITE CHOCOLATE VANILLA': '/images/products/wheyphorm-vanilla.png',
      'DOUBLE CHOCOLATE BROWNIE': '/images/products/wheyphorm-chocolate.png',
      'COCONUT ICE CREAM': '/images/products/wheyphorm-coconut.png',
      'CAPPUCCINO': '/images/products/wheyphorm-cappuccino.png'
    },
    flavorThemes: {
      'WHITE CHOCOLATE VANILLA': { color: '#f5e3b5', accentBg: '#594b29', tag: '🍦 VANILLA', label: 'WHITE CHOCO VANILLA', image: '/images/products/wheyphorm-vanilla.png', netWt: 'NET WT 2.02 lb (916 g)' },
      'DOUBLE CHOCOLATE BROWNIE': { color: '#6e4534', accentBg: '#3d251a', tag: '🍫 DOUBLE CHOCOLATE', label: 'DOUBLE CHOCO BROWNIE', image: '/images/products/wheyphorm-chocolate.png', netWt: 'NET WT 2.2 lb (1001 g)' },
      'COCONUT ICE CREAM': { color: '#ffffff', accentBg: '#525252', tag: '🥥 COCONUT', label: 'COCONUT ICE CREAM', image: '/images/products/wheyphorm-coconut.png', netWt: 'NET WT 2.03 lb (924 g)' },
      'CAPPUCCINO': { color: '#b08d6a', accentBg: '#5e432a', tag: '☕ CAPPUCCINO', label: 'CAPPUCCINO', image: '/images/products/wheyphorm-cappuccino.png', netWt: 'NET WT 1.96 lb (891 g)' }
    },
    sizes: ['2 LBS', '5 LBS'],
    currentSize: '2 LBS',
    sizePrices: {
      '2 LBS': 530,
      '5 LBS': 970
    },
    sizeOriginalPrices: {
      '2 LBS': 590,
      '5 LBS': 1050
    },
    sizeSpecs: {
      '2 LBS': { servings: 25, netWt: 'NET WT 2 LBS', servingSize: '1 Scoop (~36g)', jarHeight: 'BOTE 2 LBS (~25 SERV)', badge: '★ 2 LBS • 530 Bs.' },
      '5 LBS': { servings: 60, netWt: 'NET WT 5 LBS', servingSize: '1 Scoop (~36g)', jarHeight: 'BOTE 5 LBS (~60 SERV)', badge: '★ 5 LBS • 970 Bs.' }
    },
    specs: [
      { label: 'SIZE', value: '25', sublabel: 'SERVINGS', icon: 'data_usage' },
      { label: 'DOSE', value: '26G', sublabel: 'PROTEIN MATRIX', icon: 'fitness_center' },
      { label: 'FLAVOR', value: 'GOURMET', sublabel: 'TASTE', icon: 'restaurant', isPrimary: true }
    ],
    benefits: [
      { id: 'w1', title: 'RECUPERACIÓN MUSCULAR ACELERADA', description: 'Aporte inmediato de BCAA y EAA esenciales para la síntesis de nuevas fibras musculares.' },
      { id: 'w2', title: 'PROTEÍNA DE ALTA CALIDAD 100% WHEY', description: 'Sin mezclas baratas de soya ni relleno de aminoácidos adulterados.' },
      { id: 'w3', title: 'SABORES INCREÍBLES SIN GRUMOS', description: 'Textura cremosa estilo milkshake con micropartículas de auténtico brownie.', highlight: true }
    ],
    usage: {
      description: 'Mezclar 1 cucharada con 180-240 ml de agua o leche. Ideal para después de entrenar o como snack proteico entre comidas.',
      liquid: '180-240 ML AGUA / LECHE',
      timing: 'POST-ENTRENAMIENTO',
      warning: 'Contiene derivados lácteos. Almacenar en lugar fresco y seco alejado de la luz solar.',
      performanceNote: 'Agitar en shaker durante 15 segundos para una textura homogénea sedosa.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (36g)',
      calories: '140 kcal',
      items: [
        { name: 'Proteína', amount: '26 g', dailyValue: '52%' },
        { name: 'Grasas totales', amount: '2 g', dailyValue: '3%' },
        { name: 'Carbohidratos', amount: '3 g', dailyValue: '1%' },
        { name: 'BCAAs Naturales', amount: '5.8 g', dailyValue: '**' }
      ]
    }
  },
  {
    id: 'protein-phorm',
    slug: 'protein-phorm',
    name: 'PROTEIN PHORM',
    subtitle: 'BEEF + WHEY HYBRID PROTEIN MATRIX',
    series: 'ESSENTIALS PROTEIN',
    category: 'protein',
    brand: 'DRAGON PHARMA',
    price: 480,
    originalPrice: 530,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 384,
    badge: 'NEW',
    description: 'Matriz híbrida de proteína de carne y suero (Beef + Whey). 24g de proteína de alta calidad por servicio con sabores verdaderamente excepcionales.',
    image: '/images/products/proteinphorm-churro.png',
    secondaryImage: '/images/products/proteinphorm-lechecondensada.png',
    flavors: ['CHURRO', 'LECHE CONDENSADA', 'STRAWBERRY MILKSHAKE', 'CHOCOLATE MILKSHAKE'],
    currentFlavor: 'CHURRO',
    flavorImages: {
      'CHURRO': '/images/products/proteinphorm-churro.png',
      'LECHE CONDENSADA': '/images/products/proteinphorm-lechecondensada.png',
      'STRAWBERRY MILKSHAKE': '/images/products/proteinphorm-strawberry.png',
      'CHOCOLATE MILKSHAKE': '/images/products/proteinphorm-chocolate.png'
    },
    flavorThemes: {
      'CHURRO': { color: '#d99e52', accentBg: '#543615', tag: '🥨 CHURRO', label: 'CHURROS RIVALITO', image: '/images/products/proteinphorm-churro.png', netWt: 'NET WT 2 lb (907 g)' },
      'LECHE CONDENSADA': { color: '#e3d2aa', accentBg: '#473d28', tag: '🥛 LECHE CONDENSADA', label: 'LECHE CONDENSADA', image: '/images/products/proteinphorm-lechecondensada.png', netWt: 'NET WT 2 lb (907 g)' },
      'STRAWBERRY MILKSHAKE': { color: '#e887a0', accentBg: '#592031', tag: '🍓 STRAWBERRY', label: 'STRAWBERRIES & CREAM', image: '/images/products/proteinphorm-strawberry.png', netWt: 'NET WT 2 lb (907 g)' },
      'CHOCOLATE MILKSHAKE': { color: '#8a5c4d', accentBg: '#3d251d', tag: '🍫 CHOCOLATE', label: 'CHOCOLATE MILKSHAKE', image: '/images/products/proteinphorm-chocolate.png', netWt: 'NET WT 2 lb (907 g)' }
    },
    sizes: ['2 LBS', '5 LBS'],
    currentSize: '2 LBS',
    sizePrices: {
      '2 LBS': 480,
      '5 LBS': 920
    },
    sizeOriginalPrices: {
      '2 LBS': 530,
      '5 LBS': 1020
    },
    sizeSpecs: {
      '2 LBS': { servings: 28, netWt: 'NET WT 2 LBS', servingSize: '1 Scoop (~32g)', jarHeight: 'BOTE 2 LBS (~28 SERV)', badge: '★ 2 LBS • 480 Bs.' },
      '5 LBS': { servings: 65, netWt: 'NET WT 5 LBS', servingSize: '1 Scoop (~32g)', jarHeight: 'BOTE 5 LBS (~65 SERV)', badge: '★ 5 LBS • 920 Bs.' }
    },
    specs: [
      { label: 'SIZE', value: '28', sublabel: 'SERVINGS', icon: 'data_usage' },
      { label: 'DOSE', value: '24G', sublabel: 'PROTEIN MATRIX', icon: 'fitness_center' },
      { label: 'FLAVOR', value: 'GOURMET', sublabel: 'TASTE', icon: 'restaurant', isPrimary: true }
    ],
    benefits: [
      { id: 'pp1', title: 'MATRIZ HÍBRIDA BEEF + WHEY', description: 'Combina lo mejor de la proteína de carne aislada y suero de leche para un perfil completo de aminoácidos.' },
      { id: 'pp2', title: 'ABSORCIÓN Y RECUPERACIÓN ÓPTIMA', description: 'Ideal para la recuperación muscular inmediata post-entrenamiento.' },
      { id: 'pp3', title: 'SABORES EXCEPCIONALES', description: 'Churro, Leche Condensada, Strawberries & Cream, Chocolate Milkshake.', highlight: true }
    ],
    usage: {
      description: 'Mezclar 1 cucharada con 180-240 ml de agua o leche. Ideal para después de entrenar o como snack proteico entre comidas.',
      liquid: '180-240 ML AGUA / LECHE',
      timing: 'POST-ENTRENAMIENTO',
      warning: 'Contiene derivados lácteos. Almacenar en lugar fresco y seco alejado de la luz solar.',
      performanceNote: 'Agitar en shaker durante 15 segundos para una textura homogénea sedosa.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (32g)',
      calories: '130 kcal',
      items: [
        { name: 'Proteína', amount: '24 g', dailyValue: '48%' },
        { name: 'Grasas totales', amount: '2 g', dailyValue: '3%' },
        { name: 'Carbohidratos', amount: '4 g', dailyValue: '1%' },
        { name: 'BCAAs Naturales', amount: '5.5 g', dailyValue: '**' }
      ]
    }
  },
  {
    id: 'venom-preworkout',
    slug: 'venom-preworkout',
    name: 'VENOM FULLY LOADED',
    subtitle: 'HIGH STIMULANT PRE-WORKOUT MATRIX',
    series: 'PERFORMANCE',
    category: 'pre-workout',
    brand: 'DRAGON PHARMA',
    price: 410,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 520,
    badge: 'NEW',
    description: 'Fórmula pre-entrenamiento de alta intensidad diseñada para energía extrema, enfoque láser, y bombeos musculares inigualables.',
    image: '/images/products/venom-orange.png',
    secondaryImage: '/images/products/venom-mango.png',
    flavors: ['JACKED ORANGE', 'MANIAC MANGO', 'JACKED', 'KIWI'],
    currentFlavor: 'JACKED ORANGE',
    flavorImages: {
      'JACKED ORANGE': '/images/products/venom-orange.png',
      'MANIAC MANGO': '/images/products/venom-mango.png',
      'JACKED': '/images/products/venom-jacked.png',
      'KIWI': '/images/products/venom-kiwi.png'
    },
    flavorThemes: {
      'JACKED ORANGE': { color: '#ff6a00', accentBg: '#4a1e00', tag: '🍊 ORANGE', label: 'JACKED ORANGE', image: '/images/products/venom-orange.png', netWt: 'NET WT 20 SERV' },
      'MANIAC MANGO': { color: '#ffb700', accentBg: '#4a3500', tag: '🥭 MANGO', label: 'MANIAC MANGO', image: '/images/products/venom-mango.png', netWt: 'NET WT 20 SERV' },
      'JACKED': { color: '#e81c23', accentBg: '#4a090b', tag: '🍎 APPLE', label: 'JACKED APPLE', image: '/images/products/venom-jacked.png', netWt: 'NET WT 20 SERV' },
      'KIWI': { color: '#88b04b', accentBg: '#2f4215', tag: '🥝 KIWI', label: 'KILLER KIWI', image: '/images/products/venom-kiwi.png', netWt: 'NET WT 20 SERV' }
    },
    sizes: ['20 SERVINGS'],
    currentSize: '20 SERVINGS',
    sizePrices: {
      '20 SERVINGS': 410
    },
    sizeSpecs: {
      '20 SERVINGS': { servings: 20, netWt: '20 SERV', servingSize: '1 Scoop (~24.6g)', jarHeight: '20 SERV', badge: '★ 410 Bs.' }
    },
    specs: [
      { label: 'SIZE', value: '20', sublabel: 'SERVINGS', icon: 'data_usage' },
      { label: 'PUMP', value: '8G', sublabel: 'L-CITRULLINE', icon: 'fitness_center' },
      { label: 'ENDURANCE', value: '3.2G', sublabel: 'BETA-ALANINE', icon: 'directions_run' },
      { label: 'ENERGY', value: '400MG', sublabel: 'CAFFEINE', icon: 'bolt', isPrimary: true }
    ],
    benefits: [
      { id: 'v1', title: 'ENERGÍA EXTREMA Y ENFOQUE EUFÓRICO', description: 'Matriz avanzada con 400mg de cafeína y 2000mg de L-Tirosina para concentración total.', highlight: true },
      { id: 'v2', title: 'BOMBEO MUSCULAR MASIVO', description: '8000mg de L-Citrulina y VasoDrive-AP® para vascularidad y flujo sanguíneo inigualable.' },
      { id: 'v3', title: 'RENDIMIENTO Y FUERZA SOSTENIDA', description: 'Con Beta-Alanina y elevATP® para resistencia muscular mejorada.' }
    ],
    usage: {
      description: 'Como suplemento dietético, consume una porción (1 scoop) de Venom con 240-300 ml de agua fría, 15-20 minutos antes de tu entrenamiento.',
      liquid: '240-300 ML AGUA FRÍA',
      timing: '15-20 MIN ANTES DE ENTRENAR',
      warning: 'No exceder la dosis recomendada. Contiene altos niveles de estimulantes.',
      performanceNote: 'Evaluar tolerancia con medio scoop antes de consumir el scoop completo.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (24.6g)',
      calories: '10',
      items: [
        { name: 'Total Carbohydrates', amount: '2 g', dailyValue: '1%' },
        { name: 'Total Sugars', amount: '2 g', dailyValue: '**' },
        { name: 'L-Citrulline', amount: '8,000 mg', dailyValue: '**' },
        { name: 'Beta Alanine', amount: '3,200 mg', dailyValue: '**' },
        { name: 'Betaine Anhydrous', amount: '2,500 mg', dailyValue: '**' },
        { name: 'D-Ribose', amount: '2,000 mg', dailyValue: '**' },
        { name: 'Taurine', amount: '1,000 mg', dailyValue: '**' },
        { name: 'L-Tyrosine', amount: '2,000 mg', dailyValue: '**' },
        { name: 'Alpha GPC 50%', amount: '600 mg', dailyValue: '**' },
        { name: 'Caffeine Anhydrous', amount: '400 mg', dailyValue: '**' },
        { name: 'Sebrium DCD (Sceletium tortuosum)', amount: '12.5 mg', dailyValue: '**' },
        { name: 'Black Pepper Extract (95% Piperine)', amount: '5 mg', dailyValue: '**' },
        { name: 'Rauwolscine (Rauwolfia vomitoria)', amount: '2 mg', dailyValue: '**' },
        { name: 'VasoDrive-AP', amount: '254 mg', dailyValue: '**' },
        { name: 'elevATP', amount: '150 mg', dailyValue: '**' }
      ]
    }
  },
  {
    id: 'venom-essentials',
    slug: 'venom-essentials',
    name: 'VENOM ESSENTIAL',
    subtitle: 'CORE PRE-WORKOUT MATRIX',
    series: 'ESSENTIALS',
    category: 'pre-workout',
    brand: 'DRAGON PHARMA',
    price: 360,
    currency: 'Bs.',
    rating: 4.8,
    reviewsCount: 310,
    badge: 'ESSENTIAL',
    description: 'Fórmula pre-entrenamiento esencial diseñada para brindar energía constante, concentración y rendimiento sin excesos, perfecta para el día a día.',
    image: '/images/products/venom-essentials-mango.png',
    secondaryImage: '/images/products/venom-essentials-kiwi.png',
    flavors: ['MANIAC MANGO', 'KIWI', 'JACKED', 'JACKED ORANGE'],
    currentFlavor: 'MANIAC MANGO',
    flavorImages: {
      'MANIAC MANGO': '/images/products/venom-essentials-mango.png',
      'KIWI': '/images/products/venom-essentials-kiwi.png',
      'JACKED': '/images/products/venom-essentials-jacked.png',
      'JACKED ORANGE': '/images/products/venom-essentials-orange.png'
    },
    flavorThemes: {
      'MANIAC MANGO': { color: '#ffb700', accentBg: '#4a3500', tag: '🥭 MANGO', label: 'MANIAC MANGO', image: '/images/products/venom-essentials-mango.png', netWt: 'NET WT 30 SERV' },
      'KIWI': { color: '#88b04b', accentBg: '#2f4215', tag: '🥝 KIWI', label: 'KILLER KIWI', image: '/images/products/venom-essentials-kiwi.png', netWt: 'NET WT 30 SERV' },
      'JACKED': { color: '#e81c23', accentBg: '#4a090b', tag: '🍎 APPLE', label: 'JACKED APPLE', image: '/images/products/venom-essentials-jacked.png', netWt: 'NET WT 30 SERV' },
      'JACKED ORANGE': { color: '#ff6a00', accentBg: '#4a1e00', tag: '🍊 ORANGE', label: 'JACKED ORANGE', image: '/images/products/venom-essentials-orange.png', netWt: 'NET WT 30 SERV' }
    },
    sizes: ['30 SERVINGS'],
    currentSize: '30 SERVINGS',
    sizePrices: {
      '30 SERVINGS': 360
    },
    sizeSpecs: {
      '30 SERVINGS': { servings: 30, netWt: '30 SERV', servingSize: '1 Scoop (15.1g)', jarHeight: '30 SERV', badge: '★ 360 Bs.' }
    },
    specs: [
      { label: 'SIZE', value: '30', sublabel: 'SERVINGS', icon: 'data_usage' },
      { label: 'PUMP', value: '5G', sublabel: 'L-CITRULLINE', icon: 'fitness_center' },
      { label: 'ENDURANCE', value: '3.2G', sublabel: 'BETA-ALANINE', icon: 'directions_run' },
      { label: 'ENERGY', value: '200MG', sublabel: 'CAFFEINE', icon: 'bolt', isPrimary: true }
    ],
    benefits: [
      { id: 've1', title: 'ENERGÍA CONSTANTE Y SOSTENIDA', description: 'Matriz balanceada para entrenamientos diarios sin caídas bruscas.', highlight: true },
      { id: 've2', title: 'ENFOQUE Y RENDIMIENTO', description: 'Mejora la concentración muscular y retrasa la fatiga.' },
      { id: 've3', title: 'BOMBEO Y VASCULARIDAD', description: 'L-Citrulina para un adecuado flujo sanguíneo durante la rutina.' }
    ],
    usage: {
      description: 'Mezclar 1 scoop de Venom Essentials con 240-300 ml de agua fría, consumir 15-20 minutos antes del entrenamiento.',
      liquid: '240-300 ML AGUA FRÍA',
      timing: '15-20 MIN ANTES DE ENTRENAR',
      warning: 'Contiene cafeína. No combinar con otros productos estimulantes.',
      performanceNote: 'Ideal para usuarios intermedios o entrenamientos regulares.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (15.1g)',
      calories: '0',
      items: [
        { name: 'Sodium (from Pink Himalayan Salt)', amount: '110 mg', dailyValue: '5%' },
        { name: 'L-Citrulline', amount: '5,000 mg', dailyValue: '**' },
        { name: 'Beta Alanine', amount: '3,200 mg', dailyValue: '**' },
        { name: 'L-Tyrosine', amount: '2,000 mg', dailyValue: '**' },
        { name: 'Taurine', amount: '1,000 mg', dailyValue: '**' },
        { name: 'Caffeine Anhydrous', amount: '200 mg', dailyValue: '**' }
      ]
    }
  },
  {
    id: 'mr-veinz',
    slug: 'mr-veinz',
    name: 'MR VEINZ',
    subtitle: 'STIM-FREE PUMP & NOOTROPIC PRE-WORKOUT',
    series: 'PERFORMANCE',
    category: 'combo',
    brand: 'DRAGON PHARMA',
    price: 290,
    originalPrice: 400,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 140,
    badge: '🔥 PROMO SEPTIEMBRE',
    description: 'Aprovecha nuestra promoción por el mes de septiembre. Fórmula pre-entrenamiento sin estimulantes diseñada para un bombeo muscular extremo, vasodilatación máxima y enfoque cognitivo avanzado sin cafeína.',
    image: '/images/products/mrveinz-promo.png',
    secondaryImage: '/images/products/mrveinz-mango.png',
    flavors: ['ORANGE', 'MANGO', 'JACKED', 'KIWI SMASH'],
    currentFlavor: 'ORANGE',
    flavorImages: {
      'ORANGE': '/images/products/mrveinz-promo.png',
      'MANGO': '/images/products/mrveinz-mango.png',
      'JACKED': '/images/products/mrveinz-jacked.png',
      'KIWI SMASH': '/images/products/mrveinz-kiwi.png'
    },
    flavorThemes: {
      'ORANGE': { color: '#ff6a00', accentBg: '#4a1e00', tag: '🍊 ORANGE', label: 'ORANGE', image: '/images/products/mrveinz-promo.png', netWt: 'NET WT 20/40 SERV' },
      'MANGO': { color: '#ffb700', accentBg: '#4a3500', tag: '🥭 MANGO', label: 'MANGO', image: '/images/products/mrveinz-mango.png', netWt: 'NET WT 20/40 SERV' },
      'JACKED': { color: '#e81c23', accentBg: '#4a090b', tag: '🍎 JACKED', label: 'JACKED', image: '/images/products/mrveinz-jacked.png', netWt: 'NET WT 20/40 SERV' },
      'KIWI SMASH': { color: '#88b04b', accentBg: '#2f4215', tag: '🥝 KIWI', label: 'KIWI SMASH', image: '/images/products/mrveinz-kiwi.png', netWt: 'NET WT 20/40 SERV' }
    },
    sizes: ['40 SERVINGS'],
    currentSize: '40 SERVINGS',
    sizePrices: {
      '40 SERVINGS': 290
    },
    sizeOriginalPrices: {
      '40 SERVINGS': 400
    },
    sizeSpecs: {
      '40 SERVINGS': { servings: 40, netWt: '20/40 SERV', servingSize: '1 Scoop (9.5g) / 2 Scoops (19g)', jarHeight: '40 SERV', badge: '★ 290 Bs.' }
    },
    specs: [
      { label: 'SIZE', value: '40', sublabel: 'SERVINGS', icon: 'data_usage' },
      { label: 'PUMP', value: '6G', sublabel: 'L-CITRULLINE', icon: 'fitness_center' },
      { label: 'ENDURANCE', value: '2G', sublabel: 'BETA-ALANINE', icon: 'directions_run' },
      { label: 'FOCUS', value: '1.5G', sublabel: 'NITROSIGINE®', icon: 'psychology', isPrimary: true }
    ],
    benefits: [
      { id: 'mv1', title: 'BOMBEO Y VASCULARIDAD EXTREMA', description: 'Con 6000mg de L-Citrulina por servicio doble para maximizar el flujo sanguíneo.', highlight: true },
      { id: 'mv2', title: 'ENFOQUE COGNITIVO SIN ESTIMULANTES', description: 'Matriz nootrópica con Nitrosigine® y L-Tirosina para concentración mental pura sin alterar el sistema nervioso.' },
      { id: 'mv3', title: 'RESISTENCIA MUSCULAR', description: '2000mg de Beta Alanina y 2500mg de Betaína Anhidra para retrasar la fatiga muscular.' }
    ],
    usage: {
      description: 'Como suplemento dietético, consume de 1 a 2 scoops de Mr. Veinz con 240-300 ml de agua fría, 15-20 minutos antes de tu entrenamiento.',
      liquid: '240-300 ML AGUA FRÍA',
      timing: '15-20 MIN ANTES DE ENTRENAR',
      warning: 'Producto libre de estimulantes. Puede ser consumido por la noche sin afectar el sueño.',
      performanceNote: 'Ideal para combinar con fórmulas con estimulantes o para entrenamientos tardíos.'
    },
    nutritionFacts: {
      servingSize: '2 Scoops (19g)',
      calories: '0',
      items: [
        { name: 'Calcium (as Calcium Potassium Phosphate Citrate) (Calci-K)', amount: '200 mg', dailyValue: '16%' },
        { name: 'Phosphorus (as Calcium Potassium Phosphate Citrate) (Calci-K)', amount: '100 mg', dailyValue: '8%' },
        { name: 'Magnesium (as Magnesium Bisglycinate Chelate) (Albion)', amount: '40 mg', dailyValue: '10%' },
        { name: 'Sodium (Pink Himalayan Sea Salt)', amount: '120 mg', dailyValue: '6%' },
        { name: 'Potassium', amount: '260 mg', dailyValue: '6%' },
        { name: 'L-Citrulline', amount: '6,000 mg', dailyValue: '**' },
        { name: 'Betaine Anhydrous', amount: '2,500 mg', dailyValue: '**' },
        { name: 'Beta Alanine', amount: '2,000 mg', dailyValue: '**' },
        { name: 'Nitrosigine Inositol-Stabilized Arginine Silicate', amount: '1,500 mg', dailyValue: '**' },
        { name: 'L-Tyrosine', amount: '1,000 mg', dailyValue: '**' }
      ]
    }
  },
  {
    id: 'venom-inferno',
    slug: 'venom-inferno',
    name: 'VENOM INFERNO',
    subtitle: 'NUEVA PRESENTACIÓN // THERMOGENIC PRE-WORKOUT',
    series: 'INFERNO SERIES',
    category: 'pre-workout',
    brand: 'DRAGON PHARMA',
    price: 380,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 125,
    badge: 'NUEVA PRESENTACIÓN',
    description: 'La nueva presentación de Venom Inferno. Disfruta del increíble sabor Mangonada, una mezcla de mango dulce con notas ácidas, picantes y saladas inspiradas en el chamoy tradicional. Diseñado para proporcionar un golpe de energía masivo y concentración láser (laser-sharp focus) desde la primera serie.',
    image: '/images/products/venom-inferno-mangonada.png',
    flavors: ['MANGONADA'],
    currentFlavor: 'MANGONADA',
    flavorImages: {
      'MANGONADA': '/images/products/venom-inferno-mangonada.png'
    },
    flavorThemes: {
      'MANGONADA': { color: '#ff4d00', accentBg: '#5c1700', tag: '🥭 MANGONADA', label: 'MANGONADA', image: '/images/products/venom-inferno-mangonada.png', netWt: 'NET WT 20 SERV' }
    },
    sizes: ['20 SERVINGS'],
    currentSize: '20 SERVINGS',
    sizePrices: {
      '20 SERVINGS': 380
    },
    sizeSpecs: {
      '20 SERVINGS': { servings: 20, netWt: '20 SERV', servingSize: '1 Scoop (14.2g)', jarHeight: '20 SERV', badge: '🔥 380 Bs.' }
    },
    specs: [
      { label: 'SIZE', value: '20', sublabel: 'SERVINGS', icon: 'data_usage' },
      { label: 'FOCUS', value: 'LASER', sublabel: 'L-TYROSINE 3G', icon: 'visibility' },
      { label: 'ENERGY', value: '500MG', sublabel: 'TOTAL CAFFEINE', icon: 'bolt', isPrimary: true }
    ],
    benefits: [
      { id: 'vi1', title: 'ENERGÍA Y ENFOQUE', description: 'Aporta un golpe de energía masivo, estado de alerta elevado y concentración láser desde la primera serie.', highlight: true },
      { id: 'vi2', title: 'FÓRMULA LIMPIA', description: 'Etiqueta 100% transparente, sin azúcares y sin mezclas propietarias ocultas.' },
      { id: 'vi3', title: 'SABOR MANGONADA', description: 'Mezcla de mango dulce con notas ácidas, picantes y saladas inspiradas en el chamoy.' }
    ],
    usage: {
      description: 'Como suplemento dietético, consume 1 scoop de Venom Inferno (14.2g) con agua, 15-20 minutos antes de tu entrenamiento. Para evaluar tolerancia, usa medio scoop (7g).',
      liquid: '240-300 ML AGUA FRÍA',
      timing: '15-20 MIN ANTES DE ENTRENAR',
      warning: 'Alto en estimulantes (500mg de cafeína por scoop completo).',
      performanceNote: 'Cero calorías y sin azúcares, ideal para máximo rendimiento sin romper ayunos.'
    },
    nutritionFacts: {
      servingSize: '1 Scoop (14.2g)',
      calories: '0',
      items: [
        { name: 'Beta Alanine', amount: '3,200 mg', dailyValue: '**' },
        { name: 'L-Tyrosine', amount: '3,000 mg', dailyValue: '**' },
        { name: 'Betaine Anhydrous', amount: '2,500 mg', dailyValue: '**' },
        { name: 'Caffeine Anhydrous', amount: '375 mg', dailyValue: '**' },
        { name: 'DMAE Bitartrate', amount: '350 mg', dailyValue: '**' },
        { name: 'Palmitoylethanolamide (PEA)', amount: '250 mg', dailyValue: '**' },
        { name: 'Bitter Orange Extract (30% Synephrine)', amount: '200 mg', dailyValue: '**' },
        { name: 'Dicaffeine Malate (Infinergy™)', amount: '125 mg', dailyValue: '**' },
        { name: 'Mucuna Pruriens Extract (98% L-Dopa)', amount: '51 mg', dailyValue: '**' },
        { name: 'Huperzia Serrata Extract', amount: '10 mg', dailyValue: '**' },
        { name: 'Alpha Yohimbine 90% Rauwolscine', amount: '4.5 mg', dailyValue: '**' },
        { name: 'Sodium (from Pink Himalayan Sea Salt)', amount: '90 mg', dailyValue: '4%' },
        { name: 'Calcium', amount: '40 mg', dailyValue: '3%' }
      ]
    }
  }
,
  {
    id: 'dragon-pharma-dips',
    slug: 'dragon-pharma-dips',
    name: 'SAUCE DIPS',
    subtitle: 'SALSAS ZERO CALORÍAS // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'GOURMET CONDIMENTS',
    category: 'sauces',
    price: 100,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 112,
    badge: 'NUEVO INGRESO',
    description: 'Dips y Salsas de Dragon Pharma. Disfruta del mejor sabor en tus comidas sin remordimientos. Zero calorías, zero azúcar y zero grasas. El complemento perfecto para mantener tu dieta estricta sin sacrificar el sabor.',
    image: '/images/products/dips-ketchup.png',
    flavors: ['MAYONESA', 'BUFFALO WING', 'MOSTAZA', 'KETCHUP', 'BARBECUE', 'CHICKEN'],
    currentFlavor: 'KETCHUP',
    flavorImages: {
      'MAYONESA': '/images/products/dips-mayonesa.png',
      'BUFFALO WING': '/images/products/dips-buffalo.png',
      'MOSTAZA': '/images/products/dips-mostaza.png',
      'KETCHUP': '/images/products/dips-ketchup.png',
      'BARBECUE': '/images/products/dips-barbecue.png',
      'CHICKEN': '/images/products/dips-chicken.png'
    },
    flavorThemes: {
      'MAYONESA': { color: '#f5e3ba', accentBg: '#4a412b', tag: '🥚 MAYONESA', label: 'MAYONESA', image: '/images/products/dips-mayonesa.png', netWt: '350 ML' },
      'BUFFALO WING': { color: '#ff6600', accentBg: '#4a1d00', tag: '🌶️ BUFFALO WING', label: 'BUFFALO WING', image: '/images/products/dips-buffalo.png', netWt: '350 ML' },
      'MOSTAZA': { color: '#ffcc00', accentBg: '#4a3c00', tag: '🌭 MOSTAZA', label: 'MOSTAZA', image: '/images/products/dips-mostaza.png', netWt: '350 ML' },
      'KETCHUP': { color: '#ff0000', accentBg: '#4a0000', tag: '🍅 KETCHUP', label: 'KETCHUP', image: '/images/products/dips-ketchup.png', netWt: '350 ML' },
      'BARBECUE': { color: '#8b4513', accentBg: '#2a1202', tag: '🍖 BARBECUE', label: 'BARBECUE', image: '/images/products/dips-barbecue.png', netWt: '350 ML' },
      'CHICKEN': { color: '#e5c158', accentBg: '#4a3b12', tag: '🍗 CHICKEN', label: 'CHICKEN', image: '/images/products/dips-chicken.png', netWt: '350 ML' }
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
,
  {
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
,
  {
    id: 'hf-multi-rx',
    slug: 'multi-rx-human-first',
    name: 'MULTI RX (Multivitaminas)',
    subtitle: 'COMPLEJO MULTIVITAMÍNICO // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 310,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 45,
    badge: 'HUMAN FIRST',
    description: 'Multi Rx de la línea Human First de Dragon Pharma es un complejo multivitamínico de espectro completo. Formulado para proporcionar todas las vitaminas y minerales esenciales para optimizar la salud general, el sistema inmunológico y el rendimiento diario.',
    image: '/images/products/multi-rx.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 310
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
    price: 310,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 38,
    badge: 'HUMAN FIRST',
    description: 'Joint Rx está diseñado para apoyar la salud de las articulaciones, tendones y ligamentos. Reduce la inflamación, mejora la movilidad y acelera la recuperación de las articulaciones sometidas a estrés por el entrenamiento intenso.',
    image: '/images/products/joint-rx.png',
    sizes: ['120 CAPS'],
    currentSize: '120 CAPS',
    sizePrices: {
      '120 CAPS': 310
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
    price: 310,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 22,
    badge: 'HUMAN FIRST',
    description: 'Pre & Probiotics de Dragon Pharma combina bacterias beneficiosas con prebióticos para optimizar tu salud intestinal. Mejora la digestión, reduce la hinchazón y fortalece el sistema inmunológico desde el intestino.',
    image: '/images/products/probiotics.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 310
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
    price: 310,
    currency: 'Bs.',
    rating: 4.8,
    reviewsCount: 19,
    badge: 'HUMAN FIRST',
    description: 'Digestive Enzymes de Dragon Pharma ayuda a tu cuerpo a descomponer proteínas, carbohidratos y grasas de manera eficiente. Evita la pesadez estomacal y maximiza la absorción de nutrientes de cada comida.',
    image: '/images/products/enzymes.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 310
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
    id: 'hf-liver-rx',
    slug: 'liver-rx-human-first',
    name: 'LIVER RX (Cuidado Hepático)',
    subtitle: 'PROTECCIÓN HEPÁTICA DIARIA // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HUMAN FIRST',
    category: 'wellness',
    price: 310,
    currency: 'Bs.',
    rating: 4.9,
    reviewsCount: 52,
    badge: 'HUMAN FIRST',
    description: 'Liver Rx es un soporte hepático avanzado diseñado para proteger, desintoxicar y regenerar el hígado, ideal para atletas que someten su cuerpo a estrés intenso o consumo elevado de suplementos.',
    image: '/images/products/liver-rx.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 310
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
    price: 310,
    currency: 'Bs.',
    rating: 5.0,
    reviewsCount: 41,
    badge: 'HUMAN FIRST',
    description: 'TUDCA es el estándar de oro en soporte hepático. Es un ácido biliar que ayuda en la desintoxicación profunda del hígado, mejora el flujo biliar y protege las células hepáticas del daño celular extremo.',
    image: '/images/products/tudca.png',
    sizes: ['60 CAPS'],
    currentSize: '60 CAPS',
    sizePrices: {
      '60 CAPS': 310
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
  }
,
  {
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
    category: 'burners',
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
    category: 'burners',
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

,
  {
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

,
  {
    id: 'dp-dryup',
    slug: 'dryup-dragon-pharma',
    name: 'DRYUP (Diurético)',
    subtitle: 'DIURÉTICO DE DEFINICIÓN EXTREMA // DRAGON PHARMA',
    brand: 'DRAGON PHARMA',
    series: 'HARDCORE',
    category: 'diuretics',
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

];

export const CLASS_TICKETS: ClassTicket[] = [
  {
    id: 'ticket-1',
    title: '1 CLASS',
    classesCount: 1,
    price: 1000,
    currency: '₽',
    isPopular: false,
    features: ['Acceso a 1 sesión de entrenamiento o baile', 'Válido por 14 días', 'Acceso a vestuario y lockers']
  },
  {
    id: 'ticket-10',
    title: '10 CLASSES',
    classesCount: 10,
    price: 9000,
    currency: '₽',
    isPopular: false,
    features: ['10 sesiones de entrenamiento técnico', 'Válido por 45 días', 'Reserva prioritaria en app', '1 toalla oficial NEOSUPP']
  },
  {
    id: 'ticket-20',
    title: '20 CLASSES',
    classesCount: 20,
    price: 17000,
    currency: '₽',
    isPopular: true,
    color: '#c3f400',
    features: ['20 sesiones de alto rendimiento', 'Válido por 90 días', 'Freezing de pase hasta 14 días', 'Descuento 15% en suplementos']
  },
  {
    id: 'ticket-40',
    title: '40 CLASSES',
    classesCount: 40,
    price: 34000,
    currency: '₽',
    isPopular: false,
    features: ['Pase VIP completo temporada', 'Válido por 180 días', 'Acceso total a workshops especiales', 'Kit bienvenida NEOSUPP']
  }
];

export const GENERAL_RULES = [
  { id: 'r1', title: 'PASS VALIDITY PERIOD', content: 'Todos los pases tienen una vigencia estricta a partir de la fecha de la primera clase activada. No extendible salvo certificado médico.' },
  { id: 'r2', title: 'REGISTRATION FOR CLASSES', content: 'La reserva previa mediante la plataforma o aplicación móvil es obligatoria con al menos 2 horas de antelación.' },
  { id: 'r3', title: 'CANCELLATION AND RESCHEDULING', content: 'Si no puedes asistir a una clase, cancela tu cita al menos 3 horas antes del inicio para conservar el crédito del pase.', highlight: true },
  { id: 'r4', title: 'FREEZING A SEASON TICKET', content: 'Los pases de 20 y 40 clases pueden pausarse una vez por un período máximo de 14 días corridos.' },
  { id: 'r5', title: 'REFUNDS POLICY', content: 'Los reembolsos se procesan dentro de los primeros 7 días naturales si el pase no ha sido activado.' },
  { id: 'r6', title: 'TRANSFER OF THE SEASON TICKET', content: 'Los pases pueden transferirse a otro usuario registrado una sola vez comunicando a soporte.' },
  { id: 'r7', title: 'SCHEDULE CHANGES & ALERTS', content: 'Nos reservamos el derecho de modificar el horario con 24 horas de aviso en caso de eventos o masterclasses.' }
];

export const ATHLETES: Athlete[] = [
  {
    id: 'ath-1',
    name: 'KAI BRUTAL',
    category: 'IFBB PRO BODYBUILDER',

    quote: 'La consistencia en la oscuridad crea el poder visible en la tarima.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    stack: ['CREATINE MONOHYDRATE', 'ISO PHORM'],
    weightClass: 'OPEN HEAVYWEIGHT'
  },
  {
    id: 'ath-2',
    name: 'VALERIA STEEL',
    category: 'POWERLIFTING & CROSSFIT',
    quote: 'El dolor es solo información. El rendimiento no se negocia.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80',
    stack: ['CREATINE', 'WHEY PHORM', 'ELECTROLYTES'],
    weightClass: '-63 KG ELITE'
  },
  {
    id: 'ath-3',
    name: 'MARCUS OBSIDIAN',
    category: 'STREET DANCE & ATHLETICS',

    quote: 'Movimiento puro impulsado por combustible ultra-refinado.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    stack: ['CREATINE MONOHYDRATE', 'ISO PHORM'],
    weightClass: 'PRO ATHLETE'
  }
];