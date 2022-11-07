import { addProjectTitle } from "./add";
import { inputDelete } from "./remove";

const projects: object[] = [];

export const NewProject = (input:string) => {
  return { title: input}
 }

 const NewTask = (input:string) => {
  title: input
 }

 let counter = 0;

 export const createProject = () => {
  const newInput: HTMLInputElement = document.createElement(`input`);
  newInput.classList.add(`tempInput`);
  newInput.addEventListener('change', generateProject);
  return newInput;
 }

 const generateProject = () => {
  const inputElement = document.querySelector(`.tempInput`) as HTMLInputElement;
  const inputValue = inputElement.value;
  inputDelete(inputElement);
  addProjectTitle(inputValue);
  return projects.push(NewProject(inputValue.toString()))
 }