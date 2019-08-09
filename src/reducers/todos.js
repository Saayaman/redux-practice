import { GET_TODOS, CLICK_TODO, ADD_TODO } from '../actions/todos'

const initialState = {
  todos: [],
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
  return {
    ...state,
  }
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

  return {
    ...state,
    todos: currentTodos,
  }
}