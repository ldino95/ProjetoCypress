/// <reference types="Cypress"/> 


   
//tentando fazer consumir a massa em arquivo json
Cypress.Commands.add('pesquisarRacao', () => {
    cy.get('#search').type('ração');
        cy.get('.custom-icon').click();

});

Cypress.Commands.add('escolherItem', () => {
    cy.get(':nth-child(3) > #produto-href').click();   

});

Cypress.Commands.add('pegarItem', () => {
    cy.get('h1').should('be.visible')
    cy.get('.price-current').should('be.visible')
    cy.get('.price-subscriber').should('be.visible')
    cy.get('a > .blue').should('be.visible')
})

Cypress.Commands.add('adicionarItemCarrinho', () => {
    cy.get('#adicionarAoCarrinho').click();  
   
})



Cypress.Commands.add('compararItem', () => {
    const nomeItem = ('.td-resumo > a');
    const precoItem = ('tbody > :nth-child(1) > .preco');   
  
    cy.get(nomeItem).should('have.text', '\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\tPorta Ração Petz Rosa 15kg\n\t\t\t\t\t\t\t\t')
    cy.get(precoItem).should('have.text', '\n\t\t\t\t\t\t\t\tR$ 89,99\n\t\t\t\t\t\t\t');
})

