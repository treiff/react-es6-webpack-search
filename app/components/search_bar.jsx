import React from 'react';

class SearchBar extends React.Component {

  processChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    return(
      <form>
        <input type="text"
         placeholder="Search Recipes..."
         value={this.props.filterText}
         refs="filterTextInput"
         onChange={this.processChange}
         />
      </form>
    );
  }
}

export default SearchBar;
