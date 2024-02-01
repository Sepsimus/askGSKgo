import React from 'react';
import footer__logo from '../image/footer__logo.svg';
import footer__adressImg from '../image/footer__adress-img.svg';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={footer__logo} alt="ASKGSKGO" />
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__list-elem"><a className="footer__list-link" href="#">Адреса центров</a></li>
          <li className="footer__list-elem"><a className="footer__list-link" href="#">Блог</a></li>
          <li className="footer__list-elem"><a className="footer__list-link" href="#">О нас</a></li>
          <li className="footer__list-elem"><a className="footer__list-link" href="#">Контакты</a></li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-elem"><a className="footer__list-link" href="#">Наши эксперты</a></li>
          <li className="footer__list-elem"><a className="footer__list-link" href="#">Достопримечательности</a></li>
          <li className="footer__list-elem"><a className="footer__list-link" href="#">Страховка</a></li>
          <li className="footer__list-elem"><a className="footer__list-link" href="#">Партнеры</a></li>
        </ul>
      </nav>
      <div className="footer__wrapper">
        <div className="footer__wrapper footer__wrapper_adress">
          <div className="footer__address-wrapper">
            <img className="footer__adress-img" src={footer__adressImg} alt="Метка" />
            <div className="footer__text-wrapper">
              <p className="footer__adress">Çağlayan, 2052. Sk. No:43, 07200 Muratpaşa/Antalya, Турция</p>
              <a className="footer__email-link" href="#">halloretreat@gmail.com</a>
              <a className="footer__map-link" href="#">Показать на карте</a>
            </div>
          </div>
          <div className="footer__address-wrapper">
            <img className="footer__adress-img" src={footer__adressImg} alt="Метка" />
            <div className="footer__text-wrapper">
              <p className="footer__adress">Çağlayan, 2052. Sk. No:43, 07200 Muratpaşa/Antalya, Турция</p>
              <a className="footer__email-link" href="#">halloretreat@gmail.com</a>
              <a className="footer__map-link" href="#">Показать на карте</a>
            </div>
          </div>
        </div>
        <div className="footer__social-wrapper">
          <a className="footer__social footer__social_facebook" href="#" />
          <a className="footer__social footer__social_whats-up" href="#" />
          <a className="footer__social footer__social_inst" href="#" />
          <a className="footer__social footer__social_youtube" href="#" />
        </div>
      </div>
      <div className="footer__wrapper footer__wrapper_company-info">
        <div className="footer__policy-wrapper">
          <p className="footer__company">© 2023 ASKGSKGO Int.</p>
          <a className="footer__policy" href="#">Политика конфиденциальности</a>
        </div>
        <p className="footer__creator">
          Сайт разработан
          <a className="footer__link" href="https://github.com/Sepsimus/">Sepsimus</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
