const fs = require('fs');
let code = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const target = `          {/* Creatinas Puras */}
          <button
            onClick={() => {
              setActiveTab('shop');
              onSelectProduct('creatine-monohydrate');
            }}
            className={\`px-3 py-1.5 border-2 text-xs transition-all neo-btn-press \${
              selectedProductId === 'creatine-monohydrate'
                ? 'bg-white text-black border-black shadow-[3px_3px_0px_#c3f400] font-bold'
                : 'bg-[#141414] text-[#a0a09a] border-[#2c2c2c] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
            }\`}
          >
            CREATINA PURA
          </button>

          {/* Creatinas Saborizadas */}
          <button
            onClick={() => {
              setActiveTab('shop');
              onSelectProduct('creatine-flavored');
            }}
            className={\`px-3 py-1.5 border-2 text-xs transition-all neo-btn-press \${
              selectedProductId === 'creatine-flavored'
                ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff] font-bold'
                : 'bg-[#141414] text-[#c3f400] border-[#2c2c2c] hover:border-[#c3f400] hover:text-white shadow-[2px_2px_0px_#000]'
            }\`}
          >
            ★ SABORIZADA 45S
          </button>

          {/* Proteínas Isoladas */}
          <button
            onClick={() => {
              setActiveTab('shop');
              onSelectProduct('iso-phorm');
            }}
            className={\`px-3 py-1.5 border-2 text-xs transition-all neo-btn-press \${
              selectedProductId === 'iso-phorm'
                ? 'bg-white text-black border-black shadow-[3px_3px_0px_#c3f400] font-bold'
                : 'bg-[#141414] text-[#a0a09a] border-[#2c2c2c] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
            }\`}
          >
            ISOLADAS
          </button>

          {/* Whey */}
          <button
            onClick={() => {
              setActiveTab('shop');
              onSelectProduct('whey-phorm');
            }}
            className={\`px-3 py-1.5 border-2 text-xs transition-all neo-btn-press \${
              selectedProductId === 'whey-phorm'
                ? 'bg-white text-black border-black shadow-[3px_3px_0px_#c3f400] font-bold'
                : 'bg-[#141414] text-[#a0a09a] border-[#2c2c2c] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
            }\`}
          >
            WHEY
          </button>`;

const replacement = `          {/* Categories */}
          {[
            { id: 'combos', label: 'PROMOS Y COMBOS' },
            { id: 'creatinas', label: 'CREATINAS' },
            { id: 'proteinas', label: 'PROTEINAS ISOLADAS' },
            { id: 'preentreno', label: 'PREENTRENO Y ACCESORIOS' },
            { id: 'snacks', label: 'SNACKS' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
              }}
              className={\`px-3 py-1.5 border-2 text-[10px] transition-all neo-btn-press \${
                selectedCategory === cat.id && activeTab === 'shop' && !selectedProductId
                  ? 'bg-white text-black border-black shadow-[3px_3px_0px_#c3f400] font-bold'
                  : 'bg-[#141414] text-[#a0a09a] border-[#2c2c2c] hover:border-white hover:text-white shadow-[2px_2px_0px_#000]'
              }\`}
            >
              {cat.label}
            </button>
          ))}`;

code = code.replace(target, replacement);

const targetCatalogo = `          <button
            onClick={() => {
              setActiveTab('shop');
              onSelectProduct(null);
            }}
            className={\`px-3 py-1.5 border-2 transition-all neo-btn-press \${
              activeTab === 'shop' && !selectedProductId
                ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                : 'bg-[#181818] text-[#e0e0dc] border-[#333333] hover:border-[#c3f400] hover:text-white shadow-[2px_2px_0px_#000]'
            }\`}
          >
            [ CATÁLOGO ]
          </button>`;

const replacementCatalogo = `          <button
            onClick={() => {
              onSelectCategory('all');
            }}
            className={\`px-3 py-1.5 border-2 transition-all neo-btn-press \${
              selectedCategory === 'all' && activeTab === 'shop' && !selectedProductId
                ? 'bg-[#c3f400] text-black border-black shadow-[3px_3px_0px_#ffffff]'
                : 'bg-[#181818] text-[#e0e0dc] border-[#333333] hover:border-[#c3f400] hover:text-white shadow-[2px_2px_0px_#000]'
            }\`}
          >
            [ CATÁLOGO ]
          </button>`;

code = code.replace(targetCatalogo, replacementCatalogo);

fs.writeFileSync('src/components/Navbar.tsx', code);
