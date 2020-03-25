/// <reference types="Cypress" />
const { Given, When, Then, But } = require('cypress-cucumber-preprocessor/steps');

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
