import { app, } from "./create";
import { activeProject } from "./display";

export const inputDelete = (inputElement:HTMLDivElement) => {
  inputElement.remove();
}

export const removeInitialProject = () => {
  if (app.projects[0].title === '709') app.projects.pop();
}
export const initializeTasks = () => {
  if (app.projects[0].tasks !== undefined) {
    if (app.projects[0].tasks[0].title == undefined) {
      app.projects[0].tasks.shift();
    }
  }
}

export const clearTasks = () => {
  const tasks = document.querySelectorAll('#taskList > *')
  tasks.forEach(task => {
    task.remove();
  });
};