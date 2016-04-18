import React from 'react';

class RecipeRow extends React.Component {

  render() {
    return(
      <tr>
        <td>{this.props.recipe.name}</td>
        <td>{this.props.recipe.style}</td>
      </tr>
    );
  }
}

export default RecipeRow;
