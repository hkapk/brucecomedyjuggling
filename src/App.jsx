import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Photos from './components/Photos';
import Reviews from './components/Reviews';
import Events from './components/Events';
import ContactForm from './components/Contact';

function App() {

  const [currentPage, setCurrentPage] = useState('About');

  //check what value is the currentPage, rendering the value depending on which is current
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Videos') {
      return <Videos />;
    }
    if (currentPage === 'Photos') {
      return <Photos />;
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

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App
