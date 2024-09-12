import { ToDo } from "./todo.js";


const todo = new ToDo();

const tasks = ["task 1", "task 2", "task 3", "task 4", "task 5", "task 6"];
const tasksCompleted = ["task 1", "task 2", "task 6"];

tasks.forEach(element => {
    todo.addTask(element);
});

tasksCompleted.forEach(element => {
    todo.completeTask(element);
});

todo.listAllTasks();