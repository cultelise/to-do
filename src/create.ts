import { addProjectTitle, addTaskTitle} from "./add";
import { inputDelete } from "./remove";


interface Project {
  title: string,
  task: {
    title: string,
    details: string,
  }
}

export const projects:any = [];

export const NewProject = (input: string) => {
  return { title: input};
};

const NewTask = (input: string) => {
  return {title: input, details: ''}
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
  addProjectTitle(inputValue);
  projects.push(NewProject(inputValue));
  console.log(projects)
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
  projects[0]['task'] = NewTask(inputValue);
  console.log(projects)
  console.log(projects[0]);
};



const createProjectObject = (project:object, task:object) => {

}