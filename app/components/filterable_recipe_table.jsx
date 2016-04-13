import React from 'react';
import SearchBar from './search_bar.jsx';
import RecipeTable from './recipe_table.jsx';

class FilterableRecipeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filterText: ''};
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
        <SearchBar filterText={this.props.filterText} onUserInput={this.processInput} />
        <RecipeTable recipes={this.props.recipes} filterText={this.state.filterText} />
      </div>
    );
  }
}

export default FilterableRecipeTable;
