// Show function
export const arrayList = [
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

export const containerElement = document.getElementById('container');

export const taskList = '';

// find max index of tasks
// export const findMaxIndex = (objects, ) => {
//   let indexArr = objects.map((element) => element.index);
//   maxIndex = Math.max(...indexArr)
// }

// Show task list
// export const showOrderedList = (container, objects, index, tasks) => {
//   for (let i = 0; i <= index; i += 1) {
//     for (let j = 0; j < objects.length; j += 1) {
//       if (objects[j].index === i) {
//         tasks += `
//           <li>
//             <span>
//               <input type="checkbox">
//               <label for="#">
//               <i class="fa fa-check hide"></i>
//               ${objects[j].description}</label>
//             </span>
//             <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
//           </li>
//           `;
//       }
//     }
//   }
//   container.innerHTML = tasks;
// }

// Add task function
// export const addTask =
