import './style.css';

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

let taskList = '';
const container = document.getElementById('container');
const indexArr = arrayList.map((element) => element.index);

for (let i = 0; i <= Math.max(...indexArr); i += 1) {
  for (let j = 0; j < arrayList.length; j += 1) {
    if (arrayList[j].index === i) {
      taskList += `
        <li>
          <span>
            <input type="checkbox">
            <label for="#">
            <i class="fa fa-check hide"></i>
            ${arrayList[j].description}</label>
          </span>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </li>
        `;
    }
  }
}

container.innerHTML = taskList;
