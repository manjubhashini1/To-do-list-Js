const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById("taskList");

function addTask() {
    console.log(taskInput);
    const taskText = taskInput.value.trim();
    if(taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        //once task is completed, when u click on the task it goes to complete state
        li.addEventListener('click', completeTask);

        //add del button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deleteTask);
        li.appendChild(deleteBtn);
    }
}

function completeTask(event) {
    const task = event.target;
    task.classList.toggle('completed');
    console.log(task);
}

function deleteTask(event) {
    const task = event.target.parentElement;
    taskList.removeChild(task);
}

const arr = ["abcde", 
"fghij",
"klmno",
"pqrst",
"uvwxy",
"z"
];
console.log(...arr.map(str => str.split('')));