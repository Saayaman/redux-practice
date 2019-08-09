import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';

class TodoPage extends React.Component {
  state = {
    activeFilter: 'all'
  }

  onClickFilter = (filter) => {
    this.setState({
      activeFilter: filter,
    })
  }
  render() {
    const { todos, addTodo, clickTodo } = this.props;
    const { activeFilter } = this.props;
    return(
      <>
        <AddTodo handleInputValue={addTodo} />
        <TodoList
          todoLists={todos}
          onClickList={clickTodo}
          activeFilter={activeFilter}
        />
        <FilterButtons onClickFilter={this.onClickFilter} />
      </>
    )
  }
}

export default TodoPage;