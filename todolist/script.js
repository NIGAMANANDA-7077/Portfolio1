function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const listItem = document.createElement("li");

  // Task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => taskSpan.classList.toggle("completed");

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => taskList.removeChild(listItem);

  listItem.appendChild(completeBtn);
  listItem.appendChild(taskSpan);
  listItem.appendChild(removeBtn);
  taskList.appendChild(listItem);

  taskInput.value = "";
}

// Add task with Enter key
document.getElementById("taskInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});
// Typing effect for placeholder
const input = document.getElementById("taskInput");
const placeholderText = "What needs to be done?";
let i = 0;

function typePlaceholder() {
  if (i <= placeholderText.length) {
    input.setAttribute("placeholder", placeholderText.substring(0, i));
    i++;
    setTimeout(typePlaceholder, 100); // typing speed (ms)
  } else {
    // Restart after delay
    setTimeout(() => {
      i = 0;
      typePlaceholder();
    }, 2000); // wait 2s before repeating
  }
}

typePlaceholder();
