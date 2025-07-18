document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const addTodoButton = document.getElementById("add-todo");
    const todoList = document.getElementById("todo-list");
  
    addTodoButton.addEventListener("click", addTodo);
  
    function addTodo() {
      const task = todoInput.value.trim();
      if (task === "") {
        alert("Please enter a task!");
        return;
      }
  
      const li = document.createElement("li");
      li.textContent = task;
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => li.remove());
  
      li.appendChild(deleteButton);
  
      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      todoList.appendChild(li);
      todoInput.value = "";
    }
  });
  