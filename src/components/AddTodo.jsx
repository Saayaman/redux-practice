import React from 'react';

class AddTodo extends React.Component {
  state = {
    inputValue: '',
  }

  upDateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    this.props.handleInputValue(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }
  
  render(){
    return(
      <form>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.upDateInputValue}
          placeholder="wash dishes"
        />
        <button onClick={this.handleClick}>Add Todo</button>
      </form>
    )
  }
}

export default AddTodo;