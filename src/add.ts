import { createProjectInput, createTaskInput, projects } from "./create";
import { displayProject } from "./display";


const projectList = document.getElementById("projectList") as HTMLDivElement;
const projectButton = document.getElementById(
  "addProjectButton"
) as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLDivElement;
const taskButton = document.getElementById(
  "addTaskButton"
) as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", () => {
  projectButton.addEventListener("click", addProjectInput);
  taskButton.addEventListener("click", addTaskInput);
});

const addProjectInput = () => {
  const titleInput = createProjectInput();
  projectList?.appendChild(titleInput);
  const inputElement = document.querySelector(`.tempInput`) as HTMLInputElement;
  inputElement.focus();
};

const addTaskInput = () => {
  const titleInput = createTaskInput();
  taskList?.appendChild(titleInput);
  const inputElement = document.querySelector(`.tempInput`) as HTMLInputElement;
  inputElement.focus();
};

export const addProjectTitle = (inputValue: string) => {
  const inputLabel = document.createElement("button");
  inputLabel.textContent = inputValue;
  inputLabel.classList.add(`project${projects.length}`);
  displayProject(inputLabel);
  projectList?.appendChild(inputLabel);
};

export const addTaskTitle = (inputValue: string) => {
  const inputLabel = document.createElement("button");
  inputLabel.textContent = inputValue;
  inputLabel.classList.add(`task${0}`);
  displayProject(inputLabel);
  taskList?.appendChild(inputLabel);
};

const addObject = (inputValue:any) => {
  inputValue
};