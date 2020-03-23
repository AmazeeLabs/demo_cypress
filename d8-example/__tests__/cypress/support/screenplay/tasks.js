const { createTask } = require('cypress-screenplay');

const visitRecipesOverview = createTask(cy => {
  cy.visit('/en/recipes');
});

const selectRecipeInOverview = createTask((cy, recipe) => {
  cy.findByText(recipe).click();
});

module.exports = { visitRecipesOverview, selectRecipeInOverview };
