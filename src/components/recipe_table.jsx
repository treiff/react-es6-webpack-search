import React from 'react';
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup';
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
            <th>OG</th>
            <th>FG</th>
          </tr>
        </thead>
        <TransitionGroup component="tbody" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {rows}
        </TransitionGroup>
      </table>
    );
  }
}

export default RecipeTable;
