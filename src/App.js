import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, About, Error, Logement } from './1_pages';
import { Navbar, Footer } from './2_components/global';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
