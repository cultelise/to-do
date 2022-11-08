import { app, createProjectInput, createTaskInput} from "./create";
import { activeProject, displayProject, removeActiveProject } from "./display";
import { clearTasks } from "./remove";


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
  inputLabel.classList.add(`project${app.projects.length}`);
  removeActiveProject();
  inputLabel.id = 'activeProject';
  clearTasks();
  displayProject(inputLabel);
  projectList?.appendChild(inputLabel);
};

export const addTaskTitle = (inputValue: string) => {
  const inputLabel = document.createElement("button");
  inputLabel.textContent = inputValue;
  inputLabel.classList.add(`task${getTaskLength()}`);
  displayProject(inputLabel);
  taskList?.appendChild(inputLabel);
};

const getTaskLength = () => {
  const activeProjectNumber = (app.projects[activeProject() - 1]);
  const taskLength = activeProjectNumber.tasks?.length;
  console.log(taskLength);
  console.log(activeProjectNumber.tasks);
};