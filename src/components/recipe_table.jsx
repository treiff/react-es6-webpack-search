import React from 'react';
import RecipeRow from './recipe_row.jsx';

class RecipeTable extends React.Component {
  render() {
    const rows = [];
    const { recipes, filterText } = this.props;

    recipes.beers.map((recipe) => {
      if (recipe.name.search(new RegExp(filterText, "i")) == -1) {
        return;
      } else {
        rows.push(<RecipeRow recipe={recipe} key={recipe.id}/>);
      }
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Style</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default RecipeTable;
