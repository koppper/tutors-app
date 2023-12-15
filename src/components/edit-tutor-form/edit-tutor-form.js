import React, { useState } from 'react';
import { updateTutor } from '../../utils/api';
import './edit-tutor-form.css'

const EditTutorForm = ({ tutor, onTutorUpdated }) => {
    const [name, setName] = useState(tutor.name);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTutor({ ...tutor, name }).then(() => {
            if (typeof onTutorUpdated === 'function') {
                onTutorUpdated({ ...tutor, name });
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="edit-tutor-form">
            <label>
                Имя:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="form-input"
                />
            </label>
            <button type="submit" className="form-submit">Обновить Информацию</button>
        </form>
    );
};

export default EditTutorForm;
