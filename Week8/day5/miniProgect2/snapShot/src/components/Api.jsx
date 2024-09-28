import { createClient } from 'pexels';

const apiKey = import.meta.env.VITE_API_KEY
const client = createClient(apiKey);

export const fetchImages = async (searchQuery) => {
    try {
        const response = await client.photos.search({ query: searchQuery, per_page: 30 });
        return response.photos; // Возвращаем только массив фотографий
    } catch (error) {
        console.error('Error loading images:', error);
    }
};
