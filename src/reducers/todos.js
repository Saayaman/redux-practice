// import { filterKeys } from '../constants/filterKeys';
import { GET_TODOS, ADD_TODO, CLICK_TODO } from '../actions/todos';

const initialState = {
  todos: [],
  // activeFilter: filterKeys.ALL
}

export default function todos(state = initialState, action) {
  switch(action.type) {
    case GET_TODOS:
      return getTodos(state, action);
    case ADD_TODO:
      return addTodos(state, action);
    case CLICK_TODO:
      return clickTodo(state, action);
    default:
      return state;
  }
}

function getTodos(state, action) {
  const { todos } = state;
  return { todos }
}

function addTodos(state, action) {
  return {
    ...state,
    todos: [
      ...state.todos,
      {
        text: action.payload,
        isCompleted: false,
      }
    ]
  }
}

function clickTodo(state, action) {
  const id = action.payload;
  let currentTodos = state.todos;

  currentTodos[id] = {
    ...currentTodos[id],
    isCompleted: !currentTodos[id].isCompleted
  }

  console.log('currentTOdos', currentTodos);
  return {
    ...state,
    todos: currentTodos,
  }
}