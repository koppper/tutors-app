import React from 'react';
import withTutorProfile from "../hoc-tutor-profile";
import './tutor-profile.css';

const TutorProfile = ({ tutor, imageUrl }) => {
    return (
        <div className="container tutor-profile">
            <div className="row">
                <div className="col-md-4">
                    <img src={`/images/${tutor.imageUrl}`} alt={tutor.name} className="card-img-top" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title mb-3">Профиль Репетитора</h2>
                        <p className="card-text"><b>ФИО</b>: {tutor.name}</p>
                        <p><b>Категория: </b>{tutor.category}</p>
                        <p><b>Описание: </b>{tutor.description}</p>
                        <p><b>Опыт работы:</b> <span className="text-bold">{tutor.experience}</span></p>
                        <p><b>О себе:</b> <span className="text-bold">{tutor.about}</span></p>
                        <button className="btn btn-primary">Связаться с репетитором</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default withTutorProfile(TutorProfile);
