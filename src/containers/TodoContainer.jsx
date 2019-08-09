import React from 'react';
import TodoPage from '../components/TodoPage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos, addTodo, clickTodo } from '../actions/todos.js';
import { isEqual } from 'lodash';

class TodoContainer extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate', prevProps)

  //   return prevProps.todos
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('componentFidUpdate', prevProps, snapshot);

  //   if (!isEqual(prevProps.todos, this.props.todos)) {
  //     this.render();
  //   }
    
  // }


  render() {
    const { todos, addTodo, clickTodo } = this.props;
    return (
      <TodoPage todos={todos} getTodos={getTodos} addTodo={addTodo} clickTodo={clickTodo} />
    )
  }
}

//Getter: gets the state from store => converts to props in this component
function mapStateToProps(state) {
  const { todos } = state;
  return {
    todos: todos.todos,
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