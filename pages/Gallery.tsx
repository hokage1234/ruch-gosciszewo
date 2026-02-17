import React from 'react';
import { Image, ExternalLink as LinkIcon } from 'lucide-react';
import ExternalLink from '../components/ExternalLink';
import { LINKS } from '../constants';

/**
 * =================================================================================
 * INSTRUKCJA EDYCJI GALERII
 * =================================================================================
 * Galeria działa jako przekierowanie do zewnętrznego folderu (np. Google Drive).
 *
 * 1. ZMIANA LINKU DO FOLDERU:
 *    - Otwórz plik `constants.ts`.
 *    - Znajdź `LINKS.GOOGLE_DRIVE` i wklej tam link do swojego folderu ze zdjęciami.
 *
 * 2. ZMIANA WYGLĄDU PRZYCISKU:
 *    - Kolory gradientu: `from-blue-600 to-indigo-700`.
 *    - Ikona: <Image /> (import z lucide-react).
 * =================================================================================
 */

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-800 dark:text-slate-100 mb-4">Galeria Zdjęć</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Wszystkie zdjęcia z meczów, treningów i wydarzeń klubowych udostępniamy na naszym dysku Google.
        </p>
      </div>

      {/* Główny przycisk do Dysku Google (CTA) */}
      <div className="max-w-4xl mx-auto">
        <ExternalLink 
          href={LINKS.GOOGLE_DRIVE}
          className="w-full group relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-12 md:p-20 text-center hover:scale-[1.01] transition-transform duration-300 block border border-transparent dark:border-white/10"
        >
           <div className="relative z-10 flex flex-col items-center gap-8">
             <div className="bg-white/20 p-6 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                <Image size={64} />
             </div>
             <div>
               <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Otwórz Galerię Zdjęć</h2>
               <div className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-bold shadow-lg">
                 Przejdź do Google Drive <LinkIcon size={18} />
               </div>
             </div>
           </div>
           
           {/* Ozdobne koła w tle */}
           <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
           <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        </ExternalLink>
      </div>
    </div>
  );
};

export default Gallery;