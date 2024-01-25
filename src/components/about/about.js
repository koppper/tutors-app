import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>О нас</h2>
            <div id="achievementsCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://assets-global.website-files.com/6294b12fe96345a83876d4a5/62f02e9940dca729bf79b92d_repet1.png" style={{ height: '500px', width: '300px'}} className="d-block w-100" alt="Достижение 1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Первое достижение</h5>
                            <p> Наша компания получила престижную награду в номинации "Лучший образовательный проект" за выдающиеся
                                достижения в сфере образования и помощи студентам в достижении успеха в учебе.</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#achievementsCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#achievementsCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <h3>Наши репетиторы</h3>
            <div className="card">
                <img src={`/images/ivan.jpg`}  style={{ height: '300px', width: '300px', objectFit: 'cover' }} alt="Репетитор 1" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Иван Иванов</h5>
                    <p className="card-text">
                        Опытный репетитор с высшим образованием. Специализируется в предметах математика и физика.
                    </p>
                    <Link to="/tutors/1" className="btn btn-primary btn-sm">Подробнее</Link>
                </div>
            </div>
        </div>
    );
};

export default About;
