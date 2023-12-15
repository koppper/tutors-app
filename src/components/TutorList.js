import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TutorList = ({ tutors, onEdit, onDelete }) => {
    return (
        <div className="container mt-4">
            <h2>Список Репетиторов</h2>
            <div className="row">
                {tutors.map(tutor => (
                    <div key={tutor.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{tutor.name}</h5>
                                <button onClick={() => onEdit(tutor)} className="btn btn-secondary btn-sm mr-5">Изменить</button>
                                <button onClick={() => onDelete(tutor.id)} className="btn btn-danger btn-sm">Удалить</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TutorList;


