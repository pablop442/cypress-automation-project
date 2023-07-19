class AddElementsPage {
  getAddButton() {
    return cy.get('[onclick="addElement()"]');
  }

  getElement1() {
    return cy.get("#elements > :nth-child(1)");
  }
  getElement2() {
    return cy.get("#elements > :nth-child(2)");
  }
  getElement3() {
    return cy.get("#elements > :nth-child(3)");
  }
  getElement4() {
    return cy.get("#elements > :nth-child(4)");
  }
  getElement5() {
    return cy.get("#elements > :nth-child(5)");
  }
}

export default AddElementsPage;
