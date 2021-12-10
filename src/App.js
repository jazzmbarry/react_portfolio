import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  function renderPage(currentPage) {
    switch(currentPage) {
      default:
        return(
          <About />
        );
      case 'Portfolio':
        return(
          <Portfolio />
        );
      case 'Contact':
        return(
          <ContactForm />
        );
      case 'Resume':
        return(
          <Resume />
        );
    }
  }

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        {renderPage(currentPage)}
      </main>
      <Footer />
    </div>
  );
}

export default App;