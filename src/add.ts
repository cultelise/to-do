import { createProject } from "./create";
import { displayProject } from "./display";

const projectList = document.getElementById("projectList") as HTMLDivElement;
const projectButton = document.getElementById('addProjectButton') as HTMLButtonElement;
const tasks = document.getElementById('tasks') as HTMLDivElement;
const taskButton = document.getElementById('addTaskButton') as HTMLButtonElement;

document.addEventListener('DOMContentLoaded', () => {
  projectButton.addEventListener('click', newProjectInput)
  taskButton.addEventListener('click', () => console.log(1))
})


const newProjectInput = () => {
  const titleInput = createProject();
  titleInput.focus();
  projectList?.appendChild(titleInput);
}


export const addProjectTitle = (inputValue:string) => {
  const inputLabel = document.createElement('div')
  inputLabel.textContent = inputValue;
  displayProject(inputLabel);
  projectList?.appendChild(inputLabel);
}