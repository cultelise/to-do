import { app, } from "./create";
import { activeProject } from "./display";

export const inputDelete = (inputElement:HTMLDivElement) => {
  inputElement.remove();
}

export const removeInitialProject = () => {
  if (app.projects[0].title === '709') app.projects.pop();
}
export const initializeTasks = () => {
  const active = app.projects[activeProject()]
  if (active.tasks !== undefined) {
    if (active.tasks[0].title == undefined) {
     
      active.tasks.shift();
    }
  }
}

export const clearTasks = () => {
  const tasks = document.querySelectorAll('#taskList > *')
  tasks.forEach(task => {
    task.remove();
  });
};

export const clearDetails = () => {
  const details = document.querySelector('#details') as HTMLInputElement;
  console.log(details.value)
  if (details !== undefined) details.value = 'blargha';
};