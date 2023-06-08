// Get DOM elements
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Add task
addButton.addEventListener('click', function() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<span>${taskText}</span> <button class="delete-button">Delete</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    // Add delete event listener
    const deleteButton = taskItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
      taskItem.remove();
    });
  }
});
