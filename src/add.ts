import "./style.css"

const projectList = document.getElementById("projectList") as HTMLDivElement;
const projectButton = document.getElementById('addProjectButton') as HTMLButtonElement;
const tasks = document.getElementById('tasks') as HTMLDivElement;
const taskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
console.log(projectButton)

document.addEventListener('DOMContentLoaded', () => {
  projectButton?.addEventListener('click', newProjectInput)
  taskButton?.addEventListener('click', () => console.log(1))
})

const projects: object[] = [];
let counter = 0;

const newProjectInput = () => {
  console.log(1);
  const newInput: HTMLInputElement = document.createElement(`input`);
  newInput.classList.add(`input${counter}`);
  newInput.addEventListener('change', () => {inputExit(); console.log(projects)});
  console.log(newInput)
  projectList?.appendChild(newInput);
}

const inputExit = () => {
  const inputElement = document.querySelector(`.input${counter}`) as HTMLInputElement;
  const inputValue = inputElement.value;
  inputElement?.remove();
  AddProject(inputValue);
  return projects.push(newProject(inputValue.toString()))
}

const newProject = (input:string) => {
 return { title: input}
}

const AddProject = (inputValue:string) => {
  const inputLabel = document.createElement('div')
  inputLabel.textContent = inputValue;
  projectList?.appendChild(inputLabel);
}

function checkList() {
  
}