const Task = require('./utils/addNRemove.js');
const getFilledStorage = require('./__mocks__/filledTaskList.js');
const domContainer = require('./__mocks__/taskListDom.js');

// Import the filled task list from the mock file
const filledTaskList = getFilledStorage();

// Describe the TaskList behavior
describe('TaskList', () => {
  // Create a new instance of the Task class with the filled task list
  const task = new Task(filledTaskList);
  // Get the task list DOM container
  const ulList = domContainer();

  // Test case: Modifying the li checkbox from false to true
  test('Modify the li checkbox from false to true', () => {
    // Call the complete method on task 1 and pass the task list DOM
    task.complete(1, ulList);
    // Assert that the checkbox with id 'to-do-1' is now checked
    expect(document.getElementById('to-do-1').checked).toBe(true);
  });

  // Test case: Modifying the description value of the input text
  test('Modify the description value of the input text', () => {
    // Call the edit method on task 1 and pass the task list DOM
    task.edit(1, ulList);
    // Assert that the input text with id 'text-1' now has the value 'New text'
    expect(document.getElementById('text-1').value).toBe('New text');
  });

  // Test case: Deleting the complete task on list
  test('Delete the complete task on list, current : 2 => expected 1', () => {
    // Call the clearAllCompleted method and pass the task list DOM
    task.clearAllCompleted(ulList);
    // Assert that the number of children of the task list DOM is now 1
    expect(ulList.children).toHaveLength(1);
  });
});
