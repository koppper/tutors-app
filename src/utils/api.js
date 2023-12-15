export const getTutors = async () => {
    return Promise.resolve([
        { id: 1, name: "Иван Иванов" },
        { id: 2, name: "Мария Петрова" }
    ]);
};

export const addTutor = async (tutor) => {
};

export const updateTutor = async (tutor) => {
};

// utils/api.js
// src/utils/api.js
export const fetchTutors = async (searchTerm) => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const mockTutors = [
        { id: 1, name: "Иван Иванов" },
        { id: 2, name: "Мария Петрова" },
        { id: 3, name: "Алексей Сидоров" },
        // Дополнительные моковые данные
    ];

    if (searchTerm) {
        return mockTutors.filter(tutor =>
            tutor.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    return mockTutors;
};

