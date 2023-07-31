class DropdownPage {
  getDropdown() {
    return cy.get("#dropdown");
  }

  getOption1() {
    return cy.get("option[value=1]");
  }

  getOption2() {
    return cy.get("option[value=2]");
  }
}

export default DropdownPage;
