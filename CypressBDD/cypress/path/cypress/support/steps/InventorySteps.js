/* global Given, Then, When */


import InventoryPage from '../commons/InventoryCommons.js'
import CartCommons from '../commons/CartCommons.js'
const cartCommons = new CartCommons
const inventoryPage = new InventoryPage

Given("que estou na pagina de produtos", () => {
	inventoryPage.verificarUrlInventory1();
	
});

When("seleciono o produto", () => {
	inventoryPage.verificarProduto();
	inventoryPage.adcionarProduto();
	
	
});

Then("verifico se foi adicionado ao carrinho", () => {
	inventoryPage.verificarCarrinho();
	
	
});


Then("clico no carrinho e valido pagina e items", () => {
	inventoryPage.clicarCarrinho();
	cartCommons.verificarUrl();
	cartCommons.verificarUrl();
});


