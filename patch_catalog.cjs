const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');

code = code.replace(
  /interface ProductCatalogProps \{/,
  `interface ProductCatalogProps {\n  selectedCategory?: string;`
);

code = code.replace(
  /export const ProductCatalog: React\.FC<ProductCatalogProps> = \(\{/,
  `export const ProductCatalog: React.FC<ProductCatalogProps> = ({\n  selectedCategory = 'all',`
);

code = code.replace(
  /const filteredProducts = products\.filter\(\(p\) => \{/,
  `const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'creatinas' && !['creatine', 'creatine-flavored'].includes(p.category)) return false;
      if (selectedCategory === 'proteinas' && !['isolate', 'protein', 'blend'].includes(p.category)) return false;
      if (selectedCategory === 'preentreno' && !['pre-workout', 'accessories'].includes(p.category)) return false;
      if (selectedCategory === 'combos' && p.category !== 'combo') return false;
      if (selectedCategory === 'snacks' && p.category !== 'snacks') return false;
    }`
);

fs.writeFileSync('src/components/ProductCatalog.tsx', code);
