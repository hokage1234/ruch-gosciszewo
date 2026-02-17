import { FileText, Users, Trophy, Image, Mail, ExternalLink as LinkIcon } from 'lucide-react';

/**
 * =================================================================================
 * INSTRUKCJA EDYCJI PLIKU CONSTANTS.TS
 * =================================================================================
 * Ten plik służy jako "centrum sterowania" treścią na stronie.
 * Dzięki niemu nie musisz szukać tekstów głęboko w kodzie komponentów.
 *
 * JAK MODYFIKOWAĆ:
 * 1. Zmieniaj tylko wartości po prawej stronie dwukropka (w cudzysłowach).
 * 2. Nie zmieniaj nazw kluczy (np. FACEBOOK, RECRUITMENT), bo zepsuje to kod.
 * 3. Jeśli chcesz dodać nowe pozycje w menu, zachowaj strukturę obiektu { label: '...', path: '...' }.
 * =================================================================================
 */

// ==========================================
// OBRAZY I GRAFIKI
// ==========================================
export const IMAGES = {
  // Zdjęcie główne na stronie startowej (Hero Section)
  // Możesz tu wkleić link do własnego zdjęcia (np. z Dysku Google, Imgur lub serwera FTP)
  // Obecne zdjęcie: Piłka na murawie (Unsplash)
  HERO_BACKGROUND: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1920&auto=format&fit=crop'
};

// ==========================================
// KONFIGURACJA LINKÓW ZEWNĘTRZNYCH
// ==========================================
export const LINKS = {
  // Link do Facebooka (używany w widgecie i w ikonach)
  FACEBOOK: 'https://www.facebook.com/profile.php?id=100057301546609',
  
  // Link do tabeli (Pomorski Futbol) - źródło iframe'a (ID 4036)
  POMORSKI_FUTBOL: 'https://www.pomorskifutbol.pl/liga.php?id=4036',
  
  // Link do folderu Google Drive ze zdjęciami (Sekcja Galeria)
  GOOGLE_DRIVE: 'https://drive.google.com/drive/folders/YOUR_FOLDER_ID', // TODO: Wklej tu swój link do folderu publicznego
  
  // Linki do formularzy Google (Sekcja Formularze)
  FORMS: {
    RECRUITMENT: 'https://forms.google.com/your-form-1', // Nabór do drużyny
    ACADEMY: 'https://forms.google.com/your-form-2',     // Nabór do akademii
    SPONSOR: 'https://forms.google.com/your-form-3',     // Zgłoszenie sponsora
  }
};

// ==========================================
// MENU NAWIGACYJNE
// ==========================================
export const NAV_ITEMS = [
  { label: 'Start', path: '/' },
  { label: 'Drużyna', path: '/druzyna' },
  { label: 'Terminarz', path: '/terminarz-i-tabela' },
  { label: 'Formularze', path: '/formularze' },
  { label: 'Galeria', path: '/galeria' },
  { label: 'Kontakt', path: '/kontakt' },
];

// ==========================================
// DANE O DRUŻYNIE (ZAKŁADKA "DRUŻYNA" I "KONTAKT")
// ==========================================
export const TEAM_INFO = {
  SENIORS: {
    coach: 'Piotr Nowak',
    phone: '600 111 222',
    email: 'zarzad@ruchgosciszewo.pl',
    description: 'Pierwsza drużyna Ruchu Gościszewo walczy z pasją na boiskach ligi okręgowej/A-klasy. Nasz zespół to połączenie doświadczenia z młodzieńczą ambicją, zawsze grający do ostatniego gwizdka.'
  },
  JUNIORS: {
    coach: 'Marek Kowalczyk',
    phone: '700 333 444',
    email: 'akademia@ruchgosciszewo.pl',
    description: 'Szkolimy młode talenty z Gościszewa i okolic. Dbamy o rozwój fizyczny oraz wpajamy zasady fair play w duchu biało-niebiesko-czarnych barw.'
  }
};

// ==========================================
// SPONSORZY I PARTNERZY
// ==========================================
/**
 * INSTRUKCJA DODAWANIA SPONSORÓW:
 * 1. Dodaj nowy obiekt do tablicy SPONSORS.
 * 2. 'name': Nazwa firmy (wyświetla się pod logo).
 * 3. 'logo': Ścieżka do pliku. Najlepiej wrzuć pliki logo do folderu /public/sponsors/
 *    i używaj ścieżki '/sponsors/nazwa-pliku.png'.
 *    Na start używamy placeholderów z internetu.
 * 4. 'website': (Opcjonalnie) Link do strony sponsora.
 */
export const SPONSORS = [
  {
    name: 'Gmina Sztum',
    logo: 'https://placehold.co/400x200/png?text=GMINA+SZTUM', 
    website: 'https://sztum.pl'
  },
  {
    name: 'Sklep "U Marka"',
    logo: 'https://placehold.co/400x200/png?text=SKLEP+SPOŻYWCZY',
    website: ''
  },
  {
    name: 'Tartak Gościszewo',
    logo: 'https://placehold.co/400x200/png?text=TARTAK',
    website: '' 
  },
  {
    name: 'Usługi Transportowe',
    logo: 'https://placehold.co/400x200/png?text=TRANSPORT',
    website: ''
  },
  {
    name: 'Okręgowy Związek P.N.',
    logo: 'https://placehold.co/400x200/png?text=POMORSKI+ZPN',
    website: 'https://pomorski-zpn.pl'
  },
  {
    name: 'Partner Techniczny',
    logo: 'https://placehold.co/400x200/png?text=SPORT+PARTNER',
    website: ''
  }
];

// ==========================================
// DANE DO AKTUALNOŚCI (MOCK)
// ==========================================
// Poniższa tablica służy jako tymczasowa baza danych newsów, jeśli chciałbyś przywrócić sekcję aktualności w przyszłości.
export const MOCK_NEWS = [
  {
    id: 1,
    title: 'Ważne zwycięstwo u siebie',
    date: '28.10.2023',
    excerpt: 'Ruch Gościszewo pewnie pokonuje rywala na własnym stadionie.',
    content: 'Pełna relacja z meczu... Lorem ipsum dolor sit amet.',
    tags: ['Seniorzy', 'Mecz']
  },
  // ... możesz dodać więcej wpisów kopiując ten obiekt
];