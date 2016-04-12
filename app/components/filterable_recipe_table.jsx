import React from 'react';
import SearchBar from './search_bar.jsx';
import RecipeTable from './recipe_table.jsx';

class FilterableRecipeTable extends React.Component {

  render() {
    return(
      <div>
        <h1>some text</h1>
        <SearchBar />
        <RecipeTable recipes={this.props.recipes} />
      </div>
    );
  }
}

export default FilterableRecipeTable;
