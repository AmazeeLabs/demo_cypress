const { createQuestion } = require('cypress-screenplay');

const readHeadline = createQuestion((cy, param, answer) => {
  cy.get('.view-recipes h2.node__title').should($item => answer($item.text()));
});

const readRecipeCollections = createQuestion((cy, param, answer) => {
  // Ideally, we would want to rename these to more meaningful class names.
  cy.get('.view-recipe-collections .views-field-name')
    .should( $items => {
      answer($items.toArray().map(item => {
        return item.textContent;
      }))
    }
  );
});

export { readHeadline, readRecipeCollections };
