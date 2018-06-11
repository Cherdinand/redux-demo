
const initialState = {
  todoList: [],
}

export default (state = initialState, action) => {
  switch(action.type){
    case "AddItem":
      return {...state, todoList: [...state.todoList, action.payload]}
    case "ToggleCheck":
      return {...state, todoList: state.todoList.map((todoItem) => {
          if(todoItem.id === action.payload.id){
            return {
              ...todoItem,
              checked: !todoItem.checked
            }
          }
          return todoItem;
        })}
    case "RemoveItem":
      return {...state, todoList: state.todoList.reduce((result, todoItem) => {
          if(todoItem.id === action.payload.id){
            return result;
          }
          return result.concat(todoItem);
        },[])}
    case "ToggleAll":
      return {...state, todoList: state.todoList.reduce((result, todoItem) => {
          return result.concat({
            ...todoItem,
            checked: action.payload.checked
          });
        },[])}
    default:
      return state;
  }
}