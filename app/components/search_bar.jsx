import React from 'react';

class SearchBar extends React.Component {

  render() {
    return(
      <form>
        <input type="text" placeholder="Search Recipes..." />
      </form>
    );
  }
}

export default SearchBar;
