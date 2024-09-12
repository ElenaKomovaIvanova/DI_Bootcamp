export class ToDo {

    constructor(todo) {
        this.todo = [];
    }

    addTask(name) {
        let task = {
            task: name,
            completed: false,
            index: this.todo.length + 1
        }

        this.todo.push(task);
    }

    completeTask(name) {
        this.todo.forEach(task => {
            if (task.task === name) {
                task.completed = true;
            }
        });

    }

    listAllTasks() {
        this.todo.forEach(task => {
            console.log(task);
        });
    }
}

