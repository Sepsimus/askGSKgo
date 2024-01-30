import React from 'react';
import menu__logo from '../image/menu__logo.svg';
import menu__adressImg from '../image/menu__adress-img.svg';

function Menu() {
    return (
        <div className='menu'>
            <div className='menu__general-wrapper'>
                <div className='menu__close'></div>
                <div className='menu__wrapper'>
                    <div className='menu__nav-wrapper'>
                        <nav className='menu__nav'>
                            <ul className='menu__list'>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>GSK rent</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>GSK Retreats</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Healths packages</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Vitalica clinic</a></li>
                            </ul>
                        </nav>
                        <nav className='menu__nav'>
                            <ul className='menu__list'>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Wellness experts</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Area sightseeing</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Travel insuranse</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Healing partners</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='menu__nav-wrapper'>
                        <nav className='menu__nav'>
                            <ul className='menu__list'>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Destinations</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Blog</a></li>
                            </ul>
                        </nav>
                        <nav className='menu__nav'>
                            <ul className='menu__list'>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>About Us</a></li>
                                <li className='menu__list-elem'><a className='menu__list-link' href='#'>Contact Us</a></li>
                            </ul>
                        </nav>
                    </div>
                    <img className='menu__logo' src={menu__logo} alt='ASKGSKGO'/>
                    <div className='menu__address-wrapper'>
                        <img className='menu__adress-img' src={menu__adressImg} alt='Метка'/>
                        <div className='menu__text-wrapper'>
                            <p className='menu__adress'>Çağlayan, 2052. Sk. No:43, 07200 Muratpaşa/Antalya, Турция</p>
                            <a className='menu__email-link' href="#">halloretreat@gmail.com</a>
                        </div>
                    </div>
                    <div className='menu__address-wrapper'>
                        <img className='menu__adress-img' src={menu__adressImg} alt='Метка'/>
                        <div className='menu__text-wrapper'>
                            <p className='menu__adress'>Çağlayan, 2052. Sk. No:43, 07200 Muratpaşa/Antalya, Турция</p>
                            <a className='menu__email-link' href="#">halloretreat@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className='menu__img'></div>
            </div>
        </div>
    )
}

export default Menu;