import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
// News page removed
import Team from './pages/Team';
import Schedule from './pages/Schedule';
import Forms from './pages/Forms';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Proste placeholdery dla stron prawnych
const Privacy = () => <div className="container mx-auto p-12"><h1>Polityka Prywatności - DO UZUPEŁNIENIA</h1></div>;
const Cookies = () => <div className="container mx-auto p-12"><h1>Polityka Cookies - DO UZUPEŁNIENIA</h1></div>;

const App: React.FC = () => {
  return (
    <Router>
      {/* ScrollToTop musi być wewnątrz Routera, aby mieć dostęp do useLocation */}
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Trasa /aktualnosci została usunięta */}
          <Route path="/druzyna" element={<Team />} />
          <Route path="/terminarz-i-tabela" element={<Schedule />} />
          <Route path="/formularze" element={<Forms />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/polityka-prywatnosci" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;