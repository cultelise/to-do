import { createProject, projects } from "./create";
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
  projectList?.appendChild(titleInput);
  const inputElement = document.querySelector(`.tempInput`) as HTMLInputElement;
  inputElement.focus();
}


export const addProjectTitle = (inputValue:string) => {
  const inputLabel = document.createElement('button')
  inputLabel.textContent = inputValue;
  inputLabel.classList.add(`project${projects.length}`)
  displayProject(inputLabel);
  projectList?.appendChild(inputLabel);
}