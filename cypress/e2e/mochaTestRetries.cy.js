///<reference types="cypress"/>
it('Test1', { retries: 2 }, () => {
    cy.visit("www.google.com")
    cy.get('input.gLFyf').type('Cypress')
})

it('Test1', () => {
    this.retries(2)
    cy.visit("www.google.com")
    cy.get('input.gLFyf').type('Cypress')
})