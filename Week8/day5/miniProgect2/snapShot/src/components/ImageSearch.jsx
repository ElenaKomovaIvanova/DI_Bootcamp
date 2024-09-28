import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImages } from './Api.jsx'; // Путь к Api.jsx

const ImageSearch = () => {
    const { category } = useParams(); // Получаем категорию из URL
    const [images, setImages] = useState([]);
    const [searchQuery, setSearchQuery] = useState(category || 'nature'); // Используем категорию или начальный запрос

    useEffect(() => {
        const getImages = async () => {
            const result = await fetchImages(searchQuery); // Выполняем запрос с текущим поисковым запросом
            setImages(result); // Сохраняем полученные изображения в стейте
        };

        getImages(); // Вызов функции получения изображений

    }, [searchQuery]); // Эффект будет срабатывать при изменении searchQuery

    useEffect(() => {
        setSearchQuery(category); // Обновляем searchQuery при изменении категории
    }, [category]); // Эффект будет срабатывать при изменении category

    return (
        <div>
            <h2>Search results for:<br/> {searchQuery}</h2><br/>
            <div className="grid-container">
                {images.length > 0 ? (
                    images.map((image) => (
                        <img key={image.id} src={image.src.medium} alt={image.alt} className="grid-item" />
                    ))
                ) : (
                    <p>No Images Found</p>
                )}
            </div>
        </div>
    );
};

export default ImageSearch;
