const faker = require("faker");

describe("Adicionando produto no carrinho do site PRODUCT STORE e Removendo", () => {
  let fakeUsername;
  let fakePassword;

  before(() => {
    cy.visit("/");
    cy.title().should("include", "STORE");
    cy.get("#signin2").click();
    fakeUsername = faker.internet.userName();
    fakePassword = faker.internet.password();
    cy.get("input[id='sign-password").click();
    cy.get("input[id='sign-username']").click().type(fakeUsername);
    cy.get("input[id='sign-password']").should("be.visible").type(fakePassword);
    cy.get("button[onclick='register()']").click();
  });

  it("Realizando cadastro de produto", () => {
    cy.login(fakeUsername, fakePassword);
    cy.cadastroProdutoNotebook();
    cy.cadastroProdutoPhone();
    cy.cadastroMonitor();
  });

  it("Excluir Produto do carrinho", () => {
    cy.login(fakeUsername, fakePassword);
    cy.acessoListaCompra();
    cy.excluirProduto();
  });
});