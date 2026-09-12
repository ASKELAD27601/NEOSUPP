const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');

// The string matching failed. Let's use a regex to strip the whole filter tabs bar.
code = code.replace(/\{\/\* Filter Tabs Bar \*\/\}[\s\S]*?\{\/\* Grid of Neo-Brutalist Product Cards \*\/\}/, '{/* Grid of Neo-Brutalist Product Cards */}');

fs.writeFileSync('src/components/ProductCatalog.tsx', code);
console.log('File patched successfully.');
