import React from 'react';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { TEAM_INFO } from '../constants';

const ContactBox: React.FC<{ title: string, person?: string, phone?: string, email?: string }> = ({ title, person, phone, email }) => (
  <div className="bg-white dark:bg-dark-surface p-8 border border-gray-200 dark:border-gray-800 hover:border-primary transition-colors h-full flex flex-col justify-center">
    <h3 className="font-display font-bold text-xl uppercase text-black dark:text-white mb-6 flex items-center gap-2">
      <span className="w-2 h-2 bg-primary"></span> {title}
    </h3>
    <div className="space-y-4 text-sm font-medium">
      {person && <p className="text-lg font-bold text-gray-800 dark:text-gray-200">{person}</p>}
      {phone && (
        <a href={`tel:${phone}`} className="flex items-center gap-3 text-gray-500 hover:text-primary transition-colors">
          <Phone size={18} /> {phone}
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`} className="flex items-center gap-3 text-gray-500 hover:text-primary transition-colors">
          <Mail size={18} /> {email}
        </a>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 pb-8 border-b border-gray-200 dark:border-gray-800">
        <div>
           <h1 className="text-5xl font-display font-bold text-black dark:text-white uppercase tracking-tight">Kontakt</h1>
           <p className="text-gray-500 mt-2 font-light text-lg">Masz pytania? Jesteśmy do dyspozycji.</p>
        </div>
        <div className="hidden md:block">
           <span className="text-primary font-bold font-display uppercase tracking-widest">Ruch Gościszewo</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
         {/* Main Office - Dark Box */}
         <div className="lg:col-span-1 bg-black text-white p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-2xl uppercase mb-8 border-l-4 border-primary pl-4">Siedziba Klubu</h3>
              <div className="space-y-6 text-gray-300">
                <div className="flex gap-4">
                  <MapPin size={24} className="text-primary flex-shrink-0" />
                  <address className="not-italic leading-relaxed">
                    <strong className="text-white block mb-1">KS Ruch Gościszewo</strong>
                    Gościszewo (Stadion Leśny)<br/>
                    82-400 Sztum
                  </address>
                </div>
                 <div className="flex gap-4 items-center">
                  <Mail size={24} className="text-primary flex-shrink-0" />
                  <span>biuro@ruchgosciszewo.pl</span>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500 uppercase tracking-widest">
               Biało-Niebiesko-Czarni
            </div>
         </div>

         <ContactBox 
            title="Trener Seniorów" 
            person={TEAM_INFO.SENIORS.coach} 
            phone={TEAM_INFO.SENIORS.phone} 
            email={TEAM_INFO.SENIORS.email} 
          />
          <ContactBox 
            title="Trener Juniorów" 
            person={TEAM_INFO.JUNIORS.coach} 
            phone={TEAM_INFO.JUNIORS.phone} 
            email={TEAM_INFO.JUNIORS.email} 
          />
      </div>

      {/* Map Section */}
      <div className="w-full h-[500px] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 border border-gray-200 dark:border-gray-800">
         <iframe 
            title="Mapa Ruch Gościszewo"
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?q=Stadion+Leśny+Gościszewo&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
    </div>
  );
};

export default Contact;