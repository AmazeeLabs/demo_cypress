/// <reference types="Cypress" />
const { Given, When, Then, But } = require('cypress-cucumber-preprocessor/steps');

const index = (user, pass) => () => {
    cy.visit('/user/login');
    cy.get('#edit-name').type(user);
    cy.get('#edit-pass').type(pass);
    cy.get('form.user-login-form #edit-submit').click();
};

// Scenario: Homepage is viewable in Spanish
Given(/^I am on the homepage$/, () => {
    cy.visit('/');
});

And(/^I change the language to Spanish$/, () => {
    cy.get('div#block-languageswitcher li[hreflang="es"] a.language-link').click();
});

Then(/^I should see the page reload in Spanish$/, () => {
    cy.url().should('include', '/es')
});
