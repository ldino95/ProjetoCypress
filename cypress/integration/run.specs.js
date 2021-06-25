/// <reference types="Cypress"/> 

describe("Fazendo compra no site petz", () => {

 
    beforeEach(() =>{

        Cypress.on('uncaught:exception', (err, runnable) => { //ignora erros da página
            return false
            
        })

        cy.visit('/');

      
    });
    
    
     
       
    it("Selenecionar o terceiro item da lista e realizar compra do mesmo.", () => {
        cy.pesquisarRacao();
        cy.escolherItem();
        cy.pegarItem();
        cy.adicionarItemCarrinho();
        cy.compararItem();
    });


    
    it.only("Validar que item está sendo consumido do.", () => {
        
        cy.fixture("fixtures-demo/petzCredentials.json")
        .then((credentials) => {
            cy.get('#search').type(credentials.itemUm);
            cy.get('.custom-icon').click();
        })
       

    });
})
