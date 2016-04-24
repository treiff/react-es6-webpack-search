import '../style/main.css';
import React from 'react';
import SearchBar from './search_bar.jsx';
import RecipeTable from './recipe_table.jsx';

class FilterableRecipeTable extends React.Component {

  constructor() {
    super();

    this.processInput = this.processInput.bind(this);
    this.loadRecipesFromServer = this.loadRecipesFromServer.bind(this);

    this.state = {
      filterText: '',
      recipes: { 'beers': [
        {id: 1, name: 'Boston Lager Clone', style: 'Vienna Lager' }]}
    }
  }

  processInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  loadRecipesFromServer() {
    let that = this;
    fetch('http://127.0.0.1:3000/beers.json').then(function(response) {
      return response.json();
    }).then(function(recipes) {
      that.setState({recipes: recipes});
    })
  }

  componentDidMount() {
    this.loadRecipesFromServer();
    setInterval(this.loadRecipesFromServer, 5000);
  }

  render() {
    return(

      <div>
        <h1>some text</h1>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.processInput}
        />
        <RecipeTable
          //url={'http://127.0.0.1:3000/beers.json'}
          //pollInterval={1000}
          recipes={this.state.recipes}
          filterText={this.state.filterText}
        />
      </div>

    );
  }
}

export default FilterableRecipeTable;
