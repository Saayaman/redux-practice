import React from 'react';
import { filterKeys } from '../constants/filterKeys';

class FilterButtons extends React.Component {
  state = {
    activeFilter: filterKeys.ALL
  }

  onClickFilter = (filter) => {
    this.setState({
      activeFilter: filter
    });

    this.props.onClickFilter(filter);
  }

  render() {
    const { activeFilter } = this.state;
    const { ALL, ACTIVE, COMPLETED } = filterKeys;
    return(
      <div>
        <span>Show: </span>
        <button
          disabled={activeFilter === ALL}
          onClick={() => this.onClickFilter(ALL)}>
            All
        </button>
        <button
          disabled={activeFilter === ACTIVE}
          onClick={() => this.onClickFilter(ACTIVE)}>
            Active
        </button>
        <button
          disabled={activeFilter === COMPLETED}
          onClick={() => this.onClickFilter(COMPLETED)}>
            Completed
        </button>
      </div>
    )
  }
}

export default FilterButtons;