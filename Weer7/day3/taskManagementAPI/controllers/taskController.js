import { writeTask, readAllTasks, changeTask, deleteTaskFromFail } from '../services/taskService.js';
import {validateTaskData} from "../middlewares/validateTask.js";
import { resolve } from 'path';
const tasksFilePath = resolve('data', 'tasks.json');

export const createTask = async (req, res) => {
    try {
        const {title, complited} = req.body;
        const task = {
            id:0,
            title:title,
            complited:complited,
        }
        const isValidData = validateTaskData(task);
        if (!isValidData) {
            return res.status(400).json("Data validation failed");
        };
        const taskCreated = await writeTask(tasksFilePath, task);
        console.log(taskCreated);
        res.json(taskCreated);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const fetchAllTask = async (req, res) => {
    const tasks = await readAllTasks(tasksFilePath);
    res.json(tasks);
}


export const fetchTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const tasks = await readAllTasks(tasksFilePath);
        const task = tasks.find(task => task.id == taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


export const updateTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const tasks = await readAllTasks(tasksFilePath);
        const task = tasks.find(task => task.id == taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        const { title, complited } = req.body;
        task.title = title;
        task.complited = complited;
        const isValidData = validateTaskData(task);
        if (!isValidData) {
            return res.status(400).json("Data validation failed");
        }
        console.log(isValidData);
        const taskUpdated = await changeTask(tasksFilePath, task);
        console.log(taskUpdated);
        res.json(taskUpdated);
    }   catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        let tasks = await readAllTasks(tasksFilePath);
        const task = tasks.find(task => task.id == taskId);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        const taskIndex = tasks.findIndex(task => task.id == taskId);
        tasks.splice(taskIndex, 1);
        let  tasksNew =  await deleteTaskFromFail(tasksFilePath,tasks);
        res.json(tasksNew);
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}
