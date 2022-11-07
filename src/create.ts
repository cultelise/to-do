import { addProjectTitle } from "./add";
import { inputDelete } from "./remove";

export const projects: object[] = [];

export const NewProject = (input: string) => {
  return { title: input };
};

const NewTask = (input: string) => {
  title: input;
};

export const createProject = () => {
  const newInput: HTMLInputElement = document.createElement(`input`);
  newInput.classList.add(`tempInput`);
  newInput.addEventListener("change", (event) => generateProject(event));
  return newInput;
};

const generateProject = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
  const inputValue = inputElement.value;
  inputDelete(inputElement);
  addProjectTitle(inputValue);
  return projects.push(NewProject(inputValue.toString()));
};
