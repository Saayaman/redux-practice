import React from 'react';
import AddTodo from './components/AddTodo';
import './App.css';
import TodoList from './components/TodoList';

class App extends React.Component {
  state = {
    todos: [
      // {
      //   text: '',
      //   isCompleted: false,
      // }
      // {},
    ],
  }

  updateNewInput = (inputValue) => {
    
    let currentTodos = this.state.todos;
    currentTodos.push(
      {
        text: inputValue,
        isCompleted: false
      }
    );


    this.setState({
      todos: currentTodos,
    })
  }

  onClickList = (index) => {
    let currentTodos = this.state.todos;
    // currentTodos[index] = {
    //   text: currentTodos[index].text,
    //   isCompleted: true
    // }

    currentTodos[index] = {
      ...currentTodos[index],
      isCompleted: !currentTodos[index].isCompleted
    }

    console.log('new todos', currentTodos);
    this.setState({
      todos: currentTodos,
    })
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <AddTodo handleInputValue={this.updateNewInput} />
        <TodoList todoLists={this.state.todos} onClickList={this.onClickList} />
      </div>
    );
  }
}

export default App;
