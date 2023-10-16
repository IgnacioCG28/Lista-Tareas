document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.createElement("input");
  checkbox.type = checkbox;

  taskInput.addEventListener("keyup", (event) => {
    event.key === "Enter" ? addTask() : null;

    if (event.key === "Enter") {
      addTask();
      return;
    }
  });

  //Agragar elemento con click
  btnTask.addEventListener("click", () => {
    taskList.innerHTML = `${checkbox} hola`;
  });

  //Limpiar lista
  cleanList.addEventListener("click", () => {
    taskList.innerHTML = ``;
  });
});
