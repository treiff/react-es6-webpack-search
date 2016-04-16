import React from 'react';
import SearchBar from './search_bar.jsx';
import RecipeTable from './recipe_table.jsx';

class FilterableRecipeTable extends React.Component {

  constructor() {
    super();

    this.processInput = this.processInput.bind(this);

    this.state = {
      filterText: ''
    }
  }

  processInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {

    const recipes = [
      {id: 1, name: 'Boston Lager Clone', style: 'Vienna Lager' },
      {id: 2, name: 'Corona Clone', style: 'Light Lager' },
      {id: 3, name: 'Hop Hammer', style: 'Imperial IPA' },
      {id: 4, name: 'Pliney the Elder Clone', style: 'Imperial IPA' },
      {id: 5, name: 'Janets Brown Ale', style: 'American Brown Ale' },
      {id: 6, name: 'Smoke on the water', style: 'Irish Stout' },
      {id: 7, name: 'Grapefruit Honey Ale', style: 'Experimental' },
    ];

    return(
      <div>
        <h1>some text</h1>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.processInput}
        />
        <RecipeTable
          recipes={recipes}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableRecipeTable;
