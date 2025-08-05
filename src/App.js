import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import AboutSchool from './pages/aboutschool';
import AboutSanstha from './pages/aboutsanstha';
import AboutBoardMembers from './pages/aboutboardmembers';
import ScrollButton from './components/scrollbutton';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div className="main-content container" style={{ flex: 1 }} >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutschool" element={<AboutSchool />} />
            <Route path="/aboutsanstha" element={<AboutSanstha />} />
            <Route path="/aboutboardmembers" element={<AboutBoardMembers />} />
          </Routes>
        </div>
        <Footer />
      </div>
      <ScrollButton/>
    </Router>
  );
}


export default App;
