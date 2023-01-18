import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';
import recipeView from './views/recipeView.js';
import paginationView from './views/paginationView.js';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';

const controlRecipes = async function () {
  try {
    // Capture the id from the URL
    const id = window.location.hash.slice(1);

    // If no id is present return immediately
    if (!id) return;

    // Display a spinner on load
    recipeView.renderSpinner();

    // Load recipe will update the recipe in the state object
    await model.loadRecipe(id);
    await model.loadSearchResults('pizza');

    // Render recipe view with the current recipe in the state object
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // Load search results
    await model.loadSearchResults(query);

    // Render results
    resultsView.render(model.getSearchResultsPage());

    //Render pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the servings in the current recipe in state
  model.updateServings(newServings);
  // Render the recipe with the new serving amount
  recipeView.render(model.state.recipe);
};

// Publisher subscriber design patter.
// The view will listen for the events
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
};
init();
