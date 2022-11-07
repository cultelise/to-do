"use strict";
const projectList = document.getElementById("projectList");
const projectButton = document.getElementById('addProjectButton');
const tasks = document.getElementById('tasks');
const taskButton = document.getElementById('addTaskButton');
console.log(projectButton);
document.addEventListener('DOMContentLoaded', () => {
    projectButton === null || projectButton === void 0 ? void 0 : projectButton.addEventListener('click', newProjectInput);
    taskButton === null || taskButton === void 0 ? void 0 : taskButton.addEventListener('click', () => console.log(1));
});
let counter = 0;
const newProjectInput = () => {
    console.log(1);
    const newInput = document.createElement(`input`);
    newInput.classList.add(`input${counter}`);
    newInput.addEventListener('blur', () => inputExit);
    console.log(newInput);
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(newInput);
    inputExit();
};
const inputExit = () => {
    const inputElement = document.querySelector(`.input${counter}`);
    const inputValue = inputElement.value;
    inputElement === null || inputElement === void 0 ? void 0 : inputElement.remove;
    return newProject(inputValue);
};
const AddThing = () => {
    const div = document.createElement('div');
    return { div };
};
const newProject = (input) => {
    title: input;
};
const AddProject = (name) => {
    const input = document.createElement('input');
    input.dirName;
    return { name };
};
function checkList() {
}
