import React from 'react';
import { ClipboardList, ExternalLink as LinkIcon, ArrowRight } from 'lucide-react';
import ExternalLink from '../components/ExternalLink';
import { LINKS } from '../constants';

const FormCard: React.FC<{ title: string, index: string, href: string }> = ({ title, index, href }) => (
  <ExternalLink 
    href={href}
    className="group relative bg-white dark:bg-dark-surface border border-gray-200 dark:border-gray-800 p-8 flex items-center justify-between hover:bg-black hover:border-black transition-all duration-300"
  >
    <div className="flex items-center gap-6">
       <span className="font-display text-5xl font-bold text-gray-200 dark:text-gray-800 group-hover:text-gray-700 transition-colors">
         {index}
       </span>
       <div>
         <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white uppercase group-hover:text-white transition-colors">{title}</h3>
         <span className="text-sm text-primary font-bold uppercase tracking-wider mt-1 block">
            Wypełnij zgłoszenie
         </span>
       </div>
    </div>
    
    <div className="bg-gray-100 dark:bg-gray-800 group-hover:bg-primary p-3 rounded-none transition-colors">
       <ArrowRight className="text-black dark:text-white group-hover:text-white" size={24} />
    </div>
  </ExternalLink>
);

const Forms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-display font-bold text-black dark:text-white uppercase mb-4 tracking-tight">Strefa Zgłoszeń</h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-500 font-light text-lg">
            Oficjalne kanały komunikacji. Wybierz odpowiedni temat.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <FormCard 
            index="01"
            title="Nabór do Seniorów / Zgłoszenie na testy" 
            href={LINKS.FORMS.RECRUITMENT} 
          />
          <FormCard 
            index="02"
            title="Akademia Juniora / Dołącz do drużyny" 
            href={LINKS.FORMS.ACADEMY} 
          />
          <FormCard 
            index="03"
            title="Zostań sponsorem" 
            href={LINKS.FORMS.SPONSOR} 
          />
        </div>

      </div>
    </div>
  );
};

export default Forms;