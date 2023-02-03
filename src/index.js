// Importing CSS and ToDoList component
import './style.css';
import ToDoList from './toDoList.js';

// Instantiating ToDoList with an empty array
const toDoListArray = new ToDoList([]);

// Initializing function to create the ToDo list UI
const initialize = () => {
  // Selecting the main container for the ToDo list
  const toDoListContainer = document.getElementById("to-do-list");
  // Creating a header element for the ToDo list
  const toDoHeader = document.createElement("div");
  // Adding class name to the header for styling purposes
  toDoHeader.className = "to-do-header";
  toDoHeader.innerHTML = `<h4>Today's To Do</h4>
    <div class="icon-container">
    <?xml version="1.0" encoding="utf-8"?>
    <svg fill="#000000" width="14px" height="14px" viewBox="0 0 24 24" id="update-alt" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
      <path id="primary" d="M5.07,8A8,8,0,0,1,20,12" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
      <path id="primary-2" data-name="primary" d="M18.93,16A8,8,0,0,1,4,12" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>
      <polyline id="primary-3" data-name="primary" points="5 3 5 8 10 8" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline>
      <polyline id="primary-4" data-name="primary" points="19 21 19 16 14 16" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline>
    </svg>
    </div>`;
  // Create a container for the input field and clear all button
  const inputToDoContainer = document.createElement("div");
  inputToDoContainer.id = "to-do-input-container";

  // Create an input field for the to do list
  const inputToDo = document.createElement("input");
  inputToDo.id = "to-do-input";
  inputToDo.setAttribute("type", "text");
  inputToDo.setAttribute("placeholder", "add to your list...");

  // Create a button to clear all completed tasks from the list
  const clearAllBtn = document.createElement("div");
  clearAllBtn.classList.add("remove-btn", "disabled"); // Add classes to the button
  clearAllBtn.id = "clear-all"; // Add an id to the button
  clearAllBtn.innerHTML = "Clear all completed"; // Set text of the button

  // Create an unordered list for the tasks in the to do list
  const ulList = document.createElement("ul"); // Create an unordered list element
  ulList.id = "list"; // Add an id to the list element

  // Append elements to the DOM tree and add them to the page
  toDoList.append(toDoHeader); // Append header element to parent element
  toDoList.append(inputToDoContainer); // Append container element to parent element
  inputToDoContainer.append(inputToDo); // Append input field element to container element
  inputToDoContainer.append(clearAllBtn); // Append clear all button element to container element
  toDoList.append(ulList); // Append unordered list element to parent element
  inputToDoContainer.innerHTML = `
  <?xml version="1.0" encoding="utf-8"?>
  <svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5a1 1 0 1 0-2 0v5.6a3.4 3.4 0 0 1-3.4 3.4H7.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L7.414 16H14.6a5.4 5.4 0 0 0 5.4-5.4V5Z" fill="#000000"/>
  </svg>`;
  inputToDo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      ToDoListArray.addToDo(event.currentTarget.value, ulList);
      event.currentTarget.value = "";
    }
  });
  clearAllBtn.addEventListener("click", () => {
    ToDoListArray.clearAllCompleted(ulList);
  });
  // Add the inputToDo element to the top of the inputToDoContainer
  inputToDoContainer.prepend(inputToDo);

  // Append the inputToDo and ulList elements to the toDoList
  toDoList.append(inputToDo);
  toDoList.append(ulList);

  // Append the clearAllBtn to the toDoList
  toDoList.append(clearAllBtn);

  // Print the contents of the ToDoListArray in the ulList
  ToDoListArray.print(ulList);
};

init();