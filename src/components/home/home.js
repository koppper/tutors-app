import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h2>Добро пожаловать на наш сайт репетиторов!</h2>
            <p>
                Наши опытные репетиторы готовы помочь вам в обучении. Выберите своего репетитора
                из нашего списка и начните успешное обучение уже сегодня.
            </p>
            <Link to="/tutors" className="btn btn-primary">
                Перейти к списку репетиторов
            </Link>
        </div>
    );
};

export default Home;
