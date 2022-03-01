import { containerElement, checkbox } from './variables.js';

export default class ToDo {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }

  addTask() {
    if (ToDo.task.length === 0) {
      this.index = 0;
    } else {
      const indexArr = ToDo.task.map((element) => element.index);
      const maxIndex = Math.max(...indexArr);
      this.index = maxIndex + 1;
    }

    ToDo.task.push(this);
    localStorage.setItem('taskInfo', JSON.stringify(ToDo.task));
  }

  setIndex() {
    this.completed = false;
    const taskNewIndex = ToDo.task;
    for (let i = 0; i < taskNewIndex.length; i += 1) {
      taskNewIndex[i].index = i;
    }
    localStorage.setItem('taskInfo', JSON.stringify(taskNewIndex));
  }

  updateTask(paragraph, index) {
    this.completed = false;
    const update = JSON.parse(localStorage.getItem('taskInfo'));
    update[index].description = paragraph.innerText;
    localStorage.setItem('taskInfo', JSON.stringify(update));
  }

  removeTask(removeIndex) {
    this.completed = false;
    let selection = ToDo.task;
    selection = selection.splice(removeIndex, 1);
    localStorage.setItem('taskInfo', JSON.stringify(selection));
  }

  setCompleted(completed, index) {
    this.completed = false;
    if (completed) {
      ToDo.task[index].completed = true;
    } else {
      ToDo.task[index].completed = false;
    }
    localStorage.setItem('taskInfo', JSON.stringify(ToDo.task));
  }

  maintainCompleted(box) {
    this.completed = false;
    const list = ToDo.task;
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].completed) {
        box[i].checked = true;
      }
    }
  }

  displayTask() {
    let tasks = '';
    ToDo.task = JSON.parse(localStorage.getItem('taskInfo'));
    if (ToDo.task === null) {
      ToDo.task = [];
    } else {
      ToDo.task.forEach((element) => {
        tasks += `
            <li class="task-delete ${element.index}">
              <span class="task-delete ${element.index}">
                <input type="checkbox" class="checkbox ${element.index}">
                <label contenteditable="true" class="task task-delete ${element.index}" for="#">
                ${element.description}</label>
              </span>
              <i class="fa fa-ellipsis-v to-hide" aria-hidden="true"></i>
              <i class="fa fa-times delete-icon"></i>
            </li>
            `;
      });
    }

    containerElement.innerHTML = tasks;
    this.maintainCompleted(checkbox);
  }
}
