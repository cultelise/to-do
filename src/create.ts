import { addProjectTitle, addTaskTitle} from "./add";
import { activeProject } from "./display";
import { initializeTasks, inputDelete, removeInitialProject } from "./remove";


interface Project { 
  projects: [{
  title?: string,
  tasks?: [{
    title?: any,
    details?: any,
  }]
}]}

export const app = {
  projects: [{
    title: '709',
  }]
} as Project;
console.log(app)

export const NewProject = (input: string) => {
  let title = input;
  return {title};
};

const NewTask = (input: string) => {
  return {title: input}
};

export const createProjectInput = () => {
  const newInput: HTMLInputElement = document.createElement('input');
  newInput.classList.add('tempInput');
  newInput.addEventListener('blur', (event) => generateProject(event));
  newInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") newInput.blur();
  });
  return newInput;
};

const generateProject = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  inputDelete(inputElement);
  removeInitialProject();
  app.projects?.push(NewProject(inputValue));
  addProjectTitle(inputValue);
};

export const createTaskInput = () => {
  const newInput: HTMLInputElement = document.createElement('input');
  newInput.classList.add('tempInput');
  newInput.addEventListener('blur', (event) => generateTask(event));
  newInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") newInput.blur();
  });
  return newInput;
};

const generateTask = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  inputDelete(inputElement);
  if (app.projects[activeProject()].tasks === undefined) app.projects[activeProject()].tasks = [{}];
  initializeTasks();
  console.log(app.projects[activeProject()])
  if (app.projects[activeProject()].tasks !== undefined) {
  app.projects[activeProject()].tasks?.push(NewTask(inputValue));
}
  addTaskTitle(inputValue);
};


const checkLength = () => {

}
const createProjectObject = (project:object, task:object) => {

}