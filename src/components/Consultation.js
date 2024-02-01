import React from 'react';

function Consultation() {
  return (
    <section className="consultation">
      <h3 className="consultation__title">Получите бесплатную консультацию</h3>
      <form className="consultation__form">
        <input className="consultation__input consultation__input_name" type="text" name="name" placeholder="Имя" />
        <input className="consultation__input consultation__input_email" type="email" name="email" placeholder="E-mail" />
        <button className="consultation__button" type="submit">Получить бесплатную консультацию</button>
      </form>
      <div className="consultation__wrapper">
        <input className="consultation__agree" type="checkbox" />
        <p className="consultation__text">
          Нажимая на кнопку, я соглашаюсь на обработку персональных данных, с
          <a className="consultation__link">Политикой Конфиденциальности</a>
          {' '}
          ознакомлен
        </p>
      </div>
    </section>
  );
}

export default Consultation;
