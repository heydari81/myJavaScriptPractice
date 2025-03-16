import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import ResultsView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
// explain
// if (module.hot) {
//   module.hot.accept();
// }
///////////////////////////////////////
const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) {
      return;
    }
    // loading recipe
    recipeView.renderSpinner();
    await model.loadRecipe(id);

    // Use recipeView.render instead of View.render
    recipeView.render(model.state.recipe);

    console.log('by'); // render recipe
  } catch (err) {
    console.log(`error in controlRecipe`);
    recipeView.renderError(`${err} control Recipe`);
  }
};

// Update the init function to use the corrected function name
const init = function () {
  recipeView.addHandlerRender(controlRecipe); // Changed from controllRecipe to controlRecipe
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination); // Add this line
};

const controlSearchResult = async function () {
  try {
    ResultsView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    ResultsView.render(model.getSearchResultPage(1));
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(`error in controlSearchResult`);
  }
};
const controlPagination = function (goToPage) {
  ResultsView.render(model.getSearchResultPage(goToPage));
  paginationView.render(model.state.search);
};
init();
