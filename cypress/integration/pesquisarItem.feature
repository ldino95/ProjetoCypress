Feature: Pesquisar item no site Petz

    Feature Description
    Como usuario, desejo utilizar o site Petz
    Para realizar pesquisar de itens

    Scenario: Pesquisar item para realizar compra
    Given acesso site da empresa
    When informo o item que desejo pesquisar 
    And seleciono o terceiro item que aparece
    And Valide o nome do produto, fornecedor, preço normal e preço para assinante
    And insiro no carrinho de compras 
    Then valido nome do produto, fornecedor, preço normal permanece o mesmo
