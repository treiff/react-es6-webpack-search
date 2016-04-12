import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './components/greeting.jsx';
import Timer from './components/timer.jsx';
import FilterableRecipeTable from './components/filterable_recipe_table.jsx';

var RECIPIES = [
  {id: 1, name: 'Boston Lager Clone', style: 'Vienna Lager' },
  {id: 2, name: 'Corona Clone', style: 'Light Lager' },
  {id: 3, name: 'Hop Hammer', style: 'Imperial IPA' },
  {id: 4, name: 'Pliney the Elder Clone', style: 'Imperial IPA' },
  {id: 5, name: 'Janets Brown Ale', style: 'American Brown Ale' },
  {id: 6, name: 'Smoke on the water', style: 'Irish Stout' },
];

ReactDOM.render(
  <FilterableRecipeTable recipes={RECIPIES} />,
  document.getElementById('recipe-table')
);
