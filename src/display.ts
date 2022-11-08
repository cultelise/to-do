
export const displayProject = (project:HTMLButtonElement) => {
  project.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target !== null) {
      removeActiveProject();
    event.target.id = 'activeProject';
}})
}

export const removeActiveProject = () => {
  const activeProject = document.querySelector('#activeProject');
  if (activeProject !== null) activeProject.id = '';
};


export const activeProject = () => {
  const activeProjectButton = document.querySelector('#activeProject');
  if (activeProjectButton !== undefined && activeProjectButton !== null) {
  const activeProjectNumber = Number.parseInt(activeProjectButton.className.slice(-1));
  console.log(activeProjectNumber);
  return activeProjectNumber} return 5;
};