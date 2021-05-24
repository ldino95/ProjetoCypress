/* global Given, Then, When */

import LoginCommons from '../commons/LoginCommons.js'
const loginCommons = new LoginCommons



Given("que estou pagina incial", () => {
	loginCommons.acessarSite();
});

When("informo usuario e senha", () => {
	loginCommons.informarLoginSenha();
});

When("clico em logar", () => {
	loginCommons.clicarBotaoLogin();
});

Then("sou redirecionado para pagina de compra", () => {
    loginCommons.verificarPaginaSeguinte();
	
});
