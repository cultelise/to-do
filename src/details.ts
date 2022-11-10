import { app } from ".";
import { activeProject } from "./projects";
import { activeTask } from "./tasks";

export const detailElement = () => {
  const element = document.querySelector("#details") as HTMLInputElement;
  element.focus();
  const active = activeProject();
  const lang = app.projects[active].tasks;
  if (lang !== undefined) {
    const long = lang[activeTask()];
    element.addEventListener("blur", () => {
      const text = element.value;
      console.log(lang[activeTask()]);
      console.log(long);
      long.details = text;
      console.log(long.details);
    });
  }
  element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") element.blur();
  });
};

export const clearDetails = () => {
  const details = document.querySelector("#details") as HTMLInputElement;
  console.log(details.value);
  if (details !== undefined) details.value = "";
};
