import { addProjectTitle, addTaskTitle} from "./add";
import { inputDelete } from "./remove";


interface Project { 
  projects: [{
  title: string,
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
  console.log(app.projects)
  if (app.projects[0].title === '709') app.projects.pop();
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
  addTaskTitle(inputValue);
  app.projects[0].tasks = [{}]
  if (app.projects[0].tasks[0].title == undefined) {
    app.projects[0].tasks.shift();
  }
  app.projects[0].tasks?.push(NewTask(inputValue));
};



const createProjectObject = (project:object, task:object) => {

}