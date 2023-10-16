document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      // Compara con el código de tecla "Enter" (13)
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Está vacío, introduce algo.");
      } else {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        checkbox.addEventListener("change", () => {
          taskLabel.classList.toggle("completed", checkbox.checked);
        });

        li.appendChild(checkbox);
        li.appendChild(taskLabel);

        taskList.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
      }
    }
  });

  btnTask.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Obtener el valor del input y eliminar espacios en blanco
  
    if (taskText === "") {
      alert("Está vacío, introduce algo.");
    } else {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
  
      const taskLabel = document.createElement("label");
      taskLabel.textContent = taskText;
  
      checkbox.addEventListener("change", () => {
        taskLabel.classList.toggle("completed", checkbox.checked);
      });
  
      li.appendChild(checkbox);
      li.appendChild(taskLabel);
  
      taskList.appendChild(li);
  
      taskInput.value = "";
      taskInput.focus();
    }
  });
  

  cleanList.addEventListener("click", () => {
    const task = document.querySelectorAll("li");

    task.forEach((task) => taskList.removeChild(task));
  });
});
