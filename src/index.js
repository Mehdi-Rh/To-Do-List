import './style.css';
import ToDo from './classes.js';

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#add');

const clear = document.querySelector('#clear');
const checkbox = document.getElementsByClassName('checkbox');

const taskList = new ToDo();

addBtn.addEventListener('click', () => {
  event.preventDefault();
  if (input.value.length > 0) {
    taskList.description = input.value;
    taskList.addTask();

    ToDo.displayTask();
    input.value = '';
  }
});

clear.addEventListener('click', () => {
  event.preventDefault();
  const deleteTask = new ToDo(input.innerText);
  for (let i = checkbox.length - 1; i >= 0; i--) {
    if (checkbox[i].checked == true) {
      checkbox[i].parentElement.parentElement.remove();
      taskList.removeTask(i);
    }
  }
  taskList.setIndex();
  ToDo.displayTask();
});

ToDo.displayTask();

const taskBox = document.getElementsByClassName('task');
if (taskBox.length > 0) {
  for (let i = 0; i < taskBox.length; i++) {
    taskBox[i].addEventListener('input', (e) => {
      event.preventDefault();
      taskList.updateTask(taskBox[i], i);
    });
  }
}
