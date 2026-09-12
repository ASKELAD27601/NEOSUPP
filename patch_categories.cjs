const fs = require('fs');

// 1. Update products.ts
let productsCode = fs.readFileSync('src/data/products.ts', 'utf8');
productsCode = productsCode.replace(/id: 'dp-black-viper',([\s\S]*?)category: 'wellness',/, "id: 'dp-black-viper',$1category: 'burners',");
productsCode = productsCode.replace(/id: 'dp-l-carnitine',([\s\S]*?)category: 'wellness',/, "id: 'dp-l-carnitine',$1category: 'burners',");
// Also DryUp should probably be in burners? The user said "l carnitina y black viper", but dryup is a diuretic... I will only do what they asked.
fs.writeFileSync('src/data/products.ts', productsCode);

// 2. Update Navbar.tsx
let navbarCode = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbarCode = navbarCode.replace(
  /{ id: 'bienestar', label: 'SALUD Y BIENESTAR' },/g,
  "{ id: 'bienestar', label: 'SALUD Y BIENESTAR' },\n            { id: 'quemadores', label: 'QUEMADORES' },"
);
fs.writeFileSync('src/components/Navbar.tsx', navbarCode);

// 3. Update ProductCatalog.tsx
let catalogCode = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');
catalogCode = catalogCode.replace(
  /if \(selectedCategory === 'bienestar' && p.category !== 'wellness'\) return false;/,
  "if (selectedCategory === 'bienestar' && p.category !== 'wellness') return false;\n      if (selectedCategory === 'quemadores' && p.category !== 'burners') return false;"
);
fs.writeFileSync('src/components/ProductCatalog.tsx', catalogCode);

console.log('Categories updated successfully.');
