/// <reference types="cypress"/>
context('loja', () =>{
    //Irá visitar a página antes de iniciar os testes
    beforeEach('visitar pag', () =>{
        cy.visit('http://automationpractice.com/index.php')
    });
    
    //Comprar um vestido por outro caminho
    it('comprar um dress path 2', () => {
        cy.get('[class=login]').click()
        cy.get('[id=email]').type('diogotest@gmail.com',{delay: 10})
        cy.get('[id=passwd]').type('12345678',{delay: 10})
        cy.get('[id="SubmitLogin"]').click()

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_cart > .button-container > span > span').click()
        cy.get('.shopping_cart > a').wait(100).click()
        cy.get('.cart_navigation > a > span').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()
        cy.get('.bankwire').click()
        cy.get('#cart_navigation > .button > span').click()
        cy.get('.cheque-indent > .dark').should('have.text', 'Your order on My Store is complete.')
    });
});