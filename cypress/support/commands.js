Cypress.Commands.add("cadastroProdutoNotebook", () => {
    cy.get("[onclick=\"byCat('notebook')\"]").click();
    cy.get('a[href="prod.html?idp_=11"].hrefch').click();
    cy.get("a[onclick='addToCart(11)']").click();
    cy.get(".active > .nav-link").click();
  
  });
  
  Cypress.Commands.add("cadastroProdutoPhone", () => {
    cy.get("[onclick=\"byCat('phone')\"]").click();
    cy.get('a[href="prod.html?idp_=3"].hrefch').click();
    cy.get("a[onclick='addToCart(3)']").click();
  
  });
  
  Cypress.Commands.add("cadastroMonitor", () => {
    cy.get(".active > .nav-link").click();
    cy.get("[onclick=\"byCat('monitor')\"]").click();
    cy.get('a[href="prod.html?idp_=14"].hrefch').click();
    cy.get("a[onclick='addToCart(14)']").click();
    
  });
  
  Cypress.Commands.add("acessoListaCompra", () => {
    cy.get("#cartur").click();
    console.log('Acesso a lista de compras')
  });
  
  Cypress.Commands.add("excluirProduto", () => {
    // Verificar se "ASUS Full HD" existe
    cy.get("#tbodyid").contains("td", "ASUS Full HD").should("exist");
  
    // Excluir o item "ASUS Full HD"
    cy.get("#tbodyid")
      .contains("td", "ASUS Full HD")
      .parent("tr")
      .within(() => {
        cy.contains("a", "Delete").click();
      });
  
    cy.reload();
  
    cy.contains("td", "ASUS Full HD").should("not.exist");
    cy.reload();
  
    console.log('Produto ASUS Full HD excluido com sucesso')
  
  });
  
  Cypress.Commands.add("login", (fakeUsername, fakePassword) => {
    cy.visit("/");
    cy.title().should("include", "STORE");
  
    cy.get("#login2").click();
  
    cy.get("#loginpassword").click();
    cy.get("#loginusername").click().type(fakeUsername);
    cy.get("#loginpassword").should("be.visible").type(fakePassword);
    
    cy.get("button[onclick='logIn()']").click({ force: true });
  
  });