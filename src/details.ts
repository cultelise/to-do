import { app } from ".";
import { activeProject } from "./projects";
import { activeTask } from "./tasks";

export const createDetailElement = () => {
  const element = document.createElement("textarea") as HTMLTextAreaElement;
  element.id = "details";
  element.setAttribute("type", "text");
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
  const detailsDiv = document.querySelector("#detailsBox") as HTMLDivElement;
  if (detailsDiv !== null) {
    detailsDiv.appendChild(element);
    detailsDiv.addEventListener("click", () => element.focus());
  }
  if (lang !== undefined) {
    let long = lang[activeTask()];
    if (long !== undefined) {
      long.hasOwnProperty("details")
        ? (element.value = long.details)
        : (long.details = "");
    }
  }
  if (element !== null) element.focus();
};

export const clearDetails = () => {
  const details = document.querySelector("#details") as HTMLInputElement;
  if (details !== null && details !== undefined) details.remove();
};
