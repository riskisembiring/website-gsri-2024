import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navbar.tsx';
import './styles/index.css';
import Footer from './components/Footer.tsx';
import TentangKami from './pages/TentangKami.tsx';
import Content from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';


const Home: React.FC = () => {
  const [showApp, setShowApp] = useState<boolean>(false);

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Content />} /> 
          <Route path="/TentangKami" element={<TentangKami />} />
          <Route path="/about" element={<Content />} />
          <Route path="/Kontak" element={<Contact/>} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default Home;
