import React from 'react';
import { Users, Phone, Mail } from 'lucide-react';
import { TEAM_INFO } from '../constants';

const TeamCard: React.FC<{ title: string, subtitle: string, info: typeof TEAM_INFO.SENIORS }> = ({ title, subtitle, info }) => (
  <div className="bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-colors shadow-lg">
    {/* Header with Color Bar */}
    <div className="relative p-6 md:p-8 bg-gray-50 dark:bg-black/40 border-b border-gray-100 dark:border-gray-800">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
      <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white uppercase italic">{title}</h2>
      <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">{subtitle}</p>
    </div>
    
    <div className="p-6 md:p-8">
      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light text-lg">
        {info.description}
      </p>
      
      {/* Staff Section */}
      <div className="bg-black text-white p-6 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Users size={64} />
        </div>
        
        <h3 className="font-display font-bold uppercase text-lg mb-6 border-b border-gray-800 pb-2 text-primary">Sztab Szkoleniowy</h3>
        
        <div className="space-y-4 relative z-10">
          <div>
             <div className="font-display text-2xl uppercase tracking-wide">{info.coach}</div>
             <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Główny Trener</div>
          </div>
          
          <div className="flex flex-col gap-2 pt-2">
            <a href={`tel:${info.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
              <Phone size={16} className="text-primary" /> {info.phone}
            </a>
            <a href={`mailto:${info.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
              <Mail size={16} className="text-primary" /> {info.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-16 border-l-8 border-primary pl-6">
        <h1 className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white uppercase">Nasze Drużyny</h1>
        <p className="text-gray-500 text-xl mt-2 font-light">
          Seniorzy i Akademia. Przyszłość i teraźniejszość Ruchu Gościszewo.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <TeamCard 
          title="Seniorzy" 
          subtitle="Liga Okręgowa / A-Klasa" 
          info={TEAM_INFO.SENIORS} 
        />
        <TeamCard 
          title="Juniorzy" 
          subtitle="Akademia Piłkarska" 
          info={TEAM_INFO.JUNIORS} 
        />
      </div>
    </div>
  );
};

export default Team;