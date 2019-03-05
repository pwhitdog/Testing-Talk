import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "http://hello.com:3000/";
const samplePassword = `4lLtywmxxx?`

Given(`I am on our web site`, () => {
    cy.visit(url);
  }) 

When(`I click on the {string}`, (link) => {
    cy.get(`li:nth-child(2) a`).should('have.attr', 'href').and('include', link)
    cy.contains(`Register`).click()    
})

When(`I Fill out the form`, () => {
    cy.server({
        method: 'POST',
        delay: 1000,
        status: 200,
        response: {
            "Token": "sdfisadjfidsfisjafdsixxx",
            "Roles": "Customer"
        }
      })
    cy.route(`POST`, `/api/Account/Register`)

    cy.get(`input#username`).type(`WhatAGreatDemo@DaveAndPaulsDemoRules.com`)
    cy.get(`input#password1`).type(samplePassword)
    cy.get(`input#password2`).type(samplePassword)
    cy.get(`button`).click()
})

Then(`I should be registered`, () => {
    cy.location().should((loc) => {
        expect(loc.toString()).to.eq(url)
    })
    cy.contains(`Welcome Home`)
})