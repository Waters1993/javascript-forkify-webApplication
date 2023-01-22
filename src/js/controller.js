import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';
import recipeView from './views/recipeView.js';
import paginationView from './views/paginationView.js';

import * as model from './model.js';
import recipeView from './views/recipeView.js';
import resultsView from './views/resultsView.js';
import booksmarksView from './views/booksmarksView.js';

const controlRecipes = async function () {
  try {
    // Capture the id from the URL
    const id = window.location.hash.slice(1);

    // If no id is present return immediately
    if (!id) return;

    // Display a spinner on load
    recipeView.renderSpinner(model.getSearchResultsPage);

    // Highlight selected search result
    resultsView.update(model.getSearchResultsPage());

    booksmarksView.update(model.state.bookmarks);

    // Load recipe will update the recipe in the state object
    await model.loadRecipe(id);

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
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  booksmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  booksmarksView.render(model.state.bookmarks);
};
// Publisher subscriber design patter.
// The view will listen for the events
const init = function () {
  booksmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
};
init();
