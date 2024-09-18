import fs from 'fs/promises';

export const writeTask = async (filePath, newTask) => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(fileData);
        newTask.id = tasks.length+1;
        tasks.push(newTask);
        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
        return newTask;
    } catch (error) {
        throw new Error('Error writing tasks file');
    }
};

export const readAllTasks = async (filePath) => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(fileData);
        return tasks;
    } catch (error) {
        throw new Error('Error reading tasks file');
    }
}

export const changeTask = async (filePath, task) => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        const tasks = JSON.parse(fileData);
        tasks[task.id] = task;
        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
        return task;
    } catch (error) {
        throw new Error('Error writing tasks file');
    }
};

export const deleteTaskFromFail = async (filePath, tasks) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(tasks, null, 2));
        return tasks;
    } catch (error) {
        throw new Error('Error writing tasks file');
    }
}