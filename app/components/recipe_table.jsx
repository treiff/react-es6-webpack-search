import React from 'react';
import RecipeRow from './recipe_row.jsx';

class RecipeTable extends React.Component {

  render() {
    var rows = [];
    this.props.recipes.forEach( recipe => {
      rows.push(<RecipeRow recipe={recipe} key={recipe.id} />);
    });

    return(
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
