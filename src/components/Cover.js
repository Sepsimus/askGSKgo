import React from 'react';

function Cover() {
    return (
        <section className='cover'>
            <h1 className='cover__title'>AskGskGo — ваш путеводитель в мир исцеления, оздоровления и долголетия</h1>
            <p className='cover__subtitle'>Создайте лучшую версию себя</p>
            <button className='cover__button'>Получить бесплатную консультацию</button>
            <a className='cover__social cover__social_tel' href='#'></a>
            <a className='cover__social cover__social_whats-up' href='#'></a>
            <a className='cover__social cover__social_mes' href='#'></a>
        </section>
    )
};

export default Cover;