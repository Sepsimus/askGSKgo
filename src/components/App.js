import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 
import Header from './Header'; 
import Cover from './Cover';
import Footer from './Footer';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="substrate">
      <div className="page">
          <Header />
          <Cover />
          {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
