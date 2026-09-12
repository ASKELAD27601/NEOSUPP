import React, { useState, useEffect } from 'react';
import { Product, ClassTicket } from '../types';
import { Search, Ticket, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  tickets: ClassTicket[];
  onSelectProduct: (id: string) => void;
  onSelectTicket: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  tickets,
  onSelectProduct,
  onSelectTicket,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.flavors?.some((f) => f.toLowerCase().includes(query.toLowerCase())) ||
      p.benefits.some((b) => b.title.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredTickets = tickets.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.features.some((f) => f.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-start justify-center pt-20 p-4 font-mono">
      <div className="bg-[#111111] border-3 border-black text-[#f4f4f0] w-full max-w-2xl neo-shadow-lime-lg overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-4 border-b-3 border-black bg-[#181818] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#c3f400]" />
          <input
            type="text"
            autoFocus
            placeholder="BUSCAR SUPLEMENTOS, SABORES, INGREDIENTES..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white font-mono text-sm uppercase placeholder-[#777] font-bold focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-xs bg-black text-[#c3f400] px-2 py-1 border border-[#333] font-bold hover:bg-[#c3f400] hover:text-black transition-colors"
          >
            [ESC]
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          <div>
            <span className="text-[10px] text-[#888] uppercase tracking-widest block mb-2 font-bold">
              PRODUCTOS DISPONIBLES ({filteredProducts.length})
            </span>

            {filteredProducts.length === 0 && filteredTickets.length === 0 ? (
              <p className="text-xs text-[#888] py-4 text-center font-bold">
                No se encontraron resultados para "{query}"
              </p>
            ) : (
              <div className="space-y-2">
                {filteredProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod.id);
                      onClose();
                    }}
                    className="w-full text-left p-3 bg-[#181818] border-2 border-black hover:border-[#c3f400] transition-colors flex items-center justify-between group shadow-[2px_2px_0px_#000]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="w-10 h-10 object-contain bg-black p-1 border border-[#333]"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white group-hover:text-[#c3f400]">
                            {prod.name}
                          </span>
                          <span className="text-[10px] bg-black px-1.5 py-0.5 text-[#888] border border-[#333]">
                            {prod.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#888]">
                          {prod.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-base font-bold text-white">
                        ${prod.price.toFixed(2)}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Tickets Results */}
          {filteredTickets.length > 0 && (
            <div className="border-t-2 border-black pt-3">
              <span className="text-[10px] text-[#00f0ff] uppercase tracking-widest block mb-2 font-bold">
                PASES DE CLASES SDC ({filteredTickets.length})
              </span>
              <div className="space-y-2">
                {filteredTickets.map((tkt) => (
                  <button
                    key={tkt.id}
                    onClick={() => {
                      onSelectTicket();
                      onClose();
                    }}
                    className="w-full text-left p-3 bg-[#181818] border-2 border-black hover:border-[#00f0ff] transition-colors flex items-center justify-between group shadow-[2px_2px_0px_#000]"
                  >
                    <div className="flex items-center gap-2">
                      <Ticket className="w-5 h-5 text-[#00f0ff]" />
                      <div>
                        <span className="text-sm font-bold text-white group-hover:text-[#00f0ff]">
                          {tkt.title} ({tkt.classesCount} CLASES)
                        </span>
                        <p className="text-xs text-[#888]">
                          Acceso instantáneo con QR Digital
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-[#c3f400]">
                        {tkt.price} {tkt.currency}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#888] group-hover:text-white" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
