import DropdownPage from "../pageObject/dropdownPage";

describe("Select options from dropdown", () => {
  const dropdownPage = new DropdownPage();

  it("Select option 2 from dropdown", () => {
    cy.visit(Cypress.env("url") + "/dropdown");
    dropdownPage.getDropdown().select("2");
    dropdownPage.getOption2().should("have.attr", "selected");
  });

  it("Select option 1 from dropdown", () => {
    cy.visit(Cypress.env("url") + "/dropdown");
    dropdownPage.getDropdown().select("1");
    dropdownPage.getOption1().should("have.attr", "selected");
  });
});
