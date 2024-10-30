import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Edukasi from './pages/Edukasi';
import Forum from './pages/Forum';
import About from './pages/About';
import Mobile from './pages/Mobile';
import './index.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edukasi" element={<Edukasi />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobileapp" element={<Mobile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


