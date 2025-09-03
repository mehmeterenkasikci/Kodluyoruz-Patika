let listDOM = document.querySelector("#list");
let taskInputDOM = document.querySelector("#task");

// Bootstrap toast seçicileri
let successToast = document.querySelector(".toast.success");
let errorToast = document.querySelector(".toast.error");


window.onload = function () {
  let storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  storedTasks.forEach(task => {
    addElement(task.name, task.checked, false);
  });
};


function newElement() {
  let taskValue = taskInputDOM.value.trim();

  if (taskValue === "") {
    showToast(errorToast);
  } else {
    addElement(taskValue, false, true);
    showToast(successToast);
  }
  taskInputDOM.value = "";
}

function addElement(taskText, checked = false, save = true) {
  let li = document.createElement("li");
  li.textContent = taskText;

  if (checked) {
    li.classList.add("checked");
  }

  li.addEventListener("click", function () {
    li.classList.toggle("checked");
    updateStorage();
  });

  let span = document.createElement("span");
  span.textContent = "×";
  span.className = "close";
  span.onclick = function () {
    li.remove();
    updateStorage();
  };

  li.appendChild(span);
  listDOM.appendChild(li);

  if (save) updateStorage();
}

function showToast(toastElement) {
  $(toastElement).toast("show");
}

function updateStorage() {
  let tasks = [];
  document.querySelectorAll("#list li").forEach(li => {
    tasks.push({
      name: li.firstChild.textContent.trim(),
      checked: li.classList.contains("checked")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}