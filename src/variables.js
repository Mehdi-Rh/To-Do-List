const containerElement = document.getElementById('container');
const checkbox = document.getElementsByClassName('checkbox');

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#add');
const clearCompleted = document.querySelector('#clear-completed');
const taskBox = document.getElementsByClassName('task');
const deleteIcon = document.getElementsByClassName('delete-icon');
const toHide = document.getElementsByClassName('to-hide');

export {
  containerElement, checkbox, addBtn, input, clearCompleted, taskBox, deleteIcon, toHide,
};