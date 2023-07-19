import AddElementsPage from "../pageObject/addElementsPage";

describe("Addding and deleting elements to the page", () => {
  const addElementsPage = new AddElementsPage();

  it("Adds 5 elements to the page", () => {
    cy.visit(Cypress.env("url") + "/add_remove_elements/");
    for (let i = 0; i < 5; i++) {
      addElementsPage
        .getAddButton()
        .click({ multiple: true })
        .should("be.visible");
    }
  });

  it("Removes 5 elements to the page", () => {
    cy.visit(Cypress.env("url") + "/add_remove_elements/");
    for (let i = 0; i < 5; i++) {
      addElementsPage.getAddButton().click({ multiple: true });
    }
    for (let i = 0; i < 5; i++) {
      addElementsPage.getElement1().click().should("not.exist");
    }
  });
});
