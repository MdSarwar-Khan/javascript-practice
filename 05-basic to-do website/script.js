const overduebtn = document.querySelector(".overdue");
const pendingbtn = document.querySelector(".pending");
const taskList = document.querySelector("#tasklist");

const addtaskbtn = document.getElementById("addbtn");
const addtasksection = document.querySelector(".addtask");
const submitbtn = document.getElementById("submit");
const taskname = document.getElementById("task_name");
const duedate = document.getElementById("tdate");

addtaskbtn.addEventListener("click", ()=>{
    addtasksection.hidden = false;
})

let tasks=[];

submitbtn.addEventListener("click", () => {

    const task = {
        name: taskname.value,
        completion_dt: duedate.value,
        creation: new Date()
    };

    tasks.push(task);

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span class="num">${index + 1}</span>

            <span class="check">
                <input type="checkbox">
            </span>

            <span class="task">${task.name}</span>

            <span class="status">Pending</span>

            <span class="create">
                ${task.creation.toLocaleDateString()}
            </span>

            <span class="complete">
                ${task.completion_dt}
            </span>
        `;

        taskList.appendChild(li);
    });

    addtasksection.hidden = true;
});

