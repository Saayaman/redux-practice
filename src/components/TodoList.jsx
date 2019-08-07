import React from 'react';

class TodoList extends React.Component {
  render() {
    const { todoLists, onClickList } = this.props;
    return(
      <ul>
        {todoLists.map((todoList, index) => 
          <li key={index} style={{ textDecoration: todoList.isCompleted ? 'line-through' : 'unset' }} onClick={() => onClickList(index)}>{todoList.text}</li>
        )}
      </ul>
    )
  }
}

export default TodoList;