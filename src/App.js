import React from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import TodoContainer from './containers/TodoContainer';

class App extends React.Component {
  // state = {
  //   todos: [
  //     // {
  //     //   text: '',
  //     //   isCompleted: false,
  //     // }
  //     // {},
  //   ],
  //   activeFilter: 'all'
  // }

  // updateNewInput = (inputValue) => {
    
  //   let currentTodos = this.state.todos;
  //   currentTodos.push(
  //     {
  //       text: inputValue,
  //       isCompleted: false
  //     }
  //   );


  //   this.setState({
  //     todos: currentTodos,
  //   })
  // }

  // onClickList = (index) => {
  //   let currentTodos = this.state.todos;
  //   // currentTodos[index] = {
  //   //   text: currentTodos[index].text,
  //   //   isCompleted: true
  //   // }

  //   currentTodos[index] = {
  //     ...currentTodos[index],
  //     isCompleted: !currentTodos[index].isCompleted
  //   }

  //   this.setState({
  //     todos: currentTodos,
  //   })
  // }
  
  // onClickFilter = (filter) => {
  //   this.setState({
  //     activeFilter: filter,
  //   })
  // }

  render() {
    return (
      <TodoContainer />
    )
    // const { todos, activeFilter } = this.state;
    // return (
    //   <div className="App">
    //     <AddTodo handleInputValue={this.updateNewInput} />
    //     <TodoList
    //       todoLists={todos}
    //       onClickList={this.onClickList}
    //       activeFilter={activeFilter}
    //     />
    //     <FilterButtons onClickFilter={this.onClickFilter} />
    //   </div>
    // );
  }
}

export default App;
