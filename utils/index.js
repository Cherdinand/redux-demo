
export const activeList = (todoList) => todoList.filter(todoItem => !todoItem.checked);

export const completedList = (todoList) => todoList.filter(todoItem => todoItem.checked);

export const filterList = (todoList, filter) => {
  switch(filter){
    case "All":
      return todoList;
    case "Active":
      return activeList(todoList);
    case "Completed":
      return completedList(todoList)
    default:
      return todoList;
  }
}