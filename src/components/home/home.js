import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h2>Бесплатный поиск репетиторов</h2>
            <p>Мы — профессиональное сообщество частных репетиторов, объединяющее более 300 тысяч преподавателей.</p>


            <div className="popular-subjects">
                <h3>Популярные предметы в Алматы</h3>
                <div className="subject-category">
                    <h4>Школьные предметы</h4>
                    <ul>
                        <li>Английский язык</li>
                        <li>Русский язык</li>
                        <li>Математика</li>
                        <li>Информатика</li>
                        <li>Физика</li>
                        <a>Показать еще</a>
                    </ul>
                </div>

                <div className="subject-category">
                    <h4>Иностранные языки</h4>
                    <ul>
                        <li>Английский язык</li>
                        <li>Немецкий язык</li>
                        <li>Французский язык</li>
                        <li>Итальянский язык</li>
                        <li>Японский язык</li>
                        <a>Показать еще</a>
                    </ul>
                </div>

            </div>
            <div className="text-block">

                <p>
                    «TUTORS APP» - крупнейший сервис поиска репетиторов для личных или дистанционных занятий.
                    На сайте вы можете ознакомиться с анкетами преподавателей и выбрать тех, кто вам подходит, или
                    спросить
                    совета, и мы вам порекомендуем оптимальные варианты.
                    Репетиторы будут присылать свои предложения. Обсуждайте условия в чате
                    Укажите предмет и ответьте на пару вопросов о вашей задаче.
                    На сайте вы можете ознакомиться с анкетами преподавателей и выбрать
                    тех, кто вам подходит, или спросить совета, и мы вам порекомендуем оптимальные варианты.

                    Мы бесплатно помогаем найти репетитора с нужным опытом и по подходящей цене.
                    Репетиторы с помощью нашего сервиса занимаются любимым делом и экономят время на поиске учеников.
                </p>
                <p>
                    Мы бесплатно помогаем найти репетитора с нужным опытом и по подходящей цене.
                    Репетиторы с помощью нашего сервиса занимаются любимым делом и экономят время на поиске учеников.
                </p>
            </div>
            <p>Более 1000 настоящих отзывов. Найдите своего репетитора!</p>

            <Link to="/tutors" className="btn btn-primary larger-btn" style={{ backgroundColor: '#5e97ff' }}>
                Найти репетитора
            </Link>
        </div>
    );
};

export default Home;
