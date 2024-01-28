import React from 'react';
import ourCompany__play from '../image/our-company__play.svg';

function OurCompany() {
    return (
        <section className='our-company'>
            <h2 className='our-company__title'>Наша компания</h2>
            <div className='our-company__img'>
                <div className='our-company__subtitle-wrapper'>
                    <p className='our-company__subtitle'>Мы – увлеченная команда профессионалов в области оздоровления
и красоты. Эксперты AskGskGo рекомендуют только те программы оздоровления, которые попробовали и проверили сами, подбирая индивидуальный подход для достижения именно ваших целей
и не забывая о соотношении цены и качества.</p>
                </div>
                <div className='our-company__pagination'>
                    <div className='our-company__pagination-dot our-company__pagination-dot_1 our-company__pagination-dot_active'></div>
                    <div className='our-company__pagination-dot our-company__pagination-dot_2'></div>
                    <div className='our-company__pagination-dot our-company__pagination-dot_3'></div>
                    <div className='our-company__pagination-dot our-company__pagination-dot_4'></div>
                </div>    
            </div>
            <div className='our-company__wrapper'>
                <div className='our-company__text-wrapper'>
                    <p className='our-company__text'>
                        В партнерстве с Vitalica Wellness (СПА комплекс с программами оздоровления и детокса
                        с медицинским сопровождением на территории отеля 5*) мы предлагаем Вам качественный отдых с пользой для здоровья на берегу моря
                        в окружении прекрасной и богатой природы Бодрума. Проживание предусмотрено
                        в резиденциях, также мы можем забронировать любой номер из представленных в отеле
                        по Вашему пожеланию.
                    </p>
                    <button className='our-company__button'>Подробнее</button>
                </div>
                <a className='our-company__video' href='#'>
                    <img className='our-company__play' alt='Кнопка воспроизведения' src={ourCompany__play}/>
                </a>
            </div>
        </section>
    )
};

export default OurCompany;