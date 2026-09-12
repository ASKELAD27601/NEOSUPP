import React, { useState } from 'react';
import { CLASS_TICKETS, GENERAL_RULES } from '../data/products';
import { ClassTicket } from '../types';
import { Ticket, CreditCard, DollarSign, CheckCircle2, ChevronDown, ChevronUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface ClassTicketsSectionProps {
  onAddTicketToCart: (ticket: ClassTicket) => void;
  onInstantBuyTicket: (ticket: ClassTicket) => void;
}

export const ClassTicketsSection: React.FC<ClassTicketsSectionProps> = ({
  onAddTicketToCart,
  onInstantBuyTicket,
}) => {
  const [expandedRule, setExpandedRule] = useState<string | null>('r3');
  const [selectedTicketId, setSelectedTicketId] = useState<string>('ticket-20');

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 space-y-12 font-mono">
      {/* Neo-Brutalist Header Banner */}
      <div className="bg-[#121212] border-3 border-black p-6 md:p-10 neo-shadow-lime-lg relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#ff4757] text-white font-bold text-xs px-3 py-1 uppercase border-2 border-black shadow-[2px_2px_0px_#000]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PASES OFICIALES DE ENTRENAMIENTO &amp; DANZA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-white uppercase tracking-tight leading-none">
              CLASS TICKETS <span className="text-[#c3f400]">[SDC]</span>
            </h1>

            <p className="text-xs sm:text-sm text-[#d4d4cc] leading-relaxed">
              Pases de acceso oficial a clases maestras de fuerza, calistenia, movilidad y baile urbano en SDC Studio en colaboración con NEOSUPP <span className="text-[10px] text-[#c3f400]">BY NEO NUTRITION</span>. Acceso con QR digital inmediato en tu dispositivo.
            </p>
          </div>

          {/* QR Instant Pass Indicator */}
          <div className="bg-black border-2 border-[#c3f400] p-4 flex items-center gap-4 shadow-[4px_4px_0px_#ffffff]">
            <Ticket className="w-8 h-8 text-[#c3f400] shrink-0" />
            <div>
              <span className="text-[10px] text-[#888] block uppercase font-bold">EMISIÓN INMEDIATA</span>
              <span className="text-sm font-bold text-white uppercase">QR DIGITAL PASS AL CHECKOUT</span>
            </div>
          </div>
        </div>
      </div>

      {/* TICKET STUBS GRID */}
      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#2b2b2b] pb-3">
          <div className="text-xs text-[#c3f400] uppercase font-bold tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-[#c3f400]"></span>
            <span>ELIGE TU PACK DE SESIONES SDC</span>
          </div>
          <span className="text-xs text-[#888] font-bold">[INCLUYE LOCKER &amp; BEBIDA HIDRATANTE NEO]</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASS_TICKETS.map((ticket) => {
            const isPopular = ticket.isPopular;
            const isSelected = selectedTicketId === ticket.id;

            return (
              <div
                key={ticket.id}
                onClick={() => setSelectedTicketId(ticket.id)}
                className={`relative flex flex-col justify-between border-3 border-black ticket-edge transition-all cursor-pointer overflow-hidden ${
                  isPopular
                    ? 'bg-[#c3f400] text-black shadow-[6px_6px_0px_#ffffff] scale-[1.02]'
                    : isSelected
                    ? 'bg-[#181818] text-white shadow-[5px_5px_0px_#c3f400] border-[#c3f400]'
                    : 'bg-[#121212] text-white shadow-[4px_4px_0px_#000000] hover:shadow-[5px_5px_0px_#c3f400]'
                }`}
              >
                {/* Punch Notches */}
                <div className="absolute top-1/3 -left-3 w-5 h-5 bg-[#0c0c0c] border border-black rounded-full"></div>
                <div className="absolute top-1/3 -right-3 w-5 h-5 bg-[#0c0c0c] border border-black rounded-full"></div>

                {isPopular && (
                  <div className="bg-black text-[#c3f400] text-[10px] font-bold py-1 px-3 text-center uppercase tracking-widest border-b-2 border-black">
                    ★ PACK MÁS SOLICITADO
                  </div>
                )}

                {/* Top Section */}
                <div className="p-5 border-b-2 border-dashed border-black/30 space-y-3">
                  <div className="flex justify-between items-start text-xs font-bold uppercase">
                    <span className={isPopular ? 'text-black' : 'text-[#c3f400]'}>
                      SEASON PASS
                    </span>
                    <span className={isPopular ? 'text-black/70' : 'text-[#777]'}>
                      #SDC-{ticket.classesCount}
                    </span>
                  </div>

                  <div className="text-center py-2">
                    <div className={`text-4xl md:text-5xl font-mono font-bold uppercase ${isPopular ? 'text-black' : 'text-white'}`}>
                      {ticket.title}
                    </div>
                  </div>

                  {/* Barcode Stamp */}
                  <div className="pt-1">
                    <div className={`h-7 w-full ${isPopular ? 'barcode-dark opacity-60' : 'barcode-lime opacity-70'}`}></div>
                    <div className={`text-[9px] text-center mt-1 font-bold ${isPopular ? 'text-black/80' : 'text-[#888]'}`}>
                      VALID 2026 // SDC-TKT-0{ticket.classesCount}
                    </div>
                  </div>
                </div>

                {/* Features & Price */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2 text-xs">
                    {ticket.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPopular ? 'text-black stroke-[2.5]' : 'text-[#c3f400]'
                          }`}
                        />
                        <span className={`font-bold ${isPopular ? 'text-black' : 'text-[#dcdcd4]'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t-2 border-black/20">
                    <div className="flex justify-between items-baseline mb-3">
                      <span className={`text-[10px] uppercase font-bold ${isPopular ? 'text-black/70' : 'text-[#888]'}`}>
                        INVERSIÓN
                      </span>
                      <span className={`text-3xl font-mono font-bold ${isPopular ? 'text-black' : 'text-white'}`}>
                        {ticket.price.toLocaleString('es-ES')} {ticket.currency}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onInstantBuyTicket(ticket);
                        }}
                        className={`w-full py-2.5 font-mono font-bold text-xs uppercase border-2 border-black transition-all neo-btn-press flex items-center justify-center gap-1.5 ${
                          isPopular
                            ? 'bg-black text-white hover:bg-white hover:text-black shadow-[2px_2px_0px_#ffffff]'
                            : 'bg-[#c3f400] text-black hover:bg-white shadow-[2px_2px_0px_#ffffff]'
                        }`}
                      >
                        <span>COMPRAR PASE</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddTicketToCart(ticket);
                        }}
                        className={`w-full py-2 font-mono font-bold text-[11px] uppercase border-2 transition-colors ${
                          isPopular
                            ? 'border-black text-black hover:bg-black hover:text-white'
                            : 'border-[#333] text-[#aaa] hover:border-white hover:text-white'
                        }`}
                      >
                        + AÑADIR AL CARRO
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="bg-[#141414] border-3 border-black p-6 md:p-8 neo-shadow-white space-y-5">
        <div className="inline-block bg-[#c3f400] text-black px-3 py-1 text-xs font-bold uppercase border border-black">
          MÉTODOS DE PAGO DISPONIBLES //
        </div>

        <p className="text-sm font-bold text-white uppercase">
          ACEPTAMOS PAGO EN EFECTIVO DIRECTAMENTE EN RECEPCIÓN DEL ESTUDIO O MEDIANTE TARJETAS BANCARIAS EN EL CHECKOUT.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="bg-black border-2 border-[#333] p-4 flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-[#c3f400]" />
            <div>
              <div className="text-sm font-bold text-white">EFECTIVO EN ESTUDIO</div>
              <div className="text-[10px] text-[#888]">Pago presencial al ingresar</div>
            </div>
          </div>

          <div className="bg-black border-2 border-[#333] p-4 flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-[#c3f400]" />
            <div>
              <div className="text-sm font-bold text-white">TARJETAS CRÉDITO/DÉBITO</div>
              <div className="text-[10px] text-[#888]">Visa, Mastercard, AMEX</div>
            </div>
          </div>

          <div className="bg-black border-2 border-[#333] p-4 flex items-center gap-3">
            <Ticket className="w-6 h-6 text-[#c3f400]" />
            <div>
              <div className="text-sm font-bold text-white">PAGO DIGITAL ONLINE</div>
              <div className="text-[10px] text-[#888]">Checkout encriptado 256-bit</div>
            </div>
          </div>
        </div>
      </section>

      {/* GENERAL RULES */}
      <section className="space-y-4">
        <div className="inline-block bg-[#ff4757] text-white px-3 py-1 text-xs font-bold uppercase border-2 border-black">
          REGLAMENTO GENERAL SDC //
        </div>

        <div className="border-3 border-black divide-y-2 divide-black bg-[#121212] neo-shadow-lime">
          {GENERAL_RULES.map((rule, index) => {
            const isOpen = expandedRule === rule.id;
            return (
              <div key={rule.id}>
                <button
                  onClick={() => setExpandedRule(isOpen ? null : rule.id)}
                  className={`w-full p-4 text-left flex items-center justify-between transition-colors ${
                    isOpen ? 'bg-[#1e1e1e] text-[#c3f400]' : 'hover:bg-[#181818] text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="bg-black text-[#c3f400] text-xs font-bold px-2 py-0.5 border border-[#333]">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wide">
                      {rule.title}
                    </span>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#c3f400]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#888]" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 bg-black border-t border-[#2a2a2a] text-xs sm:text-sm text-[#d4d4cc] leading-relaxed space-y-2">
                    <p>{rule.content}</p>
                    {rule.highlight && (
                      <div className="p-3 bg-[#2a0e12] border-l-3 border-[#ff4757] text-xs text-[#ffcdd2] font-bold">
                        * IMPORTANTE: Cancelaciones con menos de 3 horas de antelación se contabilizan como sesión consumida.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
