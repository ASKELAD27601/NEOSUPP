import React from 'react';
import { Mail, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenTickets: () => void;
  onOpenAthletes: () => void;
  onOpenAbout: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenTickets,
  onOpenAthletes,
  onOpenAbout,
}) => {
  return (
    <footer className="bg-[#0c0c0c] border-t-3 border-black text-[#f4f4f0] font-mono mt-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3">
            <div className="inline-block bg-[#c3f400] text-black text-xs font-bold px-2 py-0.5 border border-black uppercase">
              // OFFICIAL DISPENSARY
            </div>
            <div className="flex flex-col mb-1">
              <span className="text-2xl sm:text-3xl font-mono font-bold text-white uppercase tracking-tight leading-none">NEOSUPP</span>
              <span className="text-[11px] text-[#c3f400] font-bold mt-1">BY NEO NUTRITION</span>
            </div>
            <div className="text-xs text-[#c3f400] font-bold uppercase">
               CLINICAL PERFORMANCE
            </div>
            <p className="text-xs text-[#a0a09a] leading-relaxed max-w-sm">
              Suplementos deportivos de grado clínico y pases de entrenamiento de alta intensidad. Formulado con materias primas de pureza 99.8% verificadas por laboratorio.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#888] pt-2">
              <span className="w-2 h-2 bg-[#c3f400] border border-black"></span>
              <span>NEOSUPP <span className="text-sm text-[#c3f400]">BY NEO NUTRITION</span> PROTOCOL // 2026</span>
            </div>
          </div>

          {/* Quick Links: Suplementos */}
          <div className="space-y-2.5 text-xs">
            <div className="text-white font-bold uppercase border-b-2 border-[#2b2b2b] pb-1.5">
              SUPLEMENTOS
            </div>
            <ul className="space-y-1.5 text-[#aaa]">
              <li>
                <button
                  onClick={() => onSelectCategory('creatine')}
                  className="hover:text-[#c3f400] transition-colors uppercase font-bold"
                >
                  &gt; Creatinas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('isolate')}
                  className="hover:text-[#c3f400] transition-colors uppercase font-bold"
                >
                  &gt; Proteínas Isoladas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('protein')}
                  className="hover:text-[#c3f400] transition-colors uppercase font-bold"
                >
                  &gt; Whey Protein
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('pre-workout')}
                  className="hover:text-[#c3f400] transition-colors uppercase font-bold"
                >
                  &gt; Pre-entrenos
                </button>
              </li>
            </ul>
          </div>

          {/* Lab & Quality */}
          <div className="space-y-2.5 text-xs">
            <div className="text-white font-bold uppercase border-b-2 border-[#2b2b2b] pb-1.5">
              LAB &amp; CALIDAD
            </div>
            <ul className="space-y-1.5 text-[#aaa]">
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#c3f400] transition-colors uppercase font-bold">
                  &gt; Manifiesto de Calidad
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#c3f400] transition-colors uppercase font-bold">
                  &gt; Certificación HPLC &amp; Pureza
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#c3f400] transition-colors uppercase font-bold">
                  &gt; Estándar WADA &amp; cGMP
                </button>
              </li>
              <li>
                <button onClick={onOpenAbout} className="hover:text-[#c3f400] transition-colors uppercase font-bold">
                  &gt; Control Microbiológico Lote a Lote
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-2.5 text-xs">
            <div className="text-white font-bold uppercase border-b-2 border-[#2b2b2b] pb-1.5">
              CLUB NEO VIP
            </div>
            <p className="text-[#888] text-[11px]">
              Recibe avisos de drops limitados y códigos de descuento exclusivos.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="TU CORREO ELECTRONICO"
                className="w-full bg-black border-2 border-black p-2 text-xs text-white uppercase focus:border-[#c3f400] focus:outline-none"
              />
              <button className="w-full py-2 bg-[#c3f400] text-black font-bold uppercase border-2 border-black neo-btn-press hover:bg-white transition-all shadow-[2px_2px_0px_#ffffff]">
                SUSCRIBIRSE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t-2 border-[#262626] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-[#777]">
          <div>
            © 2026 NEOSUPP <span className="text-sm text-[#c3f400]">BY NEO NUTRITION</span>. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#c3f400] cursor-pointer">TÉRMINOS</span>
            <span>•</span>
            <span className="hover:text-[#c3f400] cursor-pointer">PRIVACIDAD</span>
            <span>•</span>
            <span className="hover:text-[#c3f400] cursor-pointer">LAB SPECS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
