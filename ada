document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.createElement("input");
  checkbox.type = checkbox;

  taskInput.addEventListener("keyup", (event) => {
    event.keyCode === "Enter" ? addTask() : null;

    /**
     * Esto es lo mismo que lo anterior, es el operador ternario if-else
     * if (event.key === "Enter") {
     *  addTask();
     *  return;
     * }
     */
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Está vacío, introduce algo.");
    }

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    const taskLabel = document.createElement("label");
    taskLabel.textContent = taskText;

    checkbox.addEventListener("change", () => {
      taskLabel.classList.toggle("completed", checkbox.checked);
    });

    li.appendChild(checkbox, taskLabel);

    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  });
});