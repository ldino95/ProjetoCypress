/* global Given, Then, When */ 
import CartCommons from '../commons/CartCommons.js'
const  cartCommons = new CartCommons

Given("que estou na pagina de carrinho", () => {
	cartCommons.verificarTitlePage();
});

When("visualizo produtos que foram adcionados", () => {
	cartCommons.verificarItemPage();
});

When("clico no botão para removelos", () => {
	return true;
});

Then("clico no botão voltar fazer compras", () => {
	return true;
});
