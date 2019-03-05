context('Verify that the site is initially running correctly', () =>{
    it('Should load the site', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Welcome Home')
    })
})