import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdoptPage from './pages/AdoptPage';
import VolunteerPage from './pages/VolunteerPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adopt" element={<AdoptPage />} />
      <Route path="/volunteer" element={<VolunteerPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
