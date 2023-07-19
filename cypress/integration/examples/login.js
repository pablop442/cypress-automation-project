import LoginPage from "../pageObject/loginPage";

describe("Login in flow test", () => {
  let userData = "";
  const loginPage = new LoginPage();
  before(() => {
    cy.fixture("users").then((data) => {
      userData = data;
    });
  });

  it("Log in successful", () => {
    cy.visit(Cypress.env("url") + "/login");
    loginPage.getUserNameIntput().type(userData.correct_name);
    loginPage.getPasswordInput().type(userData.correct_password);
    loginPage.getLoginButton().click();
    loginPage.getSuccessfulLoginMessage().should("be.visible");
  });

  it("Log in with incorrect password", () => {
    cy.visit(Cypress.env("url") + "/login");
    loginPage.getUserNameIntput().type(userData.correct_name);
    loginPage.getPasswordInput().type(userData.incorrect_password);
    loginPage.getLoginButton().click();
    loginPage.getFailedLoginMessage().should("be.visible");
  });

  it("Log in with incorrect user name", () => {
    cy.visit(Cypress.env("url") + "/login");
    loginPage.getUserNameIntput().type(userData.incorrect_name);
    loginPage.getPasswordInput().type(userData.correct_password);
    loginPage.getLoginButton().click();
    loginPage.getFailedLoginMessage().should("be.visible");
  });

  it("Successful logout", () => {
    cy.login(userData.correct_name, userData.correct_password);
    loginPage.getLogoutButton().click();
    loginPage.getSuccessLogoutMessage().should("be.visible");
  });
});
