document.getElementById('add-task-btn').addEventListener('click', addTask);
document.getElementById('delete-all-btn').addEventListener('click', deleteAllTasks);

function addTask() {
  const taskInput = document.getElementById('task-input').value.trim();
  const dateInput = document.getElementById('date-input').value;
  const taskList = document.getElementById('task-list');

  if (taskInput && dateInput) {
    if (taskList.children[0].textContent === "No task found") {
      taskList.innerHTML = '';
    }

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${taskInput}</td>
      <td>${dateInput}</td>
      <td>Pending</td>
      <td><button onclick="deleteTask(this)">Delete</button></td>
    `;

    taskList.appendChild(row);

    document.getElementById('task-input').value = '';
    document.getElementById('date-input').value = '';
  }
}

function deleteTask(button) {
  const row = button.closest('tr');
  row.remove();

  const taskList = document.getElementById('task-list');
  if (taskList.children.length === 0) {
    taskList.innerHTML = '<tr><td colspan="4">No task found</td></tr>';
  }
}

function deleteAllTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '<tr><td colspan="4">No task found</td></tr>';
}