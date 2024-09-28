import React, {useEffect, useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ImageSearch from './components/ImageSearch';
import './App.css'// Импорт компонента ImageSearch

const App = () => {
    const categories = ['Mountains', 'Beaches', 'Birds', 'Food', 'Faces', 'Galaxy', 'Ocean']; // Пример категорий
    const navigate = useNavigate(); // Навигация с помощью useNavigate
    const [searchTerm, setSearchTerm] = useState('nature'); // Стейт для произвольного поиска

    const handleCategoryClick = (category) => {
        navigate(`/search/${category}`); // Навигация по категориям
    };

    useEffect(() => {
        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm}`); // Навигация по произвольному поисковому запросу
            setSearchTerm('');
        }
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search/${searchTerm}`); // Навигация по произвольному поисковому запросу
            setSearchTerm('');
        }
    };


    return (
        <div>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Lobster"
                      rel="stylesheet"/>
                <link rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            </head>

            <div className="App">
                <h1>SnapShot</h1>
                <nav>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Обновляем стейт при вводе
                            placeholder="Search for anything..."
                        />
                        <button id="search" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                    <div className="main-nav">
                            {categories.map((category) => (
                                <button key={category} onClick={() => handleCategoryClick(category)}>
                                    {category}
                                </button>
                            ))}
                        </div>
                </nav>
             </div>

                <Routes>
                <Route path="/search/:category" element={<ImageSearch/>}/>
            </Routes>
        </div>
    );
};

export default App;
