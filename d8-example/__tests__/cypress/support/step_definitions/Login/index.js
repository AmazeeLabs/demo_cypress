/* global Given, When, Then */
/// <reference types="Cypress" />
const { Given, When, Then, But } = require('cypress-cucumber-preprocessor/steps');

// beforeEach(function () {
//     cy.prepareSnapshot('login-preparations', function () {
//         cy.drush('en toolbar');
//         cy.drush('cr');
//     });
//     cy.drupalSession({ toolbar: 'on' });
// });

const index = (user, pass) => () => {
    cy.visit('/user/login');
    cy.get('#edit-name').type(user);
    cy.get('#edit-pass').type(pass);
    cy.get('form.user-login-form #edit-submit').click();
};

// The string 'I am on the login screen' has to match that provided in the feature.
Given(/^I am on the login screen$/, () => {
    cy.visit('/user/login');
});

Given(/^I am logged in as an administrator$/, index("admin", "admin"));

When(/^I use the administration credentials to log in$/, index("admin", "admin"));

When(/^I use invalid administration credentials to log in$/, index("admin", "invalid"));

Then(/^I should see an error message containing "(.*)"$/, (message) => {
    cy.get('div[role="alert"]').contains(message);
});

Then(/^I should see the administration toolbar$/, () => {
    // Cypress doesn't re-send headers unless we re-visit the page.
    cy.visit('/');
    cy.get('#toolbar-bar');
});

Then(/^the page should be displayed with the "seven" theme$/, () => {
    cy.get('#block-seven-page-title');
});