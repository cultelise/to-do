
const projectList = document.getElementById("projectList")
const projectButton = document.getElementById('addProjectButton') as HTMLButtonElement;
const tasks = document.getElementById('tasks');
const taskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
console.log(projectButton)

document.addEventListener('DOMContentLoaded', () => {
  projectButton?.addEventListener('click', newProjectInput)
  taskButton?.addEventListener('click', () => console.log(1))
})


let counter = 0;

const newProjectInput = () => {
  console.log(1);
  const newInput: HTMLInputElement = document.createElement(`input`);
  newInput.classList.add(`input${counter}`);
  newInput.addEventListener('blur', () => inputExit);
  console.log(newInput)
  projectList?.appendChild(newInput);
}

const inputExit = () => {
  const inputElement = document.querySelector(`.input${counter}`) as HTMLInputElement;
  const inputValue = inputElement.value;
  inputElement?.remove;
  return newProject(inputValue)
}

const AddThing = () => {
  const div = document.createElement('div');

  return {div};
}

const newProject = (input:any) => {
  title: input;
}

const AddProject = (name:string) => {
  const input = document.createElement('input') as HTMLInputElement;
  input.dirName
  return {name}
}

function checkList() {
  
}