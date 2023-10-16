document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.createElement("input");
  checkbox.type = checkbox;

  taskInput.addEventListener("keyup", (event) => {
    event.key === "Enter" ? addTask() : null;

    /**
     * Esto es lo mismo que lo anterior, es el operador ternario if-else
     * if (event.key === "Enter") {
     *  addTask();
     *  return;
     * }
     */
  });

  //Agragar elemento con click
  btnTask.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    const taskLabel = document.createElement("label");
    taskLabel.textContent = 
  });

  //Limpiar lista
  cleanList.addEventListener("click", () => {
    taskList.innerHTML = ``;
  });
});
