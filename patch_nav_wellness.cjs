const fs = require('fs');

// Patch ProductCatalog.tsx
let catalog = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');
catalog = catalog.replace(
  "if (selectedCategory === 'salsas' && p.category !== 'sauces') return false;",
  "if (selectedCategory === 'salsas' && p.category !== 'sauces') return false;\n      if (selectedCategory === 'bienestar' && p.category !== 'wellness') return false;"
);
fs.writeFileSync('src/components/ProductCatalog.tsx', catalog);

// Patch Navbar.tsx
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
const navbarArrayOld = `            { id: 'salsas', label: 'SALSAS GOURMET' },`;
const navbarArrayNew = `            { id: 'salsas', label: 'SALSAS GOURMET' },\n            { id: 'bienestar', label: 'SALUD Y BIENESTAR' },`;
navbar = navbar.replace(new RegExp(navbarArrayOld, 'g'), navbarArrayNew);
fs.writeFileSync('src/components/Navbar.tsx', navbar);

console.log('Nav updated');
