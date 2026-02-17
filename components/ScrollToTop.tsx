import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Komponent pomocniczy, który automatycznie przewija okno przeglądarki
 * na samą górę (0, 0) przy każdej zmianie ścieżki (URL).
 * 
 * Jest to kluczowe dla Single Page Applications (SPA), gdzie domyślne zachowanie
 * przeglądarki pamięta pozycję scrolla przy zmianie "strony".
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Przewiń na górę natychmiastowo przy zmianie trasy
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;