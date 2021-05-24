Feature: Efetuar login e realizar compra 

   
@focus
Scenario: Realizar login
Given que estou pagina incial
When informo usuario e senha
And clico em logar 
Then sou redirecionado para pagina de compra
@focus 
Scenario: Verificar se item esta sendo adicionado ao carrinho
Given que estou na pagina de produtos
When seleciono o produto 
Then verifico se foi adicionado ao carrinho
Then clico no carrinho e valido pagina


@focus
Scenario: Verificar se itens estão aparecendo na pagina do carrinho e removelos
Given que estou na pagina de carrinho
When visualizo produtos que foram adcionados 
And clico no botão para removelos
Then clico no botão voltar fazer