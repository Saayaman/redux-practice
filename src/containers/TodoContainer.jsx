import React from 'react';
import TodoPage from '../components/TodoPage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos, addTodo, clickTodo } from '../actions/todos'

class TodoContainer extends React.Component {
  render() {
    const { todos, clickTodo, addTodo, getTodos } = this.props;
    return (
      <TodoPage
        // {...this.props}
        todos={todos}
        clickTodo={clickTodo}
        addTodo={addTodo}
      />
    )
  }
}

//Getter: gets the state from store => converts to props in this component
function mapStateToProps(state) {
  return {
    todos: state.todoFile.todos,
  }
}

//Setter: getting the actions to dispatch => converts to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getTodos,
    addTodo,
    clickTodo,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
