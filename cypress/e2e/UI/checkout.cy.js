///<reference types ="Cypress"
import landingPage from '../../pages/landingPage.js';
import testData from '../../fixtures/testDataUI.json';
import erros from '../../fixtures/errorMessages.json';
import homePage from '../../pages/homePage.js';
import cartDetails from '../../pages/cartDetails.js';
import checkoutPage from '../../pages/checkoutPage.js';

describe('Checkout Workflow ', () => {
    beforeEach(() => {
      cy.visit('/')
      landingPage.logIntoSauce(testData.validCredentials.username, testData.validCredentials.password)
    });
  
    it('TC-1: Add item to cart and checkout', () => {
        homePage.addItemToCart()
        cartDetails.navigateToCartDetails()
        cartDetails.checkCartDetails(testData.cartData.itemLabel, testData.cartData.itemPrice, testData.cartData.itemQuantity)
        checkoutPage.startCheckout(testData.checkoutForm.firstName, testData.checkoutForm.lastName, testData.checkoutForm.postalCode)
        checkoutPage.finsihCheckout(testData.cartData.itemLabel, testData.cartData.itemPrice, testData.cartData.itemQuantity, testData.checkoutForm.orderCompleteText)
    });
  })