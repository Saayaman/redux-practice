import React from 'react';
import { filterKeys } from '../constants/filterKeys';

class TodoList extends React.Component {

  handleClick = (index) => {
    this.props.onClickList(index)
    this.forceUpdate();
  }
  render() {
    const { todoLists, activeFilter } = this.props;
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
          <li key={index} style={{ textDecoration: todoList.isCompleted ? 'line-through' : 'unset' }}
          onClick={() => this.handleClick(index)}>
            {todoList.text}
          </li>
        )}
      </ul>
    )
  }
}

export default TodoList;