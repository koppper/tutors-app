import React from 'react';
import withTutorProfile from "../hoc-tutor-profile";
import './tutor-profile.css';

const TutorProfile = ({ tutor, imageUrl }) => {
    return (
        <div className="tutor-profile card">
            <h2 style={{color: 'blue'}}>Данные репетитора</h2>
            <img src={`/images/${tutor.imageUrl}`} alt={tutor.name} style={{ height: '300px', width: '300px', objectFit: 'cover' }} className="card-img-top" />
            <div className="card-body">
                <h2 className="card-title">Tutor Profile</h2>
                <p className="card-text">Name: {tutor.name}</p>
            </div>
        </div>
    );
};

export default withTutorProfile(TutorProfile);
