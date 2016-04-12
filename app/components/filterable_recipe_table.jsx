import React from 'react';
import SearchBar from './search_bar.jsx';
import RecipeTable from './recipe_table.jsx';

class FilterableRecipeTable extends React.Component {
  constructor(props) {
    super(props)
    filterText = '';
  }

  processInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

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
