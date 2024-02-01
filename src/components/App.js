import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Cover from './Cover';
import Cards from './Cards';
import OurCompany from './OurCompany';
import Consultation from './Consultation';
import Footer from './Footer';
import Menu from './Menu';
import Popup from './Popup';

// import logo from './logo.svg';
// import './App.css';

function App() {
  const [isConsultationPopupOpen, setIsConsultationPopupOpen] = React.useState(false);
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = React.useState(false);
  const [isThanksPopupOpen, setIsThanksPopupOpen] = React.useState(false);

  function handleConsultationButtonClick() {
    setIsConsultationPopupOpen(true);
  }

  function handleMenuButtonClick() {
    setIsNavigationMenuOpen(true);
  }

  function handleSubmitConsultationButtonClick(e) {
    e.preventDefault();
    setIsThanksPopupOpen(true);
  }

  function allPopupClose() {
    setIsConsultationPopupOpen(false);
    setIsNavigationMenuOpen(false);
    setIsThanksPopupOpen(false);
  }

  function setPopupOverlayCloseListener(e) {
    if (e.target.classList.contains('popup') || e.target.classList.contains('menu')) {
      allPopupClose();
    }
  }

  return (
    <div className="substrate">
      <div className="page">
        <Header onMenuButton={handleMenuButtonClick} />
        <Cover onCoverButton={handleConsultationButtonClick} />
        <Cards />
        <OurCompany />
        <Consultation />
        <Footer />
        <Menu
          isOpen={isNavigationMenuOpen}
          onCloseButton={allPopupClose}
          setOverlayListener={setPopupOverlayCloseListener}
        />
        <Popup
          isConsultationOpen={isConsultationPopupOpen}
          isThanksOpen={isThanksPopupOpen}
          onCloseButton={allPopupClose}
          onSubmitButton={handleSubmitConsultationButtonClick}
          setOverlayListener={setPopupOverlayCloseListener}
        />
      </div>
    </div>
  );
}

export default App;
