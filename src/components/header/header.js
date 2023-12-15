import React from 'react';
import './header.css';

const Header = ({ toggleForm }) => {
    return (
        <div className="header-container">
            <h1 className="header-title">Управление Репетиторами</h1>
            <button onClick={toggleForm} className="add-tutor-btn">Добавить Репетитора</button>
        </div>
    );
};

export default Header;
