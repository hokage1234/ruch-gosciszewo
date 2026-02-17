import React from 'react';
import { ExternalLink as ExternalLinkIcon, AlertCircle } from 'lucide-react';
import ExternalLink from '../components/ExternalLink';
import { LINKS } from '../constants';

/**
 * =================================================================================
 * INSTRUKCJA EDYCJI STRONY TERMINARZA
 * =================================================================================
 * Strona ta wyświetla inną stronę internetową (Pomorski Futbol) wewnątrz ramki (iframe).
 *
 * 1. ZMIANA ŹRÓDŁA DANYCH:
 *    - Aby zmienić ligę lub drużynę, podmień link `POMORSKI_FUTBOL` w pliku `constants.ts`.
 *
 * 2. PROBLEM Z WIDOCZNOŚCIĄ (CORS/BLOKADA):
 *    - Jeśli tabela się nie ładuje, upewnij się, że strona źródłowa pozwala na osadzanie (embedding).
 *    - Jeśli nie pozwala, użytkownik musi skorzystać z przycisku "Otwórz w nowym oknie".
 *
 * 3. WYSOKOŚĆ TABELI:
 *    - Parametr `minHeight: '1200px'` w stylu iframe określa, jak długa jest ramka.
 *    - Zwiększ tę wartość, jeśli tabela jest ucięta na dole.
 * =================================================================================
 */

const Schedule: React.FC = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 py-8">
      {/* Nagłówek sekcji */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-display font-bold text-slate-800 dark:text-slate-100">Terminarz i Tabela</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Dane ładowane z serwisu Pomorski Futbol</p>
      </div>

      {/* Kontener głównej zawartości */}
      <div className="w-full mx-auto space-y-8">
        
        {/* Fallback - Link bezpośredni */}
        <div className="max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-primary mt-1 flex-shrink-0" />
            <div className="text-sm text-blue-900 dark:text-blue-200">
              <p className="font-bold">Tabela jest za szeroka?</p>
              <p>Jeśli widok na telefonie jest nieczytelny, otwórz pełną wersję strony źródłowej.</p>
            </div>
          </div>
          <ExternalLink 
            href={LINKS.POMORSKI_FUTBOL}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap shadow-sm"
          >
            Otwórz w nowym oknie <ExternalLinkIcon size={16} className="ml-2" />
          </ExternalLink>
        </div>

        {/* Iframe z Tabelą */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700 w-full">
          {/* Iframe musi pozostać na białym tle, ponieważ strona źródłowa ma białe tło */}
          <div className="w-full relative bg-white">
             <iframe 
               src={LINKS.POMORSKI_FUTBOL} 
               className="w-full border-0 block"
               style={{ minHeight: '1200px' }}
               title="Tabela Pomorski Futbol"
               loading="lazy"
               sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
             />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Schedule;