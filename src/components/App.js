import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './Header';
import Footer from './Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="substrate">
      <div className="page">
          <Header />
          {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
