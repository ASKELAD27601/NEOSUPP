import React, { useState } from 'react';
import { usePWAInstall } from './usePWAInstall';
import { Download, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already running as an installed PWA, hide the button
  if (isInstalled) {
    return null;
  }

  // Chromium / Android / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center justify-center gap-2 bg-[#c3f400] text-black border-2 border-black px-4 py-2 text-xs font-bold font-mono uppercase shadow-[4px_4px_0px_#ffffff] hover:bg-white hover:-translate-y-1 transition-all"
      >
        <Download className="w-4 h-4" />
        INSTALAR APP
      </button>
    );
  }

  // iOS Safari flow (beforeinstallprompt is not supported by WebKit)
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center justify-center gap-2 bg-[#c3f400] text-black border-2 border-black px-4 py-2 text-xs font-bold font-mono uppercase shadow-[4px_4px_0px_#ffffff] hover:bg-white hover:-translate-y-1 transition-all"
        >
          <Download className="w-4 h-4" />
          INSTALAR APP (IOS)
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 font-mono">
            <div className="w-full max-w-sm border-2 border-black bg-[#121212] p-6 shadow-[8px_8px_0px_#c3f400] relative text-white text-sm">
              <button 
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-2 right-2 p-1 bg-black border border-[#333] hover:text-[#c3f400]"
              >
                <X className="w-4 h-4" />
              </button>
              <h3 className="text-lg font-bold uppercase mb-4 text-[#c3f400] flex items-center gap-2">
                <Download className="w-5 h-5" /> 
                INSTALAR EN IOS
              </h3>
              <p className="mb-4 text-[#888]">
                Para instalar la App de <span className="text-white font-bold">NEOSUPP</span> en tu iPhone o iPad:
              </p>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-white font-bold">
                <li>Toca el botón <strong>Compartir</strong> <span className="inline-flex justify-center items-center w-6 h-6 border border-[#333] rounded mx-1">⎋</span> en la barra de Safari.</li>
                <li>Desplázate y selecciona <strong>"Agregar a Inicio"</strong> <span className="inline-flex justify-center items-center w-6 h-6 border border-[#333] rounded mx-1">+</span>.</li>
              </ol>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full bg-white text-black border-2 border-black font-bold uppercase py-2 hover:bg-[#c3f400] transition-colors"
              >
                ENTENDIDO
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
