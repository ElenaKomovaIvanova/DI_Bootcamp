import React from 'react';
import { createRoot } from 'react-dom/client'; // Используем createRoot
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter
import App from './App.jsx';
import './index.css';


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
