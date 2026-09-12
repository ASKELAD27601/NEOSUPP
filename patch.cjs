const fs = require('fs');
let code = fs.readFileSync('src/components/ProductCatalog.tsx', 'utf8');

const target = `      {/* Neo-Brutalist Trust Banner */}
      <div className="bg-[#121212] border-3 border-black p-6 md:p-8 neo-shadow-lime flex flex-col md:flex-row items-center justify-between gap-6 relative">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#c3f400] text-black font-bold text-xs uppercase border border-black">
            <ShieldCheck className="w-4 h-4" />
            <span>CERTIFICACIÓN OFICIAL NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase">
            CERO FÓRMULAS SECRETAS. TRANSPARENCIA MOLECULAR 100%.
          </h2>
          <p className="text-xs text-[#a0a09a] leading-relaxed">
            Cada lote producido bajo la marca NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span> es auditado por laboratorios externos con cromatografía de gases para verificar pureza, concentración activa y ausencia total de agentes de dopaje.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <div className="bg-black p-3 border-2 border-[#333] text-center">
            <span className="text-[10px] text-[#888] block">COA PROTOCOL</span>
            <span className="text-[#c3f400] font-bold text-xs">ISO-9001 VERIFIED</span>
          </div>
          <button
            onClick={() => setSelectedCategory('all')}
            className="px-5 py-3 bg-[#c3f400] text-black font-mono font-bold text-xs uppercase border-2 border-black neo-btn-press shadow-[3px_3px_0px_#ffffff]"
          >
            DESCARGAR REPORTES (PDF)
          </button>
        </div>
      </div>`;

if (code.includes(target)) {
  code = code.replace(target, '');
  fs.writeFileSync('src/components/ProductCatalog.tsx', code);
  console.log('Successfully patched ProductCatalog.tsx');
} else {
  console.error('Target not found');
}
