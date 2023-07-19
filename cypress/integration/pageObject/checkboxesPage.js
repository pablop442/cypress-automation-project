class CheckboxesPage {
  getCheckbox1() {
    return cy.get("#checkboxes > :nth-child(1)");
  }

  getCheckbox2() {
    return cy.get("#checkboxes > :nth-child(3)");
  }
}

export default CheckboxesPage;
