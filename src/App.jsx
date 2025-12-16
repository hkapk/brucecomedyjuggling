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

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  //check what value is the currentPage, rendering the value depending on which is current
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Media') {
      return <Media />;
    }

    if (currentPage === 'Events') {
      return <Events />;
    }

    if (currentPage === 'Contact') {
      return <ContactForm />
    }
    if (currentPage === 'Reviews') {
      return <Reviews />
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pt-24 sm:pt-18">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App
