import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './Header'; 
import Cover from './Cover';
import Cards from './Cards';
import OurCompany from './OurCompany';
import Consultation from './Consultation';
import Footer from './Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="substrate">
      <div className="page">
          <Header />
          <Cover />
          <Cards />
          <OurCompany />
          <Consultation />
          <Footer />
      </div>
    </div>
  );
}

export default App;
