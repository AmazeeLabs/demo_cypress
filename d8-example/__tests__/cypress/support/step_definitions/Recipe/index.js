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
  actor.perform(tasks.visitRecipesOverview);
});

Then(/^the list of recipes should contain "([^"]*)"$/, function(name) {
  actor.ask(questions.readHeadline, undefined, headlines => {
    expect(headlines).to.contains(name);
  })
});

Then(/^the list of recipes should not contain "([^"]*)"$/, function(name) {
  actor.ask(questions.readHeadline, undefined, headlines => {
    expect(headlines).not.to.contain(name);
  })
});

Then(/^the list of recipes collections should contain "([^"]*)"$/, function(name) {
    actor.ask(questions.readRecipeCollections, undefined, collections => {
        expect(collections).to.contains(name);
    })
});
