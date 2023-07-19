class DragAndDropPage {
  getBoxAHeader() {
    return cy.get("#column-a > header");
  }

  getBoxBHeader() {
    return cy.get("#column-b > header");
  }
}

export default DragAndDropPage;
