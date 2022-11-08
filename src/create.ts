import { addProjectTitle, addTaskTitle } from "./add";
import { inputDelete } from "./remove";


interface Project {
  title: string,
  task: {
    title: string,
    details: string,
  }
}

export const projects = [];

export const NewProject = (input: string) => {
  return { title: input };
};

const NewTask = (input: string) => {
  return {title: input, details: ''}
};

export const createProject = () => {
  const newInput: HTMLInputElement = document.createElement('input');
  newInput.classList.add('tempInput');
  newInput.addEventListener('blur', (event) => generateProject(event));
  return newInput;
};

const generateProject = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  inputDelete(inputElement);
  addProjectTitle(inputValue);
  return projects.push(NewProject(inputValue.toString()));
};

const generateTask = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  inputDelete(inputElement);
  addTaskTitle(inputValue);
  projects.project.title = inputValue;
  console.log(projects.project);
};


const createTask = () => {
  const newInput: HTMLInputElement = document.createElement('input');
  newInput.classList.add('tempInput');
  newInput.addEventListener('blur', (event) => generateTask(event));
  return newInput;
};
