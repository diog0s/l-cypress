/// <reference types="cypress"/>
context('vestido', () => {
    beforeEach('Acessando loja', () =>{
        cy.visit('http://automationpractice.com/index.php')
    });
    it('escolher um vestido', () =>{
        cy.get('[class=login]').click()
        cy.get('[id=email]').type('diogotest@gmail.com',{delay: 10})
        cy.get('[id=passwd]').type('12345678',{delay: 10})
        cy.get('[id="SubmitLogin"]').click()

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
       // cy.get('.button-container > .button-medium > span').click()
        cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart')
    });
});