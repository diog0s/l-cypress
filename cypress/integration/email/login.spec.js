/// <reference types="cypress" />
context('Loja de roupas', () => {
    beforeEach('acessando loja', () =>{
        cy.visit('http://automationpractice.com/index.php')
    })
    it('fazer login', () => {
        cy.get('[class=login]').click()
        cy.get('[id=email]').type('diogotest@gmail.com',{delay: 10})
        cy.get('[id=passwd]').type('12345678',{delay: 10})
        cy.get('[id="SubmitLogin"]').click()
        cy.get('.account > span').should('have.text','Diogo Santos')
    });

    it('escolher um dress', () => {
        cy.get('[class=login]').click()
        cy.get('[id=email]').type('diogotest@gmail.com',{delay: 10})
        cy.get('[id=passwd]').type('12345678',{delay: 10})
        cy.get('[id="SubmitLogin"]').click()

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
       // cy.get('.button-container > .button-medium > span').click()
        cy.get('.layer_cart_product > h2').contains('Product successfully added to your shopping cart')

    });

    it('comprar um dress', () => {
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
    it.only('test digitar', () => {
        cy.get('[class=login]').click()
        cy.get('[id=email]').type('diogotest@gmail.com',{delay: 10})
        cy.get('[id=passwd]').type('12345678',{delay: 10})
        cy.get('[id="SubmitLogin"]').click()

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.get('.layer_cart_cart > .button-container > span > span').click()
        cy.get('.shopping_cart > a').wait(100).click()
        cy.get('.cart_navigation > a > span').click()
        cy.get('[id=ordermsg]').click()
        .type(funcTxt())
        function funcTxt() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";

            for (var i = 0; i < 40; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
    });
   
});