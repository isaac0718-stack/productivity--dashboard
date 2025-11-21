// ----- TASKS -----
function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = ${task} <span class="delete-btn" onclick="deleteTask(${index})">✖</span>;
    list.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();

  if (task === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
  loadTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

// ----- HABITS -----
let habitList = ["Drink Water", "Read 10 mins", "Exercise", "Meditate"];

function loadHabits() {
  let habitsDiv = document.getElementById("habits");
  let habitStatus = JSON.parse(localStorage.getItem("habits")) || {};

  habitsDiv.innerHTML = "";

  habitList.forEach(habit => {
    let div = document.createElement("div");
    div.className = "habit";

    if (habitStatus[habit]) div.classList.add("done");

    div.textContent = habit;

    div.onclick = () => {
      habitStatus[habit] = !habitStatus[habit];
      localStorage.setItem("habits", JSON.stringify(habitStatus));
      loadHabits();
    };

    habitsDiv.appendChild(div);
  });
}

// ----- QUOTE -----
let quotes = [
  "Small steps every day.",
  "Discipline beats motivation.",
  "You are your only limit.",
  "Start where you are. Use what you have."
];

function loadQuote() {
  let q = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteBox").textContent = q;
}

// ----- ON LOAD -----
window.onload = () => {
  loadTasks();
  loadHabits();
  loadQuote();
};
