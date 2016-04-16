import React from 'react';
import RecipeRow from './recipe_row.jsx';

const RecipeTable = ({recipes, filterText}) => {

  let rows = [];

  recipes.map((recipe) => {
    rows.push(<RecipeRow recipe={recipe} key={recipe.id}/>);
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

export default RecipeTable;
