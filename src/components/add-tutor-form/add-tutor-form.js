import React, { useState } from 'react';
import './add-tutor-form.css';

const AddTutorForm = ({ onAddTutor }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTutor({ name });
        setName('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-tutor-form">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя репетитора"
                className="form-input"
            />
            <button type="submit" className="form-submit">Добавить</button>
        </form>
    );
};

export default AddTutorForm;
