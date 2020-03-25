/// <reference types="Cypress" />
const { Given, When, Then, But } = require('cypress-cucumber-preprocessor/steps');
const actor = require('../../screenplay/actor');
const tasks = require('../../screenplay/tasks');
const questions = require('../../screenplay/questions');

Given(/^I am on "(.*)"$/, (path) => {
    cy.visit(path);
});

Given(/^all recipes have been added into the cms$/, function() {
  // nothing to do.
});

Given(/^the user has requested the recipe overview$/, function() {
  // By using tasks we are able to re-use code.
  actor.perform(tasks.visitRecipesOverview);
});

Then(/^the list of recipes should contain "([^"]*)"$/, function(name) {
    // Here we ask the question to check if we can read our recipe headlines.
    // If we can, then we can set our assertions.
  actor.ask(questions.canIReadHeadline, undefined, headlines => {
    expect(headlines).to.contains(name);
  })
});

Then(/^the list of recipes should not contain "([^"]*)"$/, function(name) {
    // So, the benefit of questions can be seen here.
    // Rather than re-write and repeat the 'canIReadHeadline' check again, we just call the question.
  actor.ask(questions.canIReadHeadline, undefined, headlines => {
    expect(headlines).not.to.contain(name);
  })
});

Then(/^the list of recipes collections should contain "([^"]*)"$/, function(name) {
    actor.ask(questions.canIReadRecipeCollections, undefined, collections => {
        expect(collections).to.contains(name);
    })
});
