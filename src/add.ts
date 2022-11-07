import { createProject } from "./create";
import { displayProject } from "./display";
import "./variable"


const projectList = document.getElementById("projectList") as HTMLDivElement;
const projectButton = document.getElementById('addProjectButton') as HTMLButtonElement;
const tasks = document.getElementById('tasks') as HTMLDivElement;
const taskButton = document.getElementById('addTaskButton') as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', () => {
  projectButton.addEventListener('click', newProjectInput)
  taskButton.addEventListener('click', () => console.log(1))
})

let counter = 0;

const newProjectInput = () => {
  const titleInput = createProject();
  projectList?.appendChild(titleInput);
  titleInput.focus();
}


export const addProjectTitle = (inputValue:string) => {
  const inputLabel = document.createElement('div')
  inputLabel.textContent = inputValue;
  displayProject(inputLabel);
  projectList?.appendChild(inputLabel);
}