context('Verify that the site is initially running correctly', () =>{
    it('Should load the site and have a navbar', () =>{
        cy.visit('http://localhost:3000')
    })
})