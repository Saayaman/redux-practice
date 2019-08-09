import React from 'react';
import { filterKeys } from '../constants/filterKeys';
import { isEmpty } from 'lodash';

class TodoList extends React.Component {
  handleUpdateTodo = (index) => {
    this.props.onClickList(index)
    this.forceUpdate()
  }
  render() {
    const { todoLists, onClickList, activeFilter } = this.props;
    const { ACTIVE, COMPLETED } = filterKeys;

    console.log('whaaaat', todoLists);
    
    // if(todoLists === undefined || todoLists.length === 0) {
    //   return null;
    // }

    let filteredLists = todoLists;

    if(activeFilter === ACTIVE) {
      filteredLists = todoLists.filter((todoList) => !todoList.isCompleted)
    }

    if (activeFilter === COMPLETED) {
      filteredLists = todoLists.filter((todoList) => todoList.isCompleted)
    }

    console.log(filteredLists);

    return(
      <ul>
        {filteredLists.map((todoList, index) => 
          <li key={index} style={{ textDecoration: todoList.isCompleted ? 'line-through' : 'unset' }} onClick={() => this.handleUpdateTodo(index)}>{todoList.text}</li>
        )}
      </ul>
    )
  }
}

export default TodoList;

