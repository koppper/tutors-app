import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TutorsAdd = ({ onAddTutor }) => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Проверки на заполненность полей можно добавить по необходимости

        // Создание нового репетитора
        const newTutor = {
            name,
            category,
            description,
            image,
        };

        // Вызов функции-обработчика добавления репетитора
        onAddTutor(newTutor);

        // Сброс формы
        setName('');
        setCategory('');
        setDescription('');
        setImage(null);

        // Редирект на /tutors
        navigate('/tutors');
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];

        // Обновляем состояние компонента объектом File
        setImage(selectedImage);
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Добавление репетитора</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Имя:</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Категория:</label>
                    <input type="text" className="form-control" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Описание:</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Изображение:</label>
                    <input type="file" className="form-control" accept="image/*" id="image" onChange={handleImageChange} />
                </div>
                <button type="submit" className="btn btn-primary">Добавить репетитора</button>
            </form>
        </div>
    );
};

export default TutorsAdd;
