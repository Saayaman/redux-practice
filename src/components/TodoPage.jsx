import React from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import FilterButtons from '../components/FilterButtons';

class TodoPage extends React.Component {
  state = {
    activeFilter: 'ALL'
  }

  onClickFilter = (filter) => {
    this.setState({
      activeFilter: filter,
    })
  }
  render() {
    const { addTodo, clickTodo, todos } = this.props;
    const { activeFilter } = this.state;
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