// import _ from 'lodash';
// import printMe from './print.js';
import './style.css';

const arrayList = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete To do List Project',
    completed: false,
    index: 1,
  },
];

let taskList = '';
const container = document.getElementById('container');

for (let i = 0; i < arrayList.length; i+=1) {
  for (const element of arrayList) {
    if (element.index === i) {
      taskList += `
      <li>
        <span>
          <input type="checkbox">
          <label for="#">
          <i class="fa fa-check hide"></i>
          ${element.description}</label>
        </span>
        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </li>
      `;
    }
  }
}

container.innerHTML = taskList;
