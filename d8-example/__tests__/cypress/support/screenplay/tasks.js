const { createTask } = require('cypress-screenplay');

// Tasks should be 'high-level' re-usable steps that are required to perform some functionality.
//
// For example, we define visiting a certain page as a task a user (Actor) will perform.

const visitRecipesOverview = createTask(cy => {
  cy.visit('/en/recipes');
});

const selectRecipeInOverview = createTask((cy, recipe) => {
  cy.findByText(recipe).click();
});

module.exports = { visitRecipesOverview, selectRecipeInOverview };
