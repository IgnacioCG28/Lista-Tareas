document.addEventListener("DOMContentLoaded", () => {
    const inputTask = document.getElementById("input-task");
    const btnTask = document.getElementById("btn-task");
    const taskList = document.getElementById("task-list");
    const clean = document.getElementById("clean-list");
    const checkbox = document.createElement("input");
    checkbox.type= checkbox;

    btnTask.addEventListener("click", () => {
        const input = inputTask.value;

        taskList.innerHTML = `${checkbox} hola`;

    });

    clean.addEventListener("click", () =>{
        taskList.innerHTML = ``;


    })
});
