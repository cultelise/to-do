import { taskList } from "./add";
import { app } from "./create";
import { clearTasks } from "./remove";

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


export const removeActiveProject = () => {
  const activeProject = document.querySelector('#activeProject');
  if (activeProject !== null) activeProject.id = '';
};


export const activeProject = () => {
  const activeProjectButton = document.querySelector('#activeProject');
  if (activeProjectButton !== undefined && activeProjectButton !== null) {
  const activeProjectNumber = Number.parseInt(activeProjectButton.className.slice(-1));
  return activeProjectNumber - 1} return 5;
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