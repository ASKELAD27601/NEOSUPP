const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');

const target = `export interface Athlete {
  id: string;
  name: string;
  category: 'creatine' | 'creatine-flavored' | 'isolate' | 'protein' | 'pre-workout' | 'combo' | 'accessories' | 'blend';`;

const replacement = `export interface Athlete {
  id: string;
  name: string;
  category: string;`;

code = code.replace(target, replacement);
fs.writeFileSync('src/types.ts', code);
