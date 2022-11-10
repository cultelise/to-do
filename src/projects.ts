import { app } from ".";
import { chooseTask, clearTasks, taskList } from "./tasks";

const projectList = document.getElementById("projectList") as HTMLDivElement;
const projectButton = document.getElementById(
  "addProjectButton"
) as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", () => {
  projectButton.addEventListener("click", addProjectInput);
});

export const NewProject = (input: string) => {
  return { title: input };
};

const addProjectInput = () => {
  const titleInput = createProjectInput();
  projectList?.appendChild(titleInput);
  const inputElement = document.querySelector(`.tempInput`) as HTMLInputElement;
  inputElement.focus();
};

const createProjectInput = () => {
  const newInput: HTMLInputElement = document.createElement("input");
  newInput.classList.add("tempInput");
  newInput.addEventListener("blur", (event) => generateProject(event));
  newInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") newInput.blur();
  });
  return newInput;
};

const generateProject = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  inputElement.remove();
  removeInitialProject();
  app.projects.push(NewProject(inputValue));
  addProjectTitle(inputValue);
};

const removeInitialProject = () => {
  if (app.projects[0].title === "709") app.projects.pop();
};

const addProjectTitle = (inputValue: string) => {
  const inputLabel = document.createElement("button");
  inputLabel.textContent = inputValue;
  inputLabel.classList.add(`project${app.projects.length}`);
  removeActiveProject();
  inputLabel.id = "activeProject";
  clearTasks();
  chooseProject(inputLabel);
  projectList?.appendChild(inputLabel);
};

const chooseProject = (project: HTMLButtonElement) => {
  project.addEventListener("click", (e) => {
    clearTasks();
    if (e.target !== null) {
      removeActiveProject();
      if (e.target instanceof Element) {
        e.target.id = "activeProject";
      }
      displayProject();
    }
  });
};

const displayProject = () => {
  const project = app.projects[activeProject()];
  if (project.tasks !== undefined) {
    for (let i = 0; i < project.tasks.length; i++) {
      const element = project.tasks[i];
      const button = document.createElement("button") as HTMLButtonElement;
      button.classList.add(`task${i + 1}`);
      button.textContent = `${element.title}`;
      taskList.appendChild(button);
      chooseTask(button);
    }
  }
};

export const activeProject = () => {
  const activeProjectButton = document.querySelector("#activeProject");
  if (activeProjectButton !== undefined && activeProjectButton !== null) {
    const activeProjectNumber = Number.parseInt(
      activeProjectButton.className.slice(-1)
    );
    return activeProjectNumber - 1;
  }
  return 5;
};

const removeActiveProject = () => {
  const activeProject = document.querySelector("#activeProject");
  if (activeProject !== null) activeProject.id = "";
};
