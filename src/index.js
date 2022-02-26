import './style.css';
import ToDo from "./classes.js"


const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#add');

const clear = document.querySelector('#clear')
const checkbox = document.getElementsByClassName('checkbox');


var taskList = new ToDo();

addBtn.addEventListener('click', () => {
  event.preventDefault();
  if (input.value.length > 0) {
    // const newtask = new ToDo(input.value);
    // newtask.addTask()
    taskList.description = input.value
    taskList.addTask()

    ToDo.displayTask()
    input.value = ''
  }
});

clear.addEventListener('click', () => {
  event.preventDefault();
  const deleteTask = new ToDo(input.innerText);
  for (let i = checkbox.length-1; i >= 0; i--) {
    if (checkbox[i].checked == true) {
      checkbox[i].parentElement.parentElement.remove()
      // deleteTask.removeTask(i)
      taskList.removeTask(i)
    }
  }
  // deleteTask.setIndex()
  taskList.setIndex()
  ToDo.displayTask()
});

ToDo.displayTask();

const taskBox = document.getElementsByClassName('task');
if (taskBox.length > 0) {
  for (let i = 0; i < taskBox.length; i++) {
    taskBox[i].addEventListener('input', (e) => {
      // if (e.key === 'Enter') {
      //   event.preventDefault();
      //   taskList.updateTask(taskBox[i], i)
      // }
        event.preventDefault();
        taskList.updateTask(taskBox[i], i)
    }); 
}};

