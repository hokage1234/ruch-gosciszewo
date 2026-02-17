import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Facebook, MapPin, Mail, Moon, Sun } from 'lucide-react';
import { NAV_ITEMS, LINKS } from '../constants';
import ExternalLink from './ExternalLink';
import BackToTopButton from './BackToTopButton';

const LogoImage: React.FC<{ className?: string }> = ({ className }) => {
  const [error, setError] = useState(false);
  if (error) {
    return <span className="font-display font-bold text-3xl text-primary tracking-tighter uppercase whitespace-nowrap italic">RUCH <span className="text-black dark:text-white">GOŚCISZEWO</span></span>;
  }
  return (
    <img 
      src="/logo.png" 
      alt="Ruch Gościszewo Logo" 
      className={className} 
      onError={() => setError(true)} 
    />
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark transition-colors duration-300 font-sans">
      
      {/* ========================================== */}
      {/* HEADER - Sharp & Solid */}
      {/* ========================================== */}
      <header className="sticky top-0 z-50 bg-white dark:bg-dark-surface shadow-sm border-b-2 border-primary transition-colors duration-300">
        {/* Top Bar (Black) */}
        <div className="bg-black text-white text-xs py-1 px-4 hidden md:block tracking-widest uppercase font-bold">
           <div className="container mx-auto flex justify-between">
              <span>Oficjalny Serwis Klubu Sportowego</span>
              <span>Biało-Niebiesko-Czarni</span>
           </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20 md:h-24"> 
            
            <NavLink to="/" className="flex items-center group" onClick={closeMenu}>
              <LogoImage className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform duration-200" />
            </NavLink>

            {/* Desktop Nav - Uppercase & Bold Oswald */}
            <nav className="hidden lg:flex gap-8 items-center">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-display text-lg font-medium uppercase tracking-wide transition-all duration-200 relative group py-2 ${
                      isActive
                        ? 'text-primary'
                        : 'text-gray-800 dark:text-gray-300 hover:text-primary'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
              
              <div className="flex items-center gap-3 border-l-2 border-gray-200 dark:border-gray-700 pl-6 ml-2">
                <button 
                  onClick={toggleTheme}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <ExternalLink 
                  href={LINKS.FACEBOOK} 
                  className="bg-blue-700 text-white p-2 hover:bg-black transition-colors"
                >
                  <Facebook size={20} />
                </ExternalLink>
              </div>
            </nav>

            <div className="lg:hidden flex items-center gap-4">
               <button onClick={toggleTheme} className="text-gray-700 dark:text-gray-200">
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
               </button>
              <button 
                className="text-black dark:text-white focus:outline-none"
                onClick={toggleMenu}
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay vibe */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-white dark:bg-dark-surface border-t border-gray-100 dark:border-gray-800 absolute w-full left-0 shadow-2xl py-8 flex flex-col items-center gap-6 z-50">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-display text-2xl uppercase tracking-wider ${
                    isActive ? 'text-primary font-bold' : 'text-gray-800 dark:text-gray-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-grow bg-gray-50 dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
        {children}
      </main>

      <BackToTopButton />

      {/* ========================================== */}
      {/* FOOTER - Pure Black & Sharp */}
      {/* ========================================== */}
      <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-primary">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
          
          <div className="space-y-6">
            <div className="brightness-0 invert">
               <LogoImage className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Oficjalny serwis Klubu Sportowego Ruch Gościszewo. 
              Pasja, walka i przywiązanie do barw klubowych.
            </p>
          </div>

          <div>
            <h4 className="font-display text-2xl uppercase mb-6 text-white border-l-4 border-primary pl-3">Na skróty</h4>
            <ul className="space-y-3 text-gray-400 font-medium">
              <li><NavLink to="/druzyna" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Drużyna</NavLink></li>
              <li><NavLink to="/terminarz-i-tabela" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Tabela</NavLink></li>
              <li><NavLink to="/galeria" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Galeria</NavLink></li>
              <li><NavLink to="/polityka-prywatnosci" className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-primary"></span> Polityka Prywatności</NavLink></li>
            </ul>
          </div>

          <div>
             <h4 className="font-display text-2xl uppercase mb-6 text-white border-l-4 border-primary pl-3">Kontakt</h4>
             <div className="space-y-4 text-gray-400">
               <div className="flex items-start gap-4">
                 <MapPin className="text-primary mt-1" size={20} />
                 <span>Gościszewo (Stadion Leśny)<br/>82-400 Sztum</span>
               </div>
               <div className="flex items-center gap-4">
                 <Mail className="text-primary" size={20} />
                 <span>biuro@ruchgosciszewo.pl</span>
               </div>
               <div className="mt-6 pt-6 border-t border-gray-800">
                  <ExternalLink href={LINKS.FACEBOOK} className="text-white hover:text-blue-500 flex items-center gap-2 font-display uppercase tracking-wider">
                    <Facebook size={20} /> Facebook
                  </ExternalLink>
               </div>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-900 mt-12 pt-8 text-center text-xs text-gray-600 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} KP Ruch Gościszewo. Realizacja: Kibice
        </div>
      </footer>
    </div>
  );
};

export default Layout;