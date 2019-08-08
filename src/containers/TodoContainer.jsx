import React from 'react';
import TodoPage from '../components/TodoPage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TodoContainer extends React.Component {
  render() {
    return (
      <TodoPage />
    )
  }
}

//Getter: gets the state from store => converts to props in this component
function mapStateToProps(state) {

}

//Setter: getting the actions to dispatch => converts to props
function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);