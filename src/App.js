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
            description: "Опытный репетитор по математике. Помогает ученикам развить алгоритмическое мышление, освоить сложные темы и подготовиться к успешной сдаче экзаменов.",
            experience: "Более 10 лет опыта преподавания математики в школах и университетах.",
            about: "Люблю подходить к обучению творчески, используя игры и практические задания для лучшего усвоения материала."
        },
        {
            id: 2,
            name: "Мария Петрова",
            imageUrl: "maria.jpg",
            hasError: false,
            category: "Английский",
            description: "Страстный преподаватель английского языка и литературы. Специализируется на формировании навыков общения, понимания английской речи и литературного анализа.",
            experience: "Работаю в сфере образования более 7 лет, в том числе преподаватель английского в международной школе.",
            about: "Уверена, что каждый студент способен достичь высоких результатов, при условии индивидуального подхода и мотивации."
        },
        {
            id: 3,
            name: "Алексей Сидоров",
            imageUrl: "alexei.jpg",
            hasError: false,
            category: "Физика",
            description: "Энтузиаст по физике с умением делать сложные концепции понятными и интересными. Помогает студентам проникнуть в суть физических явлений и освоить применение законов физики на практике.",
            experience: "Работал инженером в научно-исследовательском институте, затем преподавал физику в университете.",
            about: "Люблю проводить демонстрационные эксперименты, чтобы показать, как физика применяется в повседневной жизни."
        },
        {
            id: 4,
            name: "Екатерина Новикова",
            imageUrl: "ekaterina.jpg",
            hasError: false,
            category: "Химия",
            description: "Профессиональный репетитор по химии. Организует увлекательные эксперименты и лабораторные работы, чтобы привить любовь к науке и познавательный интерес.",
            experience: "Работала в качестве химического аналитика в крупной лаборатории, имеет опыт работы в школе и на дополнительных образовательных курсах.",
            about: "Вижу свою миссию в том, чтобы сделать изучение химии увлекательным и доступным для всех."
        },
        {
            id: 5,
            name: "Дмитрий Смирнов",
            imageUrl: "dmitry.jpg",
            hasError: false,
            category: "История",
            description: "Захватывающий рассказчик и репетитор по истории. Способствует глубокому пониманию прошлого, развивает критическое мышление и аналитические способности.",
            experience: "Преподавал историю в школе, автор научно-популярных статей о исторических событиях.",
            about: "Интересуюсь историей с детства и стремлюсь поделиться своими знаниями и страстью к прошлому с учениками."
        },
        {
            id: 6,
            name: "Анна Кузнецова",
            imageUrl: "anna.jpg",
            hasError: false,
            category: "Литература",
            description: "Литературный критик и репетитор по литературе. Помогает раскрывать творческий потенциал, развивает литературное вкусовщество и аналитические навыки.",
            experience: "Работала в издательстве редактором литературных изданий, преподавала литературу в высших учебных заведениях.",
            about: "Вижу свою задачу в том, чтобы помочь ученикам не только понять тексты, но и найти в них новые смыслы и идеи."
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
