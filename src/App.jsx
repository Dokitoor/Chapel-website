import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Visitors from './pages/Visitors';
import Donation from './pages/Donation';
import Downloads from './pages/Downloads';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

import './styles/index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
