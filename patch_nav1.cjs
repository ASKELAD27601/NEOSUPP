const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

code = code.replace(
  /onOpenSearch: \(\) => void;\n\}/,
  `onOpenSearch: () => void;
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
}`
);

code = code.replace(
  /onOpenSearch,\n\}\) => \{/,
  `onOpenSearch,
  selectedCategory = 'all',
  onSelectCategory = () => {},
}) => {`
);

fs.writeFileSync('src/components/Navbar.tsx', code);
