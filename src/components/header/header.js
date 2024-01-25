import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ toggleForm }) => {
    return (
        <div className="header-container">
            <h1 className="header-title">Управление Репетиторами</h1>
            <Link to="/tutors/add" className="add-tutor-btn">Добавить Репетитора</Link>
        </div>
    );
};

export default Header;
