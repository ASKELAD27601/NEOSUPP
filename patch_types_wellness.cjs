const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');
code = code.replace(
  "category: 'creatine' | 'creatine-flavored' | 'isolate' | 'protein' | 'pre-workout' | 'combo' | 'accessories' | 'blend' | 'snacks' | 'sauces';",
  "category: 'creatine' | 'creatine-flavored' | 'isolate' | 'protein' | 'pre-workout' | 'combo' | 'accessories' | 'blend' | 'snacks' | 'sauces' | 'wellness';"
);
fs.writeFileSync('src/types.ts', code);
console.log('Added wellness category');
