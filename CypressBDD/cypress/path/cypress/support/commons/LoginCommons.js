/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements.js'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginCommons {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url);
    }


    //Passar valor login e senha

    informarLoginSenha(){
        cy.get(loginElements.campoLogin()).type('standard_user');
        cy.get(loginElements.campoSenha()).type('secret_sauce');
    }
  
 

    clicarBotaoLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }

    verificarPaginaSeguinte(){
        cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    }
}

export default LoginCommons;