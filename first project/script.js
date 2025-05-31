const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as completed on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task on double-click
  li.addEventListener("dblclick", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
