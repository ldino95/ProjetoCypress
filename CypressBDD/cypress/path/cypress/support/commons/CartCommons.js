/// <reference types="Cypress" />

import CartElements from '../elements/CartElements.js'
const cartElements = new CartElements

class CartCommons {
    
    verificarUrl(){
        cy.url().should('eq','https://www.saucedemo.com/cart.html')
    }

    verificarTitlePage(){
        cy.get(cartElements.titlePage()).should('have.text','YOUR CART');    
        
        }
    
    verificarItemPage(){
        cy.get(cartElements.inventoryItem()).should('be.visible');
    }




}
export default CartCommons