import React from 'react'; 
import header__logo from '../image/header__logo.svg';

function Header(){
    return(
        <header className='header'>
            <div className='header__wrapper header__wrapper_long'>
                <div className='header__menu'>

                </div>
                <img className='header__logo' src={header__logo} alt='ASKGSKGO'/>
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
        </header>
    )
}

export default Header;