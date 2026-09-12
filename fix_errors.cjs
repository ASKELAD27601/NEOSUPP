const fs = require('fs');

let cartCode = fs.readFileSync('src/components/CartDrawer.tsx', 'utf8');
cartCode = cartCode.replace(
  '<span>CÓDIGO {appliedPromo} (-{discountPercent}%)</span>',
  "<span>CÓDIGO {appliedPromo} (-{discountInfo?.type === 'percent' ? discountInfo.value + '%' : discountInfo?.value + ' Bs./item'})</span>"
);
fs.writeFileSync('src/components/CartDrawer.tsx', cartCode);

let typesCode = fs.readFileSync('src/types.ts', 'utf8');
typesCode = typesCode.replace(
  "| 'wellness';",
  "| 'wellness' | 'burners' | 'diuretics';"
);
fs.writeFileSync('src/types.ts', typesCode);

