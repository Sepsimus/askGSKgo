import React from 'react';
import header__logo from '../image/header__logo.svg';

function Header() {
    return (
        <header className='header'>
            <div className='header__top-wrapper'>
                <div className='header__wrapper header__wrapper_long'>
                    <div className='header__menu-wrapper'>
                        <div className='header__menu'>
                        </div>
                    </div>
                    <img className='header__logo' src={header__logo} alt='ASKGSKGO' />
                </div>
                <div className='header__wrapper header__wrapper_short'>
                    <div className='header__call-wrapper'>
                        <p className='header__number'>8&nbsp;800&nbsp;345&nbsp;45&nbsp;67</p>
                        <p className='header__link'>Заказать звонок</p>
                    </div>
                    <div className='header__language-wrapper'>
                        <p className='header__button header__button_ru header__button_inactive'>Ru</p>
                        <p className='header__button header__button_en'>En</p>
                    </div>
                </div>
            </div>

            <nav className='header__nav'>
                <ul className='header__list'>
                    <li className='header__list-elem'><a className='header__list-link' href='#'>GSK аренда</a></li>
                    <li className='header__list-elem'><a className='header__list-link' href='#'>GSK фитнес туры</a></li>
                    <li className='header__list-elem'><a className='header__list-link' href='#'>Программы оздоровления</a></li>
                    <li className='header__list-elem'><a className='header__list-link' href='#'>Клиника Vitalica</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;