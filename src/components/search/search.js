import React, { useState } from 'react';
import './search.css';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск репетиторов..."
                className="search-input"
            />
            <button type="submit" className="search-button">Поиск</button>
        </form>
    );
};

export default Search;
