const fs = require('fs');

// 1. Update products.ts
let productsCode = fs.readFileSync('src/data/products.ts', 'utf8');
productsCode = productsCode.replace(/id: 'dp-dryup',([\s\S]*?)category: 'wellness',/, "id: 'dp-dryup',$1category: 'diuretics',");
fs.writeFileSync('src/data/products.ts', productsCode);

// 2. Update Navbar.tsx
let navbarCode = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbarCode = navbarCode.replace(
  /{ id: 'quemadores', label: 'QUEMADORES' },/g,
  "{ id: 'quemadores', label: 'QUEMADORES' },\n            { id: 'diureticos', label: 'DIURÉTICOS' },"
);
fs.writeFileSync('src/components/Navbar.tsx', navbarCode);

// 3. Update ProductCatalog.tsx
let catalogCode = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');
catalogCode = catalogCode.replace(
  /if \(selectedCategory === 'quemadores' && p.category !== 'burners'\) return false;/,
  "if (selectedCategory === 'quemadores' && p.category !== 'burners') return false;\n      if (selectedCategory === 'diureticos' && p.category !== 'diuretics') return false;"
);
fs.writeFileSync('src/components/ProductCatalog.tsx', catalogCode);

console.log('Diuretics category updated successfully.');
