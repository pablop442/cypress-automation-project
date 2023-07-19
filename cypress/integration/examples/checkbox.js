import CheckboxesPage from "../pageObject/checkboxesPage";

describe("Checkbox element test", () => {
  const checkboxPage = new CheckboxesPage();
  it("Selects only checkbox 1", () => {
    cy.visit(Cypress.env("url") + "/checkboxes");
    checkboxPage.getCheckbox2().click();
    checkboxPage.getCheckbox1().click();
    checkboxPage.getCheckbox1().should("be.checked");
    checkboxPage.getCheckbox2().should("not.be.checked");
  });
});
