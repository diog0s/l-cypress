/// <reference types="cypress" />
context("Loja de roupas", ()=>{
    beforeEach("acecssando a loja", ()=>{
        cy.visit('http://automationpractice.com/index.php')
    });
    it('comprar um vestido', () => {
        cy.get('[class=login]').click()
        cy.get('[id=email]').type('diogotest@gmail.com',{delay: 10})
        cy.get('[id=passwd]').type('12345678',{delay: 10})
        cy.get('[id="SubmitLogin"]').click()

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.button-container > .button-medium > span').click()

        cy.get('.cart_navigation > .button > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()

       // cy.should('.cheque-indent', 'Your order on My Store is complete.')
        cy.get('.cheque-indent > .dark').should('have.text', 'Your order on My Store is complete.')

        //expect('Your order on My Store is complete.').to.contain('Your order on My Store is complete.')
        //'#cart_navigation > .button > span'
    });
});