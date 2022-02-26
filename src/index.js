import './style.css';
import ToDo from './classes.js';

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#add');

const clear = document.querySelector('#clear');
const checkbox = document.getElementsByClassName('checkbox');
const taskBox = document.getElementsByClassName('task');

const taskList = new ToDo();
ToDo.displayTask();

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value.length > 0) {
    taskList.description = input.value;
    taskList.addTask();
  }
  document.location.reload(true);
  ToDo.displayTask();
  input.value = '';
  console.log(taskBox);
});

clear.addEventListener('click', (event) => {
  event.preventDefault();
  for (let i = checkbox.length - 1; i >= 0; i--) {
    if (checkbox[i].checked == true) {
      checkbox[i].parentElement.parentElement.remove();
      taskList.removeTask(i);
    }
  }
  taskList.setIndex();
  document.location.reload(true);
  ToDo.displayTask();
  console.log(taskBox);
});

if (taskBox.length > 0) {
  for (let i = 0; i < taskBox.length; i++) {
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
