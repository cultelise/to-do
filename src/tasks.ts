import { app } from ".";
import { clearDetails, detailElement } from "./details";
import { activeProject } from "./projects";


export const taskList = document.getElementById("taskList") as HTMLDivElement;
const taskButton = document.getElementById(
  "addTaskButton"
) as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", () => {
  taskButton.addEventListener("click", addTaskInput);
});



const addTaskInput = () => {
  const titleInput = createTaskInput();
  taskList?.appendChild(titleInput);
  const inputElement = document.querySelector(`.tempInput`) as HTMLInputElement;
  inputElement.focus();
};



export const addTaskTitle = (inputValue: string) => {
  const inputLabel = document.createElement("button");
  inputLabel.textContent = inputValue;
  inputLabel.classList.add(`task${getTaskLength()}`);
  removeActiveTask();
  inputLabel.id = 'activeTask';
  chooseTask(inputLabel);
  taskList.appendChild(inputLabel);
};

const getTaskLength = () => {
  const activeProjectNumber = (app.projects[activeProject()]);
  const taskLength = activeProjectNumber.tasks?.length;
  return taskLength;
};


const NewTask = (input: string) => {
  return { title: input };
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
  inputElement.remove();
  if (app.projects[activeProject()].tasks === undefined)
    app.projects[activeProject()].tasks = [{}];
  initializeTasks();
  if (app.projects[activeProject()].tasks !== undefined) {
    app.projects[activeProject()].tasks?.push(NewTask(inputValue));
  }
  addTaskTitle(inputValue);
  detailElement();
};


export const initializeTasks = () => {
  const active = app.projects[activeProject()]
  if (active.tasks !== undefined) {
    if (active.tasks[0].title == undefined) {
     
      active.tasks.shift();
    }
  }
}

export const clearTasks = () => {
  const tasks = document.querySelectorAll('#taskList > *')
  tasks.forEach(task => {
    task.remove();
  });
};


export const chooseTask = (project:HTMLButtonElement) => {
  project.addEventListener('click', (e) => {
    clearDetails();
    if (e.target !== null) {
      removeActiveTask();
      if (e.target instanceof Element) {
        e.target.id = 'activeTask';}
        displayTask();
  }})
}



export const activeTask = () => {
  const activeTaskButton = document.querySelector('#activeTask');
  if (activeTaskButton !== undefined && activeTaskButton !== null) {
    const activeTaskNumber = Number.parseInt(activeTaskButton.className.slice(-1));
    console.log(activeTaskNumber)
    return activeTaskNumber - 1} return 5;
  };
  
  export const displayTask = () => {
    const project = app.projects[activeProject()].tasks
    if (project !== undefined) {
      const task = project[activeTask()]
      const detailsDiv = document.querySelector('#details') as HTMLInputElement;
      if (detailsDiv !== null && detailsDiv !== undefined) detailsDiv.value = task.details;
    }
  };
  
  export const removeActiveTask = () => {
    const activeProject = document.querySelector('#activeTask');
    if (activeProject !== null) activeProject.id = '';
  };
