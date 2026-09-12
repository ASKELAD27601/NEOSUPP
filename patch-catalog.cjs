const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');

// Add state
code = code.replace(
  "const [selectedCategory, setSelectedCategory] = useState<string>('all');",
  "const [selectedCategory, setSelectedCategory] = useState<string>('all');\n  const [selectedBrand, setSelectedBrand] = useState<string>('all');"
);

// Add filter logic
code = code.replace(
  "if (selectedCategory !== 'all' && p.category !== selectedCategory) {\n      return false;\n    }",
  "if (selectedCategory !== 'all' && p.category !== selectedCategory) {\n      return false;\n    }\n    if (selectedBrand !== 'all' && p.brand !== selectedBrand) {\n      return false;\n    }"
);

// Add Brand tabs
const brandTabs = `
        {/* Brand Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-start gap-3 border-b-2 border-[#2a2a2a] pb-4">
          <span className="text-[10px] text-[#888] font-bold uppercase mr-2 tracking-widest">FILTRAR POR MARCA:</span>
          <button
            onClick={() => setSelectedBrand('all')}
            className={\`font-mono text-xs font-bold px-3 py-1.5 uppercase transition-all \${
              selectedBrand === 'all' ? 'bg-white text-black' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-white'
            }\`}
          >
            TODAS
          </button>
          <button
            onClick={() => setSelectedBrand('MYPROTEIN')}
            className={\`font-mono text-xs font-bold px-3 py-1.5 uppercase transition-all \${
              selectedBrand === 'MYPROTEIN' ? 'bg-[#007eb3] text-white shadow-[2px_2px_0px_#00293d]' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-[#007eb3]'
            }\`}
          >
            MYPROTEIN
          </button>
          <button
            onClick={() => setSelectedBrand('DRAGON PHARMA')}
            className={\`font-mono text-xs font-bold px-3 py-1.5 uppercase transition-all \${
              selectedBrand === 'DRAGON PHARMA' ? 'bg-[#ff4757] text-white shadow-[2px_2px_0px_#550000]' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-[#ff4757]'
            }\`}
          >
            DRAGON PHARMA
          </button>
        </div>
`;

code = code.replace(
  "{/* Filter Tabs Bar */}",
  brandTabs + "\n        {/* Filter Tabs Bar */}"
);

// Add Badge to Card
code = code.replace(
  "{/* Card Top Stamp Bar */}",
  `{/* Card Top Stamp Bar */}
              {product.brand && (
                <div className={\`absolute top-0 left-0 -translate-y-1/2 translate-x-2 z-20 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider border \${
                  product.brand === 'MYPROTEIN' 
                    ? 'bg-[#007eb3] text-white border-[#00293d] shadow-[1px_1px_0px_#00293d]' 
                    : 'bg-[#ff4757] text-white border-[#550000] shadow-[1px_1px_0px_#550000]'
                }\`}>
                  {product.brand}
                </div>
              )}`
);

fs.writeFileSync('src/components/ProductCatalog.tsx', code);
