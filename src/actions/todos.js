export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const CLICK_TODO = 'CLICK_TODO';

export function getTodos() {

  //does a lot of api calling here in real life
  //result is payload

  return function(dispatch) {
    dispatch({
      type: GET_TODOS,
      //fake payload
      // payload: []
    })
  }
}

//payload = a newly added todo
export function addTodo(text) {
  return function(dispatch) {
    dispatch({
      type: ADD_TODO,
      payload: text,
    })
  }
}

//payload = id = number
export function clickTodo(id) {
  return function(dispatch) {
    dispatch({
      type: CLICK_TODO,
      payload: id,
    })
  }
}