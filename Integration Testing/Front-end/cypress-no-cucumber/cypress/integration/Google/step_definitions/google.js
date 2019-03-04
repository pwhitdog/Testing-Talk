import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

Given('I open Google page', () => {
  cy.visit(url)
  cy.get('.search')
})


Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})