const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');

// 1. Remove `selectedCategory` state
code = code.replace(/  const \[selectedCategory, setSelectedCategory\] = useState<string>\('all'\);\n/, '');

// 2. Remove `categories` array
code = code.replace(/  const categories = \[\s+[\s\S]*?  \];\n\n/, '');

// 3. Simplify `filteredProducts`
const oldFilter = `  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'all' && p.category !== selectedCategory) {
      return false;
    }
    if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
      return false;
    }
    return true;
  });`;

const newFilter = `  const filteredProducts = products.filter((p) => {
    if (selectedBrand !== 'all' && p.brand !== selectedBrand) {
      return false;
    }
    return true;
  });`;

code = code.replace(oldFilter, newFilter);

// 4. Remove `Filter Tabs Bar` entirely
// Also add the missing `</div>` to close the Hero block right after `SUPLEMENTACIÓN NO LIMITS`
const targetHtml = `            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white uppercase tracking-tight leading-none">
              SUPLEMENTACIÓN <span className="bg-[#ff4757] text-white px-2 py-0.5 inline-block border-2 border-black rotate-[-1deg]">NO LIMITS</span>
            </h1>
          </div>
        </div>
        
        {/* Brand Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center justify-start gap-3 border-b-2 border-[#2a2a2a] pb-4">`;

const replaceHtml = `            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white uppercase tracking-tight leading-none">
              SUPLEMENTACIÓN <span className="bg-[#ff4757] text-white px-2 py-0.5 inline-block border-2 border-black rotate-[-1deg]">NO LIMITS</span>
            </h1>
          </div>
        </div>
      </div>
        
      {/* Brand Filter Tabs */}
      <div className="mt-8 flex flex-wrap items-center justify-start gap-3 border-b-2 border-[#2a2a2a] pb-4">`;
code = code.replace(targetHtml, replaceHtml);

const targetTabsBar = `        {/* Filter Tabs Bar */}
        <div className="mt-8 pt-6 border-t-2 border-[#2a2a2a] flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={\`font-mono text-xs font-bold px-3.5 py-2 uppercase border-2 transition-all neo-btn-press \${
                  selectedCategory === cat.id
                    ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                    : 'bg-[#181818] text-[#d0d0c8] border-[#333333] hover:border-[#c3f400] hover:text-white shadow-[2px_2px_0px_#000]'
                }\`}
              >
                <span>{cat.label}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">[{cat.count}]</span>
              </button>
            ))}
          </div>
          <div className="text-[11px] text-[#888880] flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#ff4757] inline-block animate-ping"></span>
            <span>MOSTRANDO {filteredProducts.length} PRODUCTOS DISPONIBLES</span>
          </div>
        </div>`;

code = code.replace(targetTabsBar, '');

// Also, because the Hero Block div was inadvertently left open, its closing </div> 
// which used to be at the end of the Filter Tabs Bar, is now hanging right before `Grid of Neo-Brutalist Product Cards`
// Let's remove the hanging `</div>` right before `{/* Grid of Neo-Brutalist Product Cards */}`
const hangingDivTarget = `      </div>

      {/* Grid of Neo-Brutalist Product Cards */}`;
const hangingDivReplace = `      {/* Grid of Neo-Brutalist Product Cards */}`;
code = code.replace(hangingDivTarget, hangingDivReplace);

fs.writeFileSync('src/components/ProductCatalog.tsx', code);
console.log('File patched successfully.');
