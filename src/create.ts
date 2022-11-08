import { addProjectTitle, addTaskTitle } from "./add";
import { activeProject, activeTask } from "./display";
import { initializeTasks, inputDelete, removeInitialProject } from "./remove";

interface Project {
  projects: [
    {
      title?: any;
      tasks?: [
        {
          title?: any;
          details?: any;
        }
      ];
    }
  ];
}

export const app = {
  projects: [
    {
      title: "709",
    },
  ],
} as Project;
console.log(app);

export const NewProject = (input: string) => {
  return { title: input };
};

const NewTask = (input: string) => {
  return { title: input };
};

export const createProjectInput = () => {
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
  inputDelete(inputElement);
  removeInitialProject();
  app.projects.push(NewProject(inputValue));
  addProjectTitle(inputValue);
};

export const createTaskInput = () => {
  const newInput: HTMLInputElement = document.createElement("input");
  newInput.classList.add("tempInput");
  newInput.addEventListener("blur", (event) => generateTask(event));
  newInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") newInput.blur();
  });
  return newInput;
};

const generateTask = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  inputDelete(inputElement);
  if (app.projects[activeProject()].tasks === undefined)
    app.projects[activeProject()].tasks = [{}];
  initializeTasks();
  if (app.projects[activeProject()].tasks !== undefined) {
    app.projects[activeProject()].tasks?.push(NewTask(inputValue));
  }
  addTaskTitle(inputValue);
  detailElement();
};

const detailElement = () => {
  const element = document.querySelector('#details') as HTMLInputElement;
  element.focus();
  const active = activeProject()
  const lang = app.projects[active].tasks;
  if (lang !== undefined) {
    const long = lang[activeTask()]
    element.addEventListener('blur', () => {
      const text = element.value;
      console.log(lang[activeTask()])
      console.log(long)
      long.details = text;
      console.log(long.details)
    })
  } element.addEventListener("keydown", (event) => {
    if (event.key === "Enter") element.blur();
  });
}
