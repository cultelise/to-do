import { taskList } from "./add";
import { app } from "./create";
import { clearDetails, clearTasks } from "./remove";

export const chooseProject = (project:HTMLButtonElement) => {
  project.addEventListener('click', (e) => {
    clearTasks();
    if (e.target !== null) {
      removeActiveProject();
      if (e.target instanceof Element) {
        e.target.id = 'activeProject';}
        displayProject();
  }})
}

export const chooseTask = (project:HTMLButtonElement) => {
  project.addEventListener('click', (e) => {
    clearDetails();
    if (e.target !== null) {
      removeActiveTask();
      if (e.target instanceof Element) {
        e.target.id = 'activeTask';}
        displayTask();
  }})
}

export const removeActiveProject = () => {
  const activeProject = document.querySelector('#activeProject');
  if (activeProject !== null) activeProject.id = '';
};

export const removeActiveTask = () => {
  const activeProject = document.querySelector('#activeTask');
  if (activeProject !== null) activeProject.id = '';
};

export const activeProject = () => {
  const activeProjectButton = document.querySelector('#activeProject');
  if (activeProjectButton !== undefined && activeProjectButton !== null) {
  const activeProjectNumber = Number.parseInt(activeProjectButton.className.slice(-1));
  return activeProjectNumber - 1} return 5;
};

export const activeTask = () => {
  const activeTaskButton = document.querySelector('#activeTask');
  if (activeTaskButton !== undefined && activeTaskButton !== null) {
  const activeTaskNumber = Number.parseInt(activeTaskButton.className.slice(-1));
  console.log(activeTaskNumber)
  return activeTaskNumber - 1} return 5;
};

export const displayProject = () => {
  const project = app.projects[activeProject()]
   if (project.tasks !== undefined) {
    for (let i = 0; i < project.tasks.length; i++) {
      const element = project.tasks[i];
      const div = document.createElement('button');
      div.classList.add(`task${i}`);
      div.textContent = `${element.title}`
      taskList.appendChild(div);
    };
   };
};

export const displayTask = () => {
  const project = app.projects[activeProject()].tasks
  if (project !== undefined) {
  const task = project[activeTask()]
  const detailsDiv = document.querySelector('#details') as HTMLInputElement;
  if (detailsDiv !== null && detailsDiv !== undefined) detailsDiv.value = task.details;
  }
};