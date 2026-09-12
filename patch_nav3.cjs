const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const target = `          <div className="pl-2 space-y-1.5 border-l-2 border-[#c3f400]">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSelectProduct(p.id);
                  setActiveTab('shop');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5 px-2 text-xs font-mono text-[#dcdcd8] hover:text-[#c3f400] flex justify-between items-center"
              >
                <span>→ {p.name}</span>
                <span className="font-bold text-[#c3f400]">{p.currency}{p.price}</span>
              </button>
            ))}
          </div>`;

const replacement = `          <div className="pl-2 space-y-1.5 border-l-2 border-[#c3f400]">
            {[
              { id: 'combos', label: 'PROMOS Y COMBOS' },
              { id: 'creatinas', label: 'CREATINAS' },
              { id: 'proteinas', label: 'PROTEINAS ISOLADAS' },
              { id: 'preentreno', label: 'PREENTRENO Y ACCESORIOS' },
              { id: 'snacks', label: 'SNACKS' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-1.5 px-2 text-xs font-mono text-[#dcdcd8] hover:text-[#c3f400] flex justify-between items-center"
              >
                <span>→ {cat.label}</span>
              </button>
            ))}
          </div>`;

code = code.replace(target, replacement);

const targetCatalogo = `          <button
            onClick={() => {
              setActiveTab('shop');
              onSelectProduct(null);
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 bg-[#181818] border-2 border-[#333] text-white font-bold hover:border-[#c3f400] hover:bg-[#c3f400] hover:text-black shadow-[3px_3px_0px_#000] transition-all"
          >
            [01] CATÁLOGO COMPLETO
          </button>`;

const replacementCatalogo = `          <button
            onClick={() => {
              onSelectCategory('all');
              setMobileMenuOpen(false);
            }}
            className="w-full text-left py-2 px-3 bg-[#181818] border-2 border-[#333] text-white font-bold hover:border-[#c3f400] hover:bg-[#c3f400] hover:text-black shadow-[3px_3px_0px_#000] transition-all"
          >
            [01] CATÁLOGO COMPLETO
          </button>`;

code = code.replace(targetCatalogo, replacementCatalogo);

fs.writeFileSync('src/components/Navbar.tsx', code);
