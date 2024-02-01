import React from 'react';

function Popup(props) {
  return (
    <div className={`popup ${props.isConsultationOpen || props.isThanksOpen ? 'popup_opened' : ''}`} onClick={props.setOverlayListener}>
      <div className={`popup__wrapper ${props.isThanksOpen ? 'popup__wrapper_thanks' : 'popup__wrapper_hidden'}`}>
        <div className="popup__close" onClick={props.onCloseButton} />
        <h4 className="popup__title popup__title_thanks">Спасибо</h4>
        <p className="popup__subtitle">Ваша заявка принята.</p>
        <p className="popup__subtitle">Мы свяжемся с Вами в ближайшее время!</p>
      </div>
      <div className={`popup__wrapper ${props.isThanksOpen ? 'popup__wrapper_hidden' : ''}`}>
        <div className="popup__close" onClick={props.onCloseButton} />
        <h4 className="popup__title">Заказать звонок</h4>
        <form className="popup__form">
          <input className="popup__input popup__input_name" type="text" name="name" placeholder="Имя" />
          <input className="popup__input popup__input_email" type="email" name="email" placeholder="E-mail" />
          <input className="popup__input popup__input_phone" type="text" name="phone" placeholder="Телефон" />
          <select className="popup__input popup__input_language" type="checkbox" name="agree">
            <option className="popup__option popup__option_lang" value="" name="language">Язык</option>
            <option className="popup__option popup__option_ru" value="Русский">Русский</option>
            <option className="popup__option popup__option_en" value="English">English</option>
          </select>
          <button className="popup__submit" onClick={props.onSubmitButton}>Заказать</button>
          <div className="popup__checkbox-wrapper">
            <input className="popup__input popup__input_agree" type="checkbox" name="agree" />
            <p className="popup__agree-text">Я согласен получать другие сообщения от AskGskGo HUB.</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
