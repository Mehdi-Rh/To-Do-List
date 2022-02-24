import './style.css';
// import arrayList from "src/functionalities.js"

const arrayList = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 10,
  },
  {
    description: 'Complete To do List Project',
    completed: false,
    index: 5,
  },
];

const containerElement = document.getElementById('container');
const indexArr = arrayList.map((element) => element.index);
let taskList = '';

const showOrderedList = (container, objects, index, tasks) => {
  for (let i = 0; i <= Math.max(...index); i += 1) {
    for (let j = 0; j < objects.length; j += 1) {
      if (objects[j].index === i) {
        tasks += `
          <li>
            <span>
              <input type="checkbox">
              <label for="#">
              <i class="fa fa-check hide"></i>
              ${objects[j].description}</label>
            </span>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </li>
          `;
      }
    }
  }
  container.innerHTML = tasks;
}

showOrderedList(containerElement, arrayList, indexArr, taskList)


