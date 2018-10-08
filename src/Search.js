import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css'

class Search extends Component {
  constructor() {
    super();
    this.state=({
      query: ''
    });
  }

handleChange = (event) => {
  this.setState({
    query: event.target.value
  }, this.addQueryToState); 
}

  addQueryToState = () => {
    this.props.search(this.state.query);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            className='searchBar'
            placeholder='Search for a district'
            onChange={this.handleChange}
            value={this.state.query}/>
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  search: PropTypes.func.isRequired
};

export default Search;