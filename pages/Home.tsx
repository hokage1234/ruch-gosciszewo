import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Handshake, ChevronRight } from 'lucide-react';
import ExternalLink from '../components/ExternalLink';
import { LINKS, IMAGES, SPONSORS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* ========================================== */}
      {/* HERO SECTION - Dynamic & Sharp */}
      {/* ========================================== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
        
        {/* Background Image with stronger overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ 
            backgroundImage: `url('${IMAGES.HERO_BACKGROUND}')`,
            backgroundPosition: 'center 30%'
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

        {/* Diagonal Decor Element */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/20 -skew-x-12 hidden lg:block border-l border-white/10"></div>

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary text-white font-bold px-3 py-1 mb-6 text-sm uppercase tracking-widest">
              Sezon 2024/2025
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-6 uppercase leading-none italic tracking-tighter">
              Ruch <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">Gościszewo</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-light leading-relaxed border-l-4 border-primary pl-6">
              Biało-Niebiesko-Czarni. Lokalna duma, sportowa pasja i walka do ostatniej minuty. 
              Wspieraj swój klub!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/terminarz-i-tabela" 
                className="bg-primary hover:bg-white hover:text-black text-white font-display font-bold uppercase text-lg px-10 py-4 transition-all duration-300 skew-x-[-10deg] inline-flex items-center justify-center group"
              >
                <span className="skew-x-[10deg] flex items-center gap-2">Terminarz <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/></span>
              </Link>
              <Link 
                to="/formularze" 
                className="border-2 border-white text-white hover:bg-white hover:text-black font-display font-bold uppercase text-lg px-10 py-4 transition-all duration-300 skew-x-[-10deg] inline-flex items-center justify-center group"
              >
                <span className="skew-x-[10deg]">Dołącz do nas</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Diagonal Cut at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-50 dark:bg-dark" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* ========================================== */}
      {/* SHORTCUTS - Boxy Grid */}
      {/* ========================================== */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-gray-200 dark:border-gray-800 pb-4">
          <div>
            <h2 className="text-4xl font-display font-bold text-black dark:text-white uppercase tracking-tight">Strefa Klubu</h2>
            <p className="text-gray-500 mt-2 font-medium">Szybki dostęp do najważniejszych informacji</p>
          </div>
          <Link to="/formularze" className="hidden md:flex items-center gap-2 text-primary font-bold uppercase hover:underline mt-4 md:mt-0">
            Wszystkie formularze <ArrowRight size={18} />
          </Link>
        </div>
        
        {/* Zmieniono grid na 3 kolumny dla lepszego wyglądu po usunięciu 4. elementu */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: 'Nabór do Seniorów / Testy', link: LINKS.FORMS.RECRUITMENT, icon: '⚽' },
            { label: 'Nabór do Akademii', link: LINKS.FORMS.ACADEMY, icon: '🎓' },
            { label: 'Zostań sponsorem', link: LINKS.FORMS.SPONSOR, icon: '🤝' },
          ].map((item, idx) => (
             <ExternalLink 
                key={idx}
                href={item.link} 
                className="group bg-white dark:bg-dark-surface p-8 border-l-4 border-gray-200 dark:border-gray-700 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-48"
             >
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-xl uppercase leading-none mb-2 text-gray-800 dark:text-gray-100">{item.label}</h3>
                  <span className="text-xs text-primary font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Wypełnij <ArrowRight size={12}/>
                  </span>
                </div>
             </ExternalLink>
          ))}
        </div>
      </section>

      {/* ========================================== */}
      {/* SPONSORS - Minimalist & Grayscale */}
      {/* ========================================== */}
      <section className="bg-black text-white py-20 skew-y-1 relative mt-12">
        <div className="absolute inset-0 bg-primary/5 -skew-y-1"></div> {/* Background Fix */}
        
         <div className="container mx-auto px-4 -skew-y-1">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-display font-bold uppercase mb-4 tracking-wider">Partnerzy Ruchu</h2>
               <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-gray-800 border border-gray-800">
               {SPONSORS.map((sponsor, index) => {
                 const CardContent = () => (
                   <div className="bg-black hover:bg-gray-900 h-44 flex flex-col items-center justify-center p-6 transition-colors duration-300 group">
                     <div className="h-20 flex items-center justify-center w-full mb-4">
                       <img 
                         src={sponsor.logo} 
                         alt={sponsor.name} 
                         className="max-h-full max-w-full object-contain filter grayscale brightness-200 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                       />
                     </div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center group-hover:text-primary transition-colors">
                        {sponsor.name}
                     </span>
                   </div>
                 );

                 return sponsor.website ? (
                   <ExternalLink key={index} href={sponsor.website} className="block w-full h-full">
                     <CardContent />
                   </ExternalLink>
                 ) : (
                   <div key={index} className="block w-full h-full">
                     <CardContent />
                   </div>
                 );
               })}
            </div>

            <div className="mt-16 text-center">
              <Link 
                to="/formularze" 
                className="inline-block border border-gray-700 hover:border-white text-gray-400 hover:text-white px-8 py-3 uppercase font-display font-bold tracking-widest transition-all"
              >
                Dołącz do grona sponsorów
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;