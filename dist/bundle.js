/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/add.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addProjectTitle = void 0;
const create_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './create'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const display_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './display'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const projectList = document.getElementById("projectList");
const projectButton = document.getElementById('addProjectButton');
const tasks = document.getElementById('tasks');
const taskButton = document.getElementById('addTaskButton');
document.addEventListener('DOMContentLoaded', () => {
    projectButton.addEventListener('click', newProjectInput);
    taskButton.addEventListener('click', () => console.log(1));
});
const newProjectInput = () => {
    const titleInput = (0, create_1.createProject)();
    titleInput.focus();
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(titleInput);
};
const addProjectTitle = (inputValue) => {
    const inputLabel = document.createElement('div');
    inputLabel.textContent = inputValue;
    (0, display_1.displayProject)(inputLabel);
    projectList === null || projectList === void 0 ? void 0 : projectList.appendChild(inputLabel);
};
exports.addProjectTitle = addProjectTitle;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7VUFBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHVCQUF1QjtBQUN2QixpQkFBaUIsbUJBQU8sQ0FBQyx1SUFBVTtBQUNuQyxrQkFBa0IsbUJBQU8sQ0FBQyx3SUFBVztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvYWRkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYWRkUHJvamVjdFRpdGxlID0gdm9pZCAwO1xuY29uc3QgY3JlYXRlXzEgPSByZXF1aXJlKFwiLi9jcmVhdGVcIik7XG5jb25zdCBkaXNwbGF5XzEgPSByZXF1aXJlKFwiLi9kaXNwbGF5XCIpO1xuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpO1xuY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0QnV0dG9uJyk7XG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xuY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUYXNrQnV0dG9uJyk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0SW5wdXQpO1xuICAgIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjb25zb2xlLmxvZygxKSk7XG59KTtcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gKDAsIGNyZWF0ZV8xLmNyZWF0ZVByb2plY3QpKCk7XG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICAgIHByb2plY3RMaXN0ID09PSBudWxsIHx8IHByb2plY3RMaXN0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbn07XG5jb25zdCBhZGRQcm9qZWN0VGl0bGUgPSAoaW5wdXRWYWx1ZSkgPT4ge1xuICAgIGNvbnN0IGlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbnB1dExhYmVsLnRleHRDb250ZW50ID0gaW5wdXRWYWx1ZTtcbiAgICAoMCwgZGlzcGxheV8xLmRpc3BsYXlQcm9qZWN0KShpbnB1dExhYmVsKTtcbiAgICBwcm9qZWN0TGlzdCA9PT0gbnVsbCB8fCBwcm9qZWN0TGlzdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoaW5wdXRMYWJlbCk7XG59O1xuZXhwb3J0cy5hZGRQcm9qZWN0VGl0bGUgPSBhZGRQcm9qZWN0VGl0bGU7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=