import React, { useState } from 'react';

const ReacForms = () => {

    const [formData, setFormData] = useState({ title: "", author: "", genre: "", year: "" });
    const [successMessage, setSuccessMessage] = useState('');


    const handleChange = (e) => {
        const { name, value } = e.target; // Извлекаем name и value
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };


    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
        console.log(formData); // Логируем данные формы в консоль
        setSuccessMessage('Book information submitted successfully!');
        setFormData({ title: "", author: "", genre: "", year: "" });
    };

    return (
        <>
            <h3>New Book</h3>
            <form onSubmit={handleSubmit}> {/* Исправлено: убрана лишняя скобка */}
                <input type="text" name="title" onChange={handleChange} placeholder="Title" /><br />
                <input type="text" name="author" onChange={handleChange} placeholder="Author" /><br />
                <input type="text" name="genre" onChange={handleChange} placeholder="Genre" /><br />
                <input type="text" name="year" onChange={handleChange} placeholder="Year Published" /><br />
                <button type="submit">Submit</button>
            </form>
            <p>{successMessage}</p>
        </>
    );
}

export default ReacForms;
