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
import Contact from './components/contact';

const App = () => {
    const mockTutors = [
        { id: 1, name: "Иван Иванов", imageUrl: "ivan.jpg", hasError: false },
        { id: 2, name: "Мария Петрова", imageUrl: "maria.jpg", hasError: false },
        { id: 3, name: "Алексей Сидоров", imageUrl: "alexey.jpg", hasError: false },
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
        const updatedTutors = [...tutors, { ...newTutor, id: Date.now() }];
        setTutors(updatedTutors);
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
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tutors" className="nav-link">
                                        Tutors
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
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
                                    <ParentComponent tutors={tutors} />

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
