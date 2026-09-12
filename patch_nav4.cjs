const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(
  /onSelectCategory = \(\) => \{\},/g,
  `onSelectCategory = (cat: string) => {},`
);

fs.writeFileSync('src/components/Navbar.tsx', code);
