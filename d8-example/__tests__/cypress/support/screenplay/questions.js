const { createQuestion } = require('cypress-screenplay');

// Questions is where we do some checks based on the current state of the application
//
// So, the Actor might ask questions such as: Given 'x' state, Then check if I can read the recipe
// headlines or read a collection of recipes on that page.

const canIReadHeadline = createQuestion((cy, param, answer) => {
  cy.get('.view-recipes h2.node__title').should($item => answer($item.text()));
});

const canIReadRecipeCollections = createQuestion((cy, param, answer) => {
  // Ideally, we would want to rename these to more meaningful class names.
  cy.get('.view-recipe-collections .views-field-name')
    .should( $items => {
      answer($items.toArray().map(item => {
        return item.textContent;
      }))
    }
  );
});

export { canIReadHeadline, canIReadRecipeCollections };
