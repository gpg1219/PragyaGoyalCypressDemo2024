///<reference types ="Cypress"
import landingPage from '../../pages/landingPage.js';
import testData from '../../fixtures/testDataUI.json';
import erros from '../../fixtures/errorMessages.json';

describe('Login Scenarios', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('TC-1: Successful Login', () => {
    landingPage.logIntoSauce(testData.validCredentials.username, testData.validCredentials.password)
  });

  it('TC-2: Login with invalid credentials', () => {
    landingPage.logInvalidCreds(testData.invalidCredentials.username, testData.invalidCredentials.password, erros.failureMessageInvalidCredential)
  });

  it('TC-3: Logout', () => {
    landingPage.logIntoSauce(testData.validCredentials.username, testData.validCredentials.password)
    landingPage.logout()
  });
})


