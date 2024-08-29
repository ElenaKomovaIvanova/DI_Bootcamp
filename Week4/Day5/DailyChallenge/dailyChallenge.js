const tasks = [];
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const inputField = document.getElementById('textInput');
    const task = inputField.value;

    if (task !== '') {
        tasks.push(task);
        inputField.value = '';

        renderTasks();
    } else {
        console.log('Input is empty. Please enter a task.');
    }
}

function renderTasks() {
    const listTasks = document.querySelector('.listTasks');
    listTasks.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const newTask = document.createElement('div');
        newTask.classList.add('task-container');

        
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-button');
        removeButton.textContent = 'cancel'; 
        removeButton.addEventListener('click', () => deleteTask(index));
        newTask.appendChild(removeButton);

    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        checkbox.addEventListener('change', function () {
            taskComplete(this);
        });
        newTask.appendChild(checkbox);

       
        const taskText = document.createElement('span');
        taskText.classList.add('task-text');
        taskText.textContent = task;
        newTask.appendChild(taskText);

        listTasks.appendChild(newTask);
    });
}


function taskComplete(checkbox) {
    const taskText = checkbox.nextSibling; 
    if (checkbox.checked) {
        taskText.classList.add('completed')
    } else {
        taskText.classList.remove('completed');
    }
}

function deleteTask(index) {
    tasks.splice(index, 1); 
    renderTasks(); 
}
