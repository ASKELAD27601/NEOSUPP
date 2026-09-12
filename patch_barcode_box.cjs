const fs = require('fs');
let code = fs.readFileSync('src/components/ProductDetailView.tsx', 'utf8');

const target = `          {/* Sub-Bento Secondary Cards */}
          <div className="grid grid-cols-1 gap-4">
            {/* Raw Barcode Spec Box */}
            <div className="bg-[#111111] border-2 border-[#333] p-4 flex flex-col justify-between shadow-[3px_3px_0px_#000]">
              <div className="flex justify-between items-center text-[10px] text-[#888]">
                <span>ART NO.</span>
                <span className="text-[#c3f400] font-bold">#NEO-{product.id.slice(0, 4).toUpperCase()}</span>
              </div>
              <div className="py-3">
                <div className="h-9 w-full barcode-lime opacity-80"></div>
                <p className="text-xs text-white text-center mt-1.5 font-bold tracking-wider">
                  {currentNetWt}
                </p>
              </div>
              <div className="flex justify-between text-[10px] border-t border-[#2a2a2a] pt-2">
                <span className="text-[#888]">DISOLUCIÓN:</span>
                <span className="text-[#c3f400] font-bold">INSTANTÁNEA</span>
              </div>
            </div>
          </div>`;

const replacement = `          {/* Sub-Bento Secondary Cards */}
          <div className="grid grid-cols-1 gap-4">
            {/* Raw Barcode Spec Box */}
            <div className="bg-[#111111] border border-[#333] p-2 flex flex-col justify-between shadow-[2px_2px_0px_#000]">
              <div className="flex justify-between items-center text-[10px] text-[#888]">
                <span>ART NO.</span>
                <span className="text-[#c3f400] font-bold">#NEO-{product.id.slice(0, 4).toUpperCase()}</span>
              </div>
              <div className="py-1.5">
                <div className="h-5 w-full barcode-lime opacity-80"></div>
                <p className="text-[10px] text-white text-center mt-1 font-bold tracking-wider">
                  {currentNetWt}
                </p>
              </div>
              <div className="flex justify-between text-[10px] border-t border-[#2a2a2a] pt-1">
                <span className="text-[#888]">DISOLUCIÓN:</span>
                <span className="text-[#c3f400] font-bold">INSTANTÁNEA</span>
              </div>
            </div>
          </div>`;

code = code.replace(target, replacement);

fs.writeFileSync('src/components/ProductDetailView.tsx', code);
console.log('Barcode box updated');
