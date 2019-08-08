import React from 'react';
import { filterKeys } from '../constants/filterKeys';

class TodoList extends React.Component {
  render() {
    const { todoLists, onClickList, activeFilter } = this.props;
    const { ACTIVE, COMPLETED } = filterKeys;

    let filteredLists = todoLists;

    if(activeFilter === ACTIVE) {
      filteredLists = todoLists.filter((todoList) => !todoList.isCompleted)
    }

    if (activeFilter === COMPLETED) {
      filteredLists = todoLists.filter((todoList) => todoList.isCompleted)
    }    
    
    return(
      <ul>
        {filteredLists.map((todoList, index) => 
          <li key={index} style={{ textDecoration: todoList.isCompleted ? 'line-through' : 'unset' }} onClick={() => onClickList(index)}>{todoList.text}</li>
        )}
      </ul>
    )
  }
}

export default TodoList;