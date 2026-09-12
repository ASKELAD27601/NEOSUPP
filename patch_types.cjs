const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');
code = code.replace(
  "category: 'creatine' | 'creatine-flavored' | 'isolate' | 'protein' | 'pre-workout' | 'combo' | 'accessories' | 'blend' | 'snacks';",
  "category: 'creatine' | 'creatine-flavored' | 'isolate' | 'protein' | 'pre-workout' | 'combo' | 'accessories' | 'blend' | 'snacks' | 'sauces';"
);
fs.writeFileSync('src/types.ts', code);
