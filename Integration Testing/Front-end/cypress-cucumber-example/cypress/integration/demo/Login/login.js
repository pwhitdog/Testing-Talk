import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://localhost:3000";

Given(`I am on our web site`, () => {
  cy.visit(url);
})

When(`I click on the {string}`, (link) => {
    cy.get(`li a`).should('have.attr', 'href').and('include', link)
    cy.contains(`Login`).click()    
})

Then(`I see {string} in the title`, (title) => {
    cy.contains(title).should(`be.visible`)
})

Then(`I should see a {string} form`, (login) => {
    cy.contains(login).should(`be.visible`)
    cy.get(`.container`, () => {
        cy.contains(`input#username`).should(`be.visible`)
        cy.contains(`input#password`).should(`be.visible`)
    })
    
})

Then(`I should see a login button`, () => {
    cy.get(`.container`, () => {
        cy.contains(`button`).should(`be.visible`)
    })
})