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
const projects = [];
let counter = 0;
const newProjectInput = () => {
    console.log(1);
    const newInput = document.createElement(`input`);
    newInput.classList.add(`input${counter}`);
    newInput.addEventListener('change', () => { inputExit(); console.log(projects); });
    console.log(newInput);
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(newInput);
};
const inputExit = () => {
    const inputElement = document.querySelector(`.input${counter}`);
    const inputValue = inputElement.value;
    inputElement === null || inputElement === void 0 ? void 0 : inputElement.remove();
    AddProject(inputValue);
    return projects.push(newProject(inputValue.toString()));
};
const AddThing = () => {
    const div = document.createElement('div');
    return { div };
};
const newProject = (input) => {
    return { title: input };
};
const AddProject = (inputValue) => {
    const inputLabel = document.createElement('div');
    inputLabel.textContent = inputValue;
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(inputLabel);
};
function checkList() {
}
