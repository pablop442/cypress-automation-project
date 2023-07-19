class LoginPage {
  getUserNameIntput() {
    return cy.get("#username");
  }

  getPasswordInput() {
    return cy.get("#password");
  }

  getLoginButton() {
    return cy.get(".radius");
  }

  getSuccessfulLoginMessage() {
    return cy.get(".flash.success");
  }

  getLogoutButton() {
    return cy.get(".button");
  }

  getFailedLoginMessage() {
    return cy.get(".flash.error");
  }

  getSuccessLogoutMessage() {
    return cy.get(".flash.success");
  }
}

export default LoginPage;
