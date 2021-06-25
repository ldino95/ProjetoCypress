/// <reference types="Cypress"/> 

describe("Fazendo compra no site petz", () => {

 
    beforeEach(() =>{

        Cypress.on('uncaught:exception', (err, runnable) => { //ignora erros da página
            return false
            
        })

        cy.visit('/');

   
    });
    
             
    it.only("Validar que item está sendo consumido do.", () => {
        
        cy.fixture("credentials")
        .then((credentials) => {
            cy.log(credentials)
            cy.log(credentials.itemUm)
            cy.get('#search').type(credentials.itemUm);
            cy.get('.custom-icon').click();
        });

    });

});
