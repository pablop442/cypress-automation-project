describe("Download all file types", () => {
  it("Verify if file is downloaded", () => {
    cy.visit(Cypress.env("url") + "/download");
    //Set the attribute name to download before clicking it avoiding any potential waiting for page load behavior
    cy.get('[href="download/Abhay_Kumar_Resume.pdf"]')
      .then((el) => {
        el.attr("download", "");
      })
      .click();
    cy.verifyDownload("Abhay_Kumar_Resume.pdf");

    cy.get('[href="download/some-file.txt"]')
      .then((el) => {
        el.attr("download", "");
      })
      .click();
    cy.verifyDownload("some-file.txt");

    cy.get('[href="download/demo.png"]')
      .then((el) => {
        el.attr("download", "");
      })
      .click();
    cy.verifyDownload("demo.png");

    cy.get('[href="download/package-lock.json"]')
      .then((el) => {
        el.attr("download", "");
      })
      .click();
    cy.verifyDownload("package-lock.json");
  });
});
