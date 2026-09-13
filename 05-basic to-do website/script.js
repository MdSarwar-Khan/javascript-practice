const overduebtn = document.querySelector(".overdue");
const pendingbtn = document.querySelector(".pending");
const taskList = document.querySelector("#tasklist");

const addtaskbtn = document.getElementById("addbtn");
const addtasksection = document.querySelector(".addtask");
const submitbtn = document.getElementById("submit");
const taskname = document.getElementById("task_name");
const duedate = document.getElementById("tdate");

addtaskbtn.addEventListener("click", ()=>{
    addtasksection.hidden = !addtasksection.hidden;

})

let tasks = [];
loadTasks();
renderTasks();
setDateLimits();

submitbtn.addEventListener("click", () => {
    if (!taskname.value.trim() || !duedate.value) {
        alert("Please enter a task name and date.");
        return;
    }

    if (duedate.value < duedate.min || duedate.value > duedate.max) {
        alert("Please pick a date within the allowed range.");
        return;
    }

    const task = {
        name: taskname.value,
        due_dt: duedate.value,     
        completed_dt: null,         
        creation: new Date(),
        done: false
    };

    tasks.push(task);
    saveTasks();
    renderTasks();

    addtasksection.hidden = true;
});

function setDateLimits() {
    const today = new Date();
    const maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() + 2); 

    duedate.min = today.toISOString().split("T")[0];      
    duedate.max = maxDate.toISOString().split("T")[0];     
}



function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        if (task.done) li.classList.add("completed");

        li.innerHTML = `
            <span class="num">${index + 1}</span>

            <span class="check">
                <input type="checkbox" ${task.done ? "checked" : ""}>
            </span>

            <span class="task">${task.name}</span>

            <span class="status">${task.done ? "Completed" : "Pending"}</span>

            <span class="create">
                ${task.creation.toLocaleDateString()}
            </span>

            <span class="complete">
                ${task.done ? task.completed_dt : task.due_dt}
            </span>
        `;

        li.querySelector('input[type="checkbox"]').addEventListener("change", (e) => {
            task.done = e.target.checked;

            if (task.done) {
                task.completed_dt = new Date().toLocaleDateString();
            }
            saveTasks();
            renderTasks();
        });

        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const stored = localStorage.getItem("tasks");
    if (stored) {
        tasks = JSON.parse(stored).map(task => ({
            ...task,
            creation: new Date(task.creation)   // revive string back into a Date object
        }));
    }
}

