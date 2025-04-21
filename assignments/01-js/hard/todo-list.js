/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.taskList = [];
  }

  // Addition
  add(todo){
    this.taskList.push(todo);
  }
  

  // Remove
  remove(index){
    if (index >=0 && index < this.taskList.length){
      this.taskList.splice(index, 1);
    } 
  }

  // Update Task
  update(index, new_task){
    if (index >=0 && index < this.taskList.length){
      this.taskList.splice(index, 1, new_task);
    } 

  }

  // Get All Todos
  getAll(){
    return this.taskList;
  }

  // Get  specific task by index
  get(index){
    if (index >=0 && index < this.taskList.length){
      return this.taskList[index];
    } else{
      return null;
    }
  }

  // Clear All
  clear(){
    this.taskList = [];
  }

}

module.exports = Todo;
