import React from 'react';
import withTutorProfile from "../hoc-tutor-profile";
import './tutor-profile.css';

const TutorProfile = ({ tutor, imageUrl }) => {
    return (
        <div className="tutor-profile card">
            <h2>Данные репетитора</h2>
            <img src={`/images/${tutor.imageUrl}`} alt={tutor.name} className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title">Tutor Profile</h2>
                <p className="card-text">Name: {tutor.name}</p>
                <p>Категория: {tutor.category}</p>
                <p>Описание: {tutor.description}</p>
            </div>
        </div>
    );
};


export default withTutorProfile(TutorProfile);
