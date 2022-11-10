import { app } from ".";
import { activeProject } from "./projects";
import { activeTask } from "./tasks";

const appDiv = document.querySelector('#app');
const detailElement = document.querySelector('#details') as HTMLInputElement;

export const createDetailElement = () => {
  const element = document.createElement('input') as HTMLInputElement;
  element.id = 'details'
  element.setAttribute('type', 'text')
  const active = activeProject();
  const lang = app.projects[active].tasks;
  if (lang !== undefined) {
    const long = lang[activeTask()];
    element.addEventListener("blur", () => {
      const text = element.value;
      long.details = text;
    });
  }
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") element.blur();
  });
  appDiv?.appendChild(element);
  if (lang !== undefined) {
  element.value = lang[activeTask()].details};
  if (element !== null) element.focus();
};

export const clearDetails = () => {
  const details = document.querySelector("#details") as HTMLInputElement;
  if (details !== null && details !== undefined) details.remove();
};
