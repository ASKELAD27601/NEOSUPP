import React from 'react';
import { ATHLETES } from '../data/products';
import { Product } from '../types';
import { Trophy, Zap } from 'lucide-react';

interface AthletesSectionProps {
  products: Product[];
  onSelectProductByName: (name: string) => void;
}

export const AthletesSection: React.FC<AthletesSectionProps> = ({
  products,
  onSelectProductByName,
}) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 space-y-10 font-mono">
      {/* Header */}
      <div className="bg-[#121212] border-3 border-black p-6 md:p-8 neo-shadow-lime space-y-3">
        <div className="inline-flex items-center gap-2 bg-[#00f0ff] text-black font-bold text-xs px-3 py-1 uppercase border border-black">
          <Trophy className="w-4 h-4" />
          <span>NEO ELITE TEAM // 2026 ROSTER</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-mono font-bold text-white uppercase tracking-tight">
          NEO ATHLETES ROSTER
        </h1>
        <p className="text-xs sm:text-sm text-[#d4d4cc] max-w-2xl leading-relaxed">
          Atletas de élite, campeones de calistenia, fisicoculturismo y danza urbana que confían su preparación biológica en <strong className="text-white">NEOSUPP <span className="text-sm text-[#c3f400]">BY NEO NUTRITION</span></strong>.
        </p>
      </div>

      {/* Athletes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ATHLETES.map((athlete, idx) => (
          <div
            key={athlete.id}
            className="bg-[#141414] border-3 border-black flex flex-col justify-between overflow-hidden neo-shadow-black hover:neo-shadow-lime transition-all duration-150 group"
          >
            {/* Athlete Photo */}
            <div className="relative aspect-[4/5] overflow-hidden bg-black border-b-3 border-black">
              <img
                src={athlete.image}
                alt={athlete.name}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

              {/* Weight class badge */}
              <div className="absolute top-3 left-3 bg-[#c3f400] text-black text-[10px] font-bold px-2.5 py-1 uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
                {athlete.weightClass}
              </div>

              <div className="absolute top-3 right-3 bg-black text-[#00f0ff] text-[10px] font-bold px-2 py-0.5 border border-[#333]">
                ATHLETE #{String(idx + 1).padStart(2, '0')}
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs text-[#c3f400] uppercase font-bold block">
                  {athlete.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase">
                  {athlete.name}
                </h3>
              </div>
            </div>

            {/* Quote & Stack */}
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between bg-[#141414]">
              <p className="text-xs text-[#dcdcd4] italic border-l-3 border-[#ff4757] pl-3 py-1 font-bold">
                "{athlete.quote}"
              </p>

              <div className="space-y-2 pt-3 border-t-2 border-[#262626]">
                <span className="text-[10px] text-[#888] uppercase font-bold block">
                  STACK DE SUPLEMENTOS PREFERIDO //
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {athlete.stack.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => onSelectProductByName(item)}
                      className="text-[11px] px-2.5 py-1 bg-black border-2 border-[#333] text-white hover:border-[#c3f400] hover:text-[#c3f400] transition-all neo-btn-press uppercase flex items-center gap-1 font-bold shadow-[2px_2px_0px_#000]"
                    >
                      <Zap className="w-3 h-3 text-[#c3f400]" />
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
