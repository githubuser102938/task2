window.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');
  const taskInput = document.getElementById('task-input');
  const addButton = document.getElementById('add-button');

  // Load tasks from localStorage
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Render saved tasks
  savedTasks.forEach(task => {
    createTaskElement(task);
  });

  // Add task to the list and save to localStorage
  addButton.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
      createTaskElement(task);
      savedTasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(savedTasks));
      taskInput.value = '';
    }
  });

  function createTaskElement(task) {
    const li = document.createElement('li');
    li.textContent = task;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    
    deleteButton.addEventListener('click', () => {
      li.remove();
      const index = savedTasks.indexOf(task);
      if (index > -1) {
        savedTasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(savedTasks));
      }
    });
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
});
