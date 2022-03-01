import './style.css';
import ToDo from './classes.js';

export const containerElement = document.getElementById('container');
export const checkbox = document.getElementsByClassName('checkbox');

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#add');
const clearCompleted = document.querySelector('#clear-completed');
const taskBox = document.getElementsByClassName('task');
const deleteIcon = document.getElementsByClassName('delete-icon');
const toHide = document.getElementsByClassName('to-hide');
const taskList = new ToDo();

taskList.displayTask();

// Add task
addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value.length > 0) {
    taskList.description = input.value;
    taskList.addTask();
  }
  document.location.reload(true);
  ToDo.displayTask();
  input.value = '';
});

// Clear completed
clearCompleted.addEventListener('click', (event) => {
  event.preventDefault();
  for (let i = checkbox.length - 1; i >= 0; i -= 1) {
    if (checkbox[i].checked === true) {
      checkbox[i].parentElement.parentElement.remove();
      taskList.removeTask(i);
    }
  }
  taskList.setIndex();
  document.location.reload(true);
  ToDo.displayTask();
});

// Update task
if (taskBox.length > 0) {
  for (let i = 0; i < taskBox.length; i += 1) {
    taskBox[i].addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        taskList.updateTask(taskBox[i], i);
        document.location.reload(true);
        ToDo.displayTask();
      }
    });
  }
}

/* ********* Display delete icon ********* */
// function to show and hide delete icon
const hideDisp = (itemToHide, itemToDisplay, index) => {
  itemToHide[index].style.display = ('none');
  itemToDisplay[index].style.display = ('block');
};

// Event to display delete icon
document.addEventListener('click', (e) => {
  const index = e.target.classList[1];

  if (e.target.classList.contains('task-delete')) {
    for (let i = 0; i < deleteIcon.length; i += 1) {
      e.preventDefault();
      hideDisp(deleteIcon, toHide, i);
    }

    const deleteIndex = e.target.classList[1];
    hideDisp(toHide, deleteIcon, deleteIndex);
  }
  // Set completed or incompleted task
  else if (e.target.classList.contains('checkbox')) {
    taskList.setCompleted(e.target.checked, index);
  } else {
    for (let i = 0; i < deleteIcon.length; i += 1) {
      e.preventDefault();
      hideDisp(deleteIcon, toHide, i);
    }
  }
});

// Event to delete a task when clicking on delete icon

for (let i = 0; i < deleteIcon.length; i += 1) {
  const element = deleteIcon[i];
  element.addEventListener('click', (e) => {
    e.preventDefault();
    element.parentElement.remove();
    taskList.removeTask(i);
    taskList.setIndex();
    document.location.reload(true);
  });
}
