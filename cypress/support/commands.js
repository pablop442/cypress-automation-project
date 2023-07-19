import DragAndDropPage from "../integration/pageObject/dragAndDropPage";
import LoginPage from "../integration/pageObject/loginPage";

const loginPage = new LoginPage();

//Log in successfully to session
Cypress.Commands.add("login", (userName, password) => {
  cy.visit(Cypress.env("url") + "/login");
  loginPage.getUserNameIntput().type(userName);
  loginPage.getPasswordInput().type(password);
  loginPage.getLoginButton().click();
});
