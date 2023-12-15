import React, { useState } from 'react';
import TutorList from './components/TutorList';
import EditTutorForm from './components/edit-tutor-form/edit-tutor-form';
// В файле App.js
import Header from './components/header';
import AddTutorForm from './components/add-tutor-form';
import Search from './components/search'
import Footer from './components/footer';
import ParentComponent from "./components/parent-component";

const App = () => {
    const mockTutors = [
        { id: 1, name: "Иван Иванов" },
        { id: 2, name: "Мария Петрова" },
        { id: 3, name: "Алексей Сидоров" },
    ];

    const [tutors, setTutors] = useState(mockTutors);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingTutor, setEditingTutor] = useState(null);
    const [allTutors, setAllTutors] = useState(mockTutors);

    const handleDelete = (id) => {
        const updatedTutors = tutors.filter(tutor => tutor.id !== id);
        setTutors(updatedTutors);
    };
    const handleSearch = (searchTerm) => {
        const filteredTutors = allTutors.filter(tutor =>
            tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTutors(filteredTutors);
    };

    const startEdit = (tutor) => {
        setEditingTutor(tutor);
    };
    const updateTutor = (updatedTutor) => {
        const updatedTutors = tutors.map(tutor =>
            tutor.id === updatedTutor.id ? updatedTutor : tutor
        );
        setTutors(updatedTutors);
    };

    const handleEdit = (updatedTutor) => {
        updateTutor(updatedTutor);
    };

    const handleAdd = (newTutor) => {
        const updatedTutors = [...allTutors, { ...newTutor, id: Date.now() }];
        setAllTutors(updatedTutors);
        setTutors(updatedTutors);
    };

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    };


    return (
        <div>
            <div>
                <div>

                    <Header toggleForm={toggleForm} />
                    {isFormVisible && <AddTutorForm onAddTutor={handleAdd} />}
                    {editingTutor && <EditTutorForm tutor={editingTutor} onTutorUpdated={handleEdit} />}
                    <Search onSearch={handleSearch} />
                    <TutorList tutors={tutors} onEdit={startEdit} onDelete={handleDelete} />
                    <ParentComponent />

                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
