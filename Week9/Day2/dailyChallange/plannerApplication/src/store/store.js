import { createStore } from 'redux';  // Импортируем функцию для создания хранилища
import taskReducer from '../reducers/taskReducer';  // Импортируем редьюсер

// Создаем store с использованием редьюсера
const store = createStore(taskReducer);

export default store;
