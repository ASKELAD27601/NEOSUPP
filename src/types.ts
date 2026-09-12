export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export interface UsageInfo {
  description: string;
  liquid: string;
  timing: string;
  warning?: string;
  performanceNote?: string;
}

export interface SpecTicket {
  label: string;
  value: string;
  sublabel: string;
  icon?: string;
  isPrimary?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  series: string;
  brand?: 'MYPROTEIN' | 'DRAGON PHARMA';
  category: 'creatine' | 'creatine-flavored' | 'isolate' | 'protein' | 'pre-workout' | 'combo' | 'accessories' | 'blend' | 'snacks' | 'sauces' | 'wellness' | 'burners' | 'diuretics';
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  level?: 'PRINCIPIANTE' | 'INTERMEDIO' | 'AVANZADO' | 'HARDCORE';
  isHardcore?: boolean;
  warningBanner?: string;
  description: string;
  image: string;
  secondaryImage?: string;
  tertiaryImage?: string;
  flavors?: string[];
  currentFlavor?: string;
  flavorImages?: Record<string, string>;
  flavorThemes?: Record<
    string,
    {
      color: string;
      accentBg: string;
      tag: string;
      label: string;
      image: string;
      netWt: string;
    }
  >;
  sizes?: string[];
  currentSize?: string;
  sizePrices?: Record<string, number>;
  sizeOriginalPrices?: Record<string, number>;
  sizeImages?: Record<string, string>;
  sizeSpecs?: Record<
    string,
    {
      servings: number;
      netWt: string;
      servingSize?: string;
      jarHeight?: string;
      badge?: string;
    }
  >;
  specs: SpecTicket[];
  benefits: BenefitItem[];
  usage: UsageInfo;
  nutritionFacts?: {
    servingSize: string;
    calories: string;
    items: { name: string; amount: string; dailyValue?: string }[];
  };
}

export interface CartItem {
  product: Product;
  flavor: string;
  size: string;
  quantity: number;
  price: number;
}

export interface ClassTicket {
  id: string;
  title: string;
  classesCount: number;
  price: number;
  currency: string;
  isPopular?: boolean;
  color?: string;
  features: string[];
}

export interface Athlete {
  id: string;
  name: string;
  category: string;
  quote: string;
  image: string;
  stack: string[];
  weightClass: string;
}
