import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Media from './components/Media';
import Reviews from './components/Reviews';
import Events from './components/Events';
import ContactForm from './components/Contact';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [loggedIn, setLoggedIn] = useState(false);

  const renderPage = () => {
    if (currentPage === 'Home') return <Home />;
    if (currentPage === 'About') return <About />;
    if (currentPage === 'Media') return <Media />;
    if (currentPage === 'Events') return <Events />;
    if (currentPage === 'Contact') return <ContactForm />;
    if (currentPage === 'Reviews') return <Reviews />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="pt-24 sm:pt-18">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Protected admin route */}
        <Route path="/admin" element={loggedIn ? <AdminPanel /> : <Navigate to="/login" />} />
        {/* Public routes */}
        <Route path="*" element={renderPage()} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
