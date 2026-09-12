import React from 'react';
import { ShieldCheck, Zap, Award, Microscope, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onGoToShop: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onGoToShop }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 py-8 space-y-12 font-mono">
      {/* Manifesto Header Box */}
      <div className="bg-[#121212] border-3 border-black p-6 md:p-10 neo-shadow-lime space-y-4">
        <div className="inline-flex items-center gap-2 bg-[#c3f400] text-black font-bold text-xs px-3 py-1 uppercase border-2 border-black">
          <Zap className="w-3.5 h-3.5" />
          <span>NEOSUPP <span className="text-[9px]">BY NEO NUTRITION</span> MANIFIESTO // 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-mono font-bold text-white uppercase tracking-tight leading-none">
          RENDIMIENTO SIN COMPROMISOS // ZERO FILLERS
        </h1>

        <p className="text-xs sm:text-sm text-[#d4d4cc] max-w-3xl leading-relaxed">
          <strong className="text-white">NEOSUPP <span className="text-sm text-[#c3f400]">BY NEO NUTRITION</span></strong> nació con una premisa estricta: formular suplementación deportiva pura, verificada en laboratorio por HPLC, con dosificaciones clínicas transparentes y sin trucos comerciales.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#141414] border-3 border-black p-6 space-y-3 neo-shadow-black hover:neo-shadow-lime transition-all">
          <Microscope className="w-10 h-10 text-[#c3f400]" />
          <h2 className="text-xl font-mono font-bold text-white uppercase">
            100% MICRONIZADO HPLC
          </h2>
          <p className="text-xs text-[#b0b0a8] leading-relaxed">
            Reducción microscópica a malla 200 para absorción celular directa, biodisponibilidad máxima y solubilidad sin residuos en tu shaker.
          </p>
        </div>

        <div className="bg-[#141414] border-3 border-black p-6 space-y-3 neo-shadow-black hover:neo-shadow-lime transition-all">
          <Award className="w-10 h-10 text-[#ff4757]" />
          <h2 className="text-xl font-mono font-bold text-white uppercase">
            TRANSPARENCIA TOTAL
          </h2>
          <p className="text-xs text-[#b0b0a8] leading-relaxed">
            Cada miligramo está explicitado en la etiqueta. Cero mezclas propietarias ocultas, cero rellenos y cero sustancias dopantes prohibidas por la WADA.
          </p>
        </div>

        <div className="bg-[#141414] border-3 border-black p-6 space-y-3 neo-shadow-black hover:neo-shadow-lime transition-all">
          <ShieldCheck className="w-10 h-10 text-[#00f0ff]" />
          <h2 className="text-xl font-mono font-bold text-white uppercase">
            ESTÁNDAR cGMP &amp; LAB
          </h2>
          <p className="text-xs text-[#b0b0a8] leading-relaxed">
            Elaborado en instalaciones certificadas bajo directrices cGMP con auditorías microbiológicas lote a lote antes de ser envasado.
          </p>
        </div>
      </div>

      {/* Factory and Lab Specs Table */}
      <div className="bg-[#121212] border-3 border-black p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center neo-shadow-white">
        <div className="space-y-4">
          <span className="text-xs text-[#c3f400] uppercase font-bold tracking-widest block">
            [ ESTÁNDAR QUÍMICO CERTIFICADO ]
          </span>
          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white uppercase leading-tight">
            DE LA CIENCIA MOLECULAR A TU MÁXIMO RÉCORD
          </h2>
          <p className="text-xs sm:text-sm text-[#b8b8b0] leading-relaxed">
            Nuestros bioquímicos deportivos seleccionan exclusivamente materias primas con grado de pureza superior al 99.8%. No fabricamos suplementos para consumo masivo; fabricamos herramientas de rendimiento para atletas.
          </p>

          <button
            onClick={onGoToShop}
            className="inline-flex items-center gap-2 bg-[#c3f400] text-black font-mono font-bold text-sm px-6 py-3 uppercase border-2 border-black neo-shadow-black hover:bg-white transition-all neo-btn-press"
          >
            <span>VER CATÁLOGO OFICIAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="border-2 border-black p-4 bg-black space-y-2.5 text-xs shadow-[3px_3px_0px_#ffffff]">
          <div className="flex justify-between border-b border-[#333] pb-2 text-[#888] font-bold">
            <span>PARÁMETRO ANALÍTICO</span>
            <span>ESTÁNDAR NEO LABS</span>
          </div>
          <div className="flex justify-between text-white">
            <span>Pureza Creatina Monohidrato</span>
            <span className="text-[#c3f400] font-bold">99.98% HPLC Tested</span>
          </div>
          <div className="flex justify-between text-white">
            <span>Metales Pesados (Pb, Cd, As)</span>
            <span className="text-[#c3f400] font-bold">&lt; 0.01 PPM (Indetectable)</span>
          </div>
          <div className="flex justify-between text-white">
            <span>Disolución en Agua Fría</span>
            <span className="text-[#c3f400] font-bold">&lt; 4.2 Segundos</span>
          </div>
          <div className="flex justify-between text-white">
            <span>Certificación Libre de Dopaje</span>
            <span className="text-[#c3f400] font-bold">WADA / INFORMED-SPORT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
