import { useDispatch, useSelector } from "react-redux";
import { selectCategoryById, selectTasksByCategory, selectTasksByStatus } from "../features/selesctors.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addCategory, selectCategoryState } from "../features/categoriesSlice.js";
import 'bootstrap/dist/css/bootstrap.min.css';



const CategorySelector = ({ setTasksShow }) => {
    const [newCategory, setNewCategory] = useState('');
    const dispatch = useDispatch();
    const newTasks = useSelector(selectTasksByStatus('New task'));
    const inProgressTasks = useSelector(selectTasksByStatus('Task at work'));
    const completedTasks = useSelector(selectTasksByStatus('Task completed'));

    const [selectedCategory, setSelectedCategory] = useState('');
    const [idCategory, setIdCategory] = useState('');

    const filteredTasks = useSelector(selectTasksByCategory(selectedCategory));
    const category = useSelector(selectCategoryById(idCategory));
    const categories = useSelector(selectCategoryState);

    const handleButtonCategoryAdd = (e) => {
        e.preventDefault();
        const category = { id: uuidv4(), name: newCategory };
        dispatch(addCategory(category));
        setNewCategory('');
    };

    const handleShowNewTasks = () => {
        setTasksShow(newTasks);
    };

    const handleShowAtWork = () => {
        setTasksShow(inProgressTasks);
    };

    const handleShowCompleted = () => {
        setTasksShow(completedTasks);
    };

    const handleFilterTasksByCategory = () => {
        if (!selectedCategory) return;
        setTasksShow(filteredTasks);
    };

    const handleButtonCategoryByID = () => {
        if (!idCategory) return;
        console.log(idCategory);
        setIdCategory(idCategory);
        console.log(category);
    };

    return (
        <div className="container mt-4 ">
            <h3>Category Management</h3>
            <form className="mb-4 ">
                <div className="input-group">
                    <input
                        type='text'
                        className="form-control"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="New Category"
                    />
                    <button type='button' className='btn btn-primary' onClick={handleButtonCategoryAdd}>
                        Add Category
                    </button>
                </div>
            </form>

            <form className="mb-4">
                <div className="input-group">
                    <input
                        type='text'
                        className="form-control"
                        value={idCategory}
                        onChange={(e) => setIdCategory(e.target.value)}
                        placeholder="Select Category by ID"
                    />
                    <button type='button' className='btn btn-secondary' onClick={handleButtonCategoryByID}>
                        Select
                    </button>
                </div>
                <div>
                    {category.length > 0 ? (
                        category.map(item => (
                            <div key={item.id} className="mt-2">{item.name}</div>
                        ))
                    ) : (
                        <div className="text-muted mt-2">No categories available</div>
                    )}
                </div>
            </form>

            <div>
                <h4>Select a category to filter tasks:</h4>
                <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.length > 0 ? (
                        categories.map(category => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))
                    ) : (
                        <option disabled>No categories available</option>
                    )}
                </select>
                <button type='button' className='btn btn-info mt-2' onClick={handleFilterTasksByCategory}>Filter</button>
            </div>

            <div className="mt-4">
                <button className='btn btn-outline-primary' onClick={handleShowNewTasks}>Show New Tasks</button>
                <button className='btn btn-outline-warning ms-2' onClick={handleShowAtWork}>Show Tasks in Progress</button>
                <button className='btn btn-outline-success ms-2' onClick={handleShowCompleted}>Show Completed Tasks</button>
            </div>
        </div>
    );
};

export default CategorySelector;
