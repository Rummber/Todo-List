const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const taskCounter = document.getElementById("task-counter");
const taskList = document.getElementById("task-list");

let totalTasks = 0;
let completedTasks = 0;

function updateTaskCounter() {
  taskCounter.innerText = `${completedTasks}/${totalTasks} complete`;
}

function addTask() {
  const taskText = taskInput.value;
  
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
   
    checkbox.addEventListener("change", function() {
      if (this.checked) {
        taskItem.classList.add("completed");
        completedTasks++;
      } else {
        taskItem.classList.remove("completed");
        completedTasks--;
      }
      
      updateTaskCounter();
    });
    
    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;
    
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    
    taskList.appendChild(taskItem);
    
    totalTasks++;
    updateTaskCounter();
    
    taskInput.value = "";
  }
}


addButton.addEventListener("click", function(event) {
  event.preventDefault(); 
  addTask();
});


clearButton.addEventListener("click", function(event) {
  event.preventDefault(); 
  taskList.innerHTML = "";
  totalTasks = 0;
  completedTasks = 0;
  updateTaskCounter();
});


window.addEventListener("load", function() {
  taskInput.focus();
});


taskInput.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault(); 
      addTask();
    }
});
