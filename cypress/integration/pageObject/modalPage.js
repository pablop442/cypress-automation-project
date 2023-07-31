class ModalPage {
  getModal() {
    return cy.get(".modal");
  }

  getCloseModalButton() {
    return cy.get(".modal-footer > p");
  }

  getOpenModalButton() {
    return cy.get("#restart-ad");
  }
}

export default ModalPage;
