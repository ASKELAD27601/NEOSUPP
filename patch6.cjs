const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');

const target = `{/* Neo-Brutalist Hero Header Block */}
      <div className="bg-[#121212] border-2 border-black p-4 md:p-5 neo-shadow-lime relative overflow-hidden">
        <div className="absolute -right-8 -top-8 bg-[#c3f400] text-black font-bold text-[10px] px-10 py-0.5 rotate-12 border-2 border-black uppercase tracking-widest hidden sm:block">
          CLINICAL GRADE // 2026
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#c3f400] text-black font-bold text-[10px] uppercase border border-black shadow-[2px_2px_0px_#ffffff]">
              <Zap className="w-3 h-3 fill-black" />
              <span>OFFICIAL DISPENSARY</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white uppercase tracking-tight leading-none">
              SUPLEMENTACIÓN <span className="bg-[#ff4757] text-white px-2 py-0.5 inline-block border-2 border-black rotate-[-1deg]">NO LIMITS</span>
            </h1>
          </div>
        </div>
      </div>
        
      {/* Brand Filter Tabs */}
      <div className="mt-5 flex flex-wrap items-center justify-start gap-2 border-b-2 border-[#2a2a2a] pb-2">
          <button
            onClick={() => setSelectedBrand('all')}
            className={\`font-mono text-[10px] font-bold px-2.5 py-1 uppercase transition-all \${
              selectedBrand === 'all' ? 'bg-white text-black' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-white'
            }\`}
          >
            TODAS
          </button>
          <button
            onClick={() => setSelectedBrand('MYPROTEIN')}
            className={\`font-mono text-[10px] font-bold px-2.5 py-1 uppercase transition-all \${
              selectedBrand === 'MYPROTEIN' ? 'bg-[#007eb3] text-white shadow-[2px_2px_0px_#00293d]' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-[#007eb3]'
            }\`}
          >
            MYPROTEIN
          </button>
          <button
            onClick={() => setSelectedBrand('DRAGON PHARMA')}
            className={\`font-mono text-[10px] font-bold px-2.5 py-1 uppercase transition-all \${
              selectedBrand === 'DRAGON PHARMA' ? 'bg-[#ff4757] text-white shadow-[2px_2px_0px_#550000]' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-[#ff4757]'
            }\`}
          >
            DRAGON PHARMA
          </button>
        </div>`;

const replacement = `{/* Brand Filter Tabs */}
      <div className="flex flex-wrap items-center justify-start gap-2 pb-2">
          <span className="text-[10px] text-[#888] font-bold uppercase mr-1 tracking-widest">NUESTRAS MARCAS:</span>
          <button
            onClick={() => setSelectedBrand('all')}
            className={\`font-mono text-[10px] font-bold px-2.5 py-1 uppercase transition-all \${
              selectedBrand === 'all' ? 'bg-white text-black' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-white'
            }\`}
          >
            TODAS
          </button>
          <button
            onClick={() => setSelectedBrand('MYPROTEIN')}
            className={\`font-mono text-[10px] font-bold px-2.5 py-1 uppercase transition-all \${
              selectedBrand === 'MYPROTEIN' ? 'bg-[#007eb3] text-white shadow-[2px_2px_0px_#00293d]' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-[#007eb3]'
            }\`}
          >
            MYPROTEIN
          </button>
          <button
            onClick={() => setSelectedBrand('DRAGON PHARMA')}
            className={\`font-mono text-[10px] font-bold px-2.5 py-1 uppercase transition-all \${
              selectedBrand === 'DRAGON PHARMA' ? 'bg-[#ff4757] text-white shadow-[2px_2px_0px_#550000]' : 'bg-[#1a1a1a] text-[#888] hover:bg-[#333] hover:text-[#ff4757]'
            }\`}
          >
            DRAGON PHARMA
          </button>
      </div>

      {/* Neo-Brutalist Hero Header Block */}
      <div className="bg-[#121212] border-2 border-black p-4 md:p-5 neo-shadow-lime relative overflow-hidden">
        <div className="absolute -right-8 -top-8 bg-[#c3f400] text-black font-bold text-[10px] px-10 py-0.5 rotate-12 border-2 border-black uppercase tracking-widest hidden sm:block">
          CLINICAL GRADE // 2026
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#c3f400] text-black font-bold text-[10px] uppercase border border-black shadow-[2px_2px_0px_#ffffff]">
              <Zap className="w-3 h-3 fill-black" />
              <span>OFFICIAL DISPENSARY</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-white uppercase tracking-tight leading-none">
              SUPLEMENTACIÓN <span className="bg-[#ff4757] text-white px-2 py-0.5 inline-block border-2 border-black rotate-[-1deg]">NO LIMITS</span>
            </h1>
          </div>
        </div>
      </div>`;

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('src/components/ProductCatalog.tsx', code);
  console.log('File patched successfully.');
} else {
  console.error('Target block not found!');
}
