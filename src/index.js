import _ from 'lodash';
import printMe from './print.js';
import './style.css';

var arrayList = [
  {  
    "description": "Wash the dishes",
    "completed": false,
    "index": 0
  },
  {  
    "description": "Complete To do List Project",
    "completed": false,
    "index": 1
  }
]

let taskList =""
let container = document.getElementById('container');


for (let i=0; i < arrayList.length; i++) {
  for (let element of arrayList) {
    if ( element.index === i) {
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
      `
    }
  } 
}

container.innerHTML = taskList;
