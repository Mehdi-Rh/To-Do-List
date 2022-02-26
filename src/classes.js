const containerElement = document.getElementById('container');

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
    const taskNewIndex = ToDo.task;
    for (let i = 0; i < taskNewIndex.length; i++) {
      taskNewIndex[i].index = i;
    }
    localStorage.setItem('taskInfo', JSON.stringify(taskNewIndex));
  }

  updateTask(paragraph, index) {
    ToDo.task[index].description = paragraph.innerText;

    localStorage.setItem('taskInfo', JSON.stringify(ToDo.task));
  }

  removeTask(removeIndex) {
    let selection = ToDo.task;
    selection = selection.splice(removeIndex, 1);
  }

  static displayTask() {
    let tasks = '';
    ToDo.task = JSON.parse(localStorage.getItem('taskInfo'));
    if (ToDo.task === null) {
      ToDo.task = [];
    } else {
      ToDo.task.forEach((element) => {
        tasks += `
            <li>
              <span>
                <input type="checkbox" class="checkbox">
                <label contenteditable="true" class="task" for="#">
                ${element.description}</label>
              </span>
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </li>
            `;
      });
    }
    containerElement.innerHTML = tasks;
  }
}
