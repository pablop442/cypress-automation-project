import DragAndDropPage from "../pageObject/dragAndDropPage";

describe("Drag and drop pieces", () => {
  //Use DataTransfer object to transfer data from box A when dragging it
  const dataTransfer = new DataTransfer();
  const dragAndDropPage = new DragAndDropPage();

  it("Drag piece A to B", () => {
    cy.visit(Cypress.env("url") + "/drag_and_drop");
    cy.contains("A").trigger("dragstart", { dataTransfer });
    cy.contains("B").trigger("drop", { dataTransfer });
    dragAndDropPage.getBoxBHeader().should("have.text", "A");
  });

  it("Drag piece B to A", () => {
    cy.visit(Cypress.env("url") + "/drag_and_drop");
    cy.contains("B").trigger("dragstart", { dataTransfer });
    cy.contains("A").trigger("drop", { dataTransfer });
    dragAndDropPage.getBoxAHeader().should("have.text", "B");
  });
});
