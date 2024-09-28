import React, { useState } from 'react';

const ReactForms2 = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: ""
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target; // Извлекаем name и value
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы
        setSubmittedData(formData); // Сохраняем введенные данные
        setFormData({ firstName: "", lastName: "", phone: "", email: "" }); // Сбрасываем форму
    };

    const handleReset = () => {
        setSubmittedData(null); // Возвращаемся к форме
        setFormData({ firstName: "", lastName: "", phone: "", email: "" }); // Сбрасываем данные формы
    };

    return (
        <>
            {submittedData ? (
                <div style={{ border: "1px solid black", background:"lightblue", borderRadius: "10px"}}>
                    <p>{submittedData.firstName}, {submittedData.lastName}</p>
                    <p>{submittedData.phone}</p>
                    <p>{submittedData.email}</p>
                    <button onClick={handleReset}>Reset</button> {/* Кнопка сброса */}
                </div>
            ) : (
                <div style={{ border: "1px solid black", background:"lightblue", borderRadius: "10px"}}>
                    <h1>Welcome</h1>
                    <h3>Please provide your information below</h3>
                    <form onSubmit={handleSubmit} >
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" /><br />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" /><br />
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" /><br />
                        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" /><br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default ReactForms2;
