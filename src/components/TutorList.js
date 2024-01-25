import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const TutorList = ({ tutors, onEdit, onDelete }) => {
    return (
        <div className="container mt-4">
            <h2>Список Репетиторов</h2>
            <div className="row">
                {tutors.map(tutor => (
                    <div key={tutor.id} className="col-md-4 mb-4">
                        <div className="card">
                            {tutor.imageUrl && (
                                <img
                                    src={`/images/${tutor.imageUrl}`}
                                    className="card-img-top"
                                    alt={tutor.name}
                                    style={{ height: '300px', objectFit: 'cover' }}
                                />
                            )}

                            <div className="card-body text-center">
                                <h4 className="card-title">{tutor.name}</h4>
                                <h5 className="card-title">{tutor.category}</h5>
                                <Link to={`/tutors/${tutor.id}`} className="btn btn-primary btn-sm ml-2">Посмотреть</Link>
                                <button onClick={() => onEdit(tutor)} className="btn btn-secondary btn-sm ml-2">Изменить</button>
                                <button onClick={() => onDelete(tutor.id)} className="btn btn-danger btn-sm ml-2">Удалить</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TutorList;


