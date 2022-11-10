import { app } from ".";
import { activeProject } from "./projects";
import { activeTask } from "./tasks";

const detailElement = document.querySelector('#details') as HTMLInputElement;

export const createDetailElement = () => {
  const element = document.createElement('input') as HTMLInputElement;
  element.id = 'details'
  element.setAttribute('type', 'text')
  const lang = app.projects[activeProject()].tasks;
  if (lang !== undefined) {
    const long = lang[activeTask()];
    element.addEventListener("blur", () => {
      const text = element.value;
      long.details = text;
    });
    element.addEventListener("focusin", () => {
      const text = element.value;
      long.details = text;
    });
  }
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") element.blur();
  });
  const appDiv = document.querySelector('#app');
  if (appDiv !== null) appDiv.appendChild(element);
  if (lang !== undefined) {
    let long = lang[activeTask()];
    if (long !== undefined) {
      long.hasOwnProperty('details') 
        ? element.value = long.details
        : long.details = '';
    }
  }
  if (element !== null) element.focus();
};

export const clearDetails = () => {
  const details = document.querySelector("#details") as HTMLInputElement;
  if (details !== null && details !== undefined) details.remove();
};
