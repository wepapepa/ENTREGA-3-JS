//faltantes: operadores logicos para resumir funciones

document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
});

function addTask() { //working, i need to add an if else??
    const taskInput = document.getElementById("newTask");
    if (taskInput.value.trim() === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    const tasks = getTasks();
    tasks.push({ content: taskInput.value, done: false });

    saveTasks(tasks);
    renderTasks(tasks);
    taskInput.value = "";
}

function getTasks() {
    const storedTasks = sessionStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];//working
}

function saveTasks(tasks) {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(tasks) {
    const listElement = document.getElementById("taskList");
    listElement.innerHTML = '';
    tasks.forEach((task, index) => {//working but i dont know why it is working
        const taskElement = document.createElement("li");
        taskElement.textContent = task.content;
        taskElement.onclick = () => toggleTaskDone(index);
        if (task.done) {
            taskElement.style.textDecoration = "line-through";
            
        }
        listElement.appendChild(taskElement);
    });
}

function toggleTaskDone(index) { //working
    const tasks = getTasks();
    tasks[index].done = !tasks[index].done; //operador not 
    saveTasks(tasks);
    renderTasks(tasks);
}

function loadTasks() { //working
    const tasks = getTasks();
    renderTasks(tasks);
}

taskElement.addEventListener("click", () => { //fix this i dont know why it isnt working :(
    Swal.fire({
    title: "Tarea completada!",
    text: "Felicidades rockstar!",
    icon: "success"
});
});