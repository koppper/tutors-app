import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TutorList from './components/TutorList';
import EditTutorForm from './components/edit-tutor-form/edit-tutor-form';
import Header from './components/header';
import AddTutorForm from './components/add-tutor-form';
import Search from './components/search';
import Footer from './components/footer';
import ParentComponent from './components/parent-component';
import TutorProfile from './components/tutor-profile';
import Home from './components/home';
import About from './components/about';
import TutorsAdd from './components/contact';

const App = () => {
    const mockTutors = [
        {
            id: 1,
            name: "Иван Иванов",
            imageUrl: "ivan.jpg",
            hasError: false,
            category: "Математика",
            description: "Опытный репетитор по математике. Помогает ученикам построить крепкое основание."  // Описание
        },
        {
            id: 2,
            name: "Мария Петрова",
            imageUrl: "maria.jpg",
            hasError: false,
            category: "Английский",
            description: "Страстный преподаватель английского языка и литературы. Адаптирует уроки под индивидуальные потребности."
        },
        {
            id: 3,
            name: "Алексей Сидоров",
            imageUrl: "alexei.jpg",
            hasError: false,
            category: "Физика",
            description: "Энтузиаст по физике с умением делать сложные концепции понятными и интересными."
        },
        {
            id: 4,
            name: "Екатерина Новикова",
            imageUrl: "ekaterina.jpg",
            hasError: false,
            category: "Химия",
            description: "Профессиональный репетитор по химии. Развивает любовь к науке через интересные эксперименты."
        },
        {
            id: 5,
            name: "Дмитрий Смирнов",
            imageUrl: "dmitry.jpg",
            hasError: false,
            category: "История",
            description: "Захватывающий рассказчик и репетитор по истории. Способствует глубокому пониманию прошлого."
        },
        {
            id: 6,
            name: "Анна Кузнецова",
            imageUrl: "anna.jpg",
            hasError: false,
            category: "Литература",
            description: "Литературный критик и репетитор по литературе. Помогает раскрывать творческий потенциал."
        },
    ];

    const [tutors, setTutors] = useState(mockTutors);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingTutor, setEditingTutor] = useState(null);

    const handleDelete = (id) => {
        const updatedTutors = tutors.filter((tutor) => tutor.id !== id);
        setTutors(updatedTutors);
    };


    const handleSearch = (searchTerm) => {
        const filteredTutors = mockTutors.filter((tutor) =>
            tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTutors(filteredTutors);
    };

    const startEdit = (tutor) => {
        setEditingTutor(tutor);
    };

    const handleEdit = (updatedTutor) => {
        const updatedTutors = tutors.map((tutor) =>
            tutor.id === updatedTutor.id ? updatedTutor : tutor
        );
        setTutors(updatedTutors);
        setEditingTutor(null);
    };


    const handleAdd = (newTutor) => {
        const formData = new FormData();
        formData.append('name', newTutor.name);
        formData.append('category', newTutor.category);
        formData.append('description', newTutor.description);
        formData.append('image', newTutor.image);

        fetch('http://localhost:3000/tutors', {
            method: 'GET',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => {
            });

        setTutors([...tutors, { ...newTutor, id: Date.now() }]);
    };


    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <Router>
                <div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">TUTORS APP</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Главное
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        О нас
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tutors/add" className="nav-link">
                                        Добавить репетитора
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tutors" className="nav-link">
                                        Репетиторы
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/tutors/add"
                            element={<TutorsAdd onAddTutor={handleAdd} />}
                        />
                        {mockTutors.map((tutor) => (
                            <Route
                                key={tutor.id}
                                path={`/tutors/${tutor.id}`}
                                element={<TutorProfile tutor={tutor} />}
                            />
                        ))}
                        <Route
                            path="/tutors"
                            element={
                                <div>
                                    <Header toggleForm={toggleForm} />
                                    {isFormVisible && <AddTutorForm onAddTutor={handleAdd} />}
                                    {editingTutor && (
                                        <EditTutorForm
                                            tutor={editingTutor}
                                            onTutorUpdated={handleEdit}
                                        />
                                    )}
                                    <Search onSearch={handleSearch} />
                                    <TutorList
                                        tutors={tutors}
                                        onEdit={startEdit}
                                        onDelete={handleDelete}
                                    />

                                    <Footer />
                                </div>
                            }
                        />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;
