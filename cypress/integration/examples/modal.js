import ModalPage from "../pageObject/modalPage";
describe("Check if modal is displayed and close modal", () => {
  const modalPage = new ModalPage();

  it("Modal should be displayed on first load", () => {
    cy.visit(Cypress.env("url") + "/entry_ad");
    modalPage.getModal().should("exist");
  });

  it("Modal can be closed", () => {
    cy.visit(Cypress.env("url") + "/entry_ad");
    modalPage.getCloseModalButton().click();
    modalPage.getModal().should("not.be.visible");
  });

  it("Modal can be opened", () => {
    cy.visit(Cypress.env("url") + "/entry_ad");
    modalPage.getOpenModalButton().click();
    modalPage.getModal().should("exist");
  });
});
