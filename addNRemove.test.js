// Importing required modules
const Task = require('./utils/addNRemove.js');
const getFilledStorage = require('./mocks/filledTaskList.js');
const domContainer = require('./mocks/taskListDom.js');

// Getting the filled task list
const filledTaskList = getFilledStorage();

// Describing the task list functionality
describe('TaskList', () => {
// Creating an instance of the Task class
const task = new Task(filledTaskList);
// Getting the task list DOM container
const ulList = domContainer();

// Testing the addToDo function
test('Add an item to task list in dom, expected list length + 1', () => {
// Adding a new task to the list
task.addToDo('new', ulList);
// Expecting the list length to increase by 1
expect(ulList.children).toHaveLength(3);
});

// Testing the remove function
test('Remove an item from task list, current length 3 in dom, expected list length - 1', () => {
// Removing a task from the list
task.remove(0, ulList);
// Expecting the list length to decrease by 1
expect(ulList.children).toHaveLength(2);
});
});