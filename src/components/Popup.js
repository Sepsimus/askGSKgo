import React from 'react';
// popup__wrapper_thanks
// popup_opened

function Popup() {
    return (
        <div className='popup'>
            <div className='popup__wrapper'> 
                <div className='popup__close'></div>
                {/* <h4 className='popup__title popup__title_thanks'>Спасибо</h4>
                <p className='popup__subtitle'>Ваша заявка принята.</p>
                <p className='popup__subtitle'>Мы свяжемся с Вами в ближайшее время!</p> */}
                <h4 className='popup__title'>Заказать звонок</h4>
                <form className='popup__form'>
                    <input className='popup__input popup__input_name' type='text' name='name' placeholder='Имя'></input>
                    <input className='popup__input popup__input_email' type='email' name='email' placeholder='E-mail'></input>
                    <input className='popup__input popup__input_phone' type='text' name='phone' placeholder='Телефон'></input>
                    <select className='popup__input popup__input_language' type='checkbox' name='agree'>
                        <option className='popup__option popup__option_lang' value='' name='language'>Язык</option>
                        <option className='popup__option popup__option_ru' value='Русский'>Русский</option>
                        <option className='popup__option popup__option_en' value='English'>English</option>
                    </select>
                    <button className='popup__submit'>Заказать</button>
                    <div className='popup__checkbox-wrapper'>
                        <input className='popup__input popup__input_agree' type='checkbox' name='agree'></input>
                        <p className='popup__agree-text'>Я согласен получать другие сообщения от AskGskGo HUB.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup;