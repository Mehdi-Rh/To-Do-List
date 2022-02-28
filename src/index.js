import './style.css';
import ToDo from './classes.js';

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#add');

const clearCompleted = document.querySelector('#clear-completed');
const checkbox = document.getElementsByClassName('checkbox');
const taskBox = document.getElementsByClassName('task');
const deleteIcon = document.getElementsByClassName('delete-icon')
const toHide = document.getElementsByClassName('to-hide')

const taskList = new ToDo();
ToDo.displayTask();

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

// Display delete icon

const hideDisp = (itemToHide, itemToDisplay, index) => {
  itemToHide[index].style.display = ('none')
  itemToDisplay[index].style.display = ('block')  
}
document.addEventListener('click', (e) => {
  if (e.target.classList.contains("task")) {
 
    for (let i = 0; i < deleteIcon.length; i +=1) {
        console.log(2)
        e.preventDefault();
        hideDisp(deleteIcon, toHide, i)
        // deleteIcon[i].style.display = ('none')
        // toHide[i].style.display = ('block')  
      }
      const j = e.target.classList[1];

      hideDisp(toHide, deleteIcon, j)

      // deleteIcon[j].style.display = ('block');
      // toHide[j].style.display = ('none'); 
    } else {
      for (let i = 0; i < deleteIcon.length; i +=1) {
        console.log(2)
        e.preventDefault();
        hideDisp(deleteIcon, toHide, i)

        // deleteIcon[i].style.display = ('none')
        // toHide[i].style.display = ('block')  
      }
      

    }
  })

