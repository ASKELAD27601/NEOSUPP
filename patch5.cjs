const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');

const target = `{/* Neo-Brutalist Hero Header Block */}
      <div className="bg-[#121212] border-3 border-black p-6 md:p-8 neo-shadow-lime-lg relative overflow-hidden">
        <div className="absolute -right-8 -top-8 bg-[#c3f400] text-black font-bold text-xs px-12 py-1 rotate-12 border-2 border-black uppercase tracking-widest hidden sm:block">
          CLINICAL GRADE // 2026
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#c3f400] text-black font-bold text-xs uppercase border border-black shadow-[2px_2px_0px_#ffffff]">
              <Zap className="w-3.5 h-3.5 fill-black" />
              <span>OFFICIAL DISPENSARY</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white uppercase tracking-tight leading-none">
              SUPLEMENTACIÓN <span className="bg-[#ff4757] text-white px-2 py-0.5 inline-block border-2 border-black rotate-[-1deg]">NO LIMITS</span>
            </h1>
          </div>
        </div>
      </div>`;

const replacement = `{/* Neo-Brutalist Hero Header Block */}
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
