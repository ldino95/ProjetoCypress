/// <reference types="Cypress" />

import InventoryElements from '../elements/InventoryElements.js'
const inventoryElements = new InventoryElements;

class InventoryPage{

verificarUrlInventory1() {
    cy.url().should('eq','https://www.saucedemo.com/inventory.html')
    
    }

verificarInventoryPage(){
    cy.get(inventoryElements.titlePage()).should('have.text','Products');    
    
    }
    
verificarProduto(){
    cy.get(inventoryElements.itemPage()).should('be.visible');
    cy.xpath(inventoryElements.itemProduto1()).should('be.visible');
   
    }

adcionarProduto(){
    
    cy.xpath(inventoryElements.adcCarrinho()).click();
    cy.wait(2000)
    }

verificarCarrinho(){
    cy.get(inventoryElements.abrirCarrinho()).click();
    cy.wait(2000)
    }

clicarCarrinho(){
    cy.get(inventoryElements.carrinhoItens()).click();
    }    
}   

export default  InventoryPage

tste