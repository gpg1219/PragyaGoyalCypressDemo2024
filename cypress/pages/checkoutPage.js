class checkoutPage{
    checkoutFirstName = '#first-name'
    checkoutLastName = '#last-name'
    checkoutPostalCode = '#postal-code'
    continueButton = '#continue'
    cartItemLabel = '.inventory_item_name'
    cartItemPrice = '.inventory_item_price'
    cartItemQuantity = '.cart_quantity'
    finishButton = '#finish'
    orderComplete = '.complete-header'

    startCheckout(first_name, last_name, zip_code) {
        cy.get(this.checkoutFirstName).type(first_name)
        cy.get(this.checkoutLastName).type(last_name)
        cy.get(this.checkoutPostalCode).type(zip_code)
        cy.get(this.continueButton).click()
        cy.url().should('include', '/checkout-step-two.html')
    
    }

    finsihCheckout(item, price, quantity, text) {
        cy.get(this.cartItemLabel).contains(item)
        cy.get(this.cartItemPrice).contains(price)
        cy.get(this.cartItemQuantity).contains(quantity)
        cy.get(this.finishButton).click()
        cy.url().should('include', '/checkout-complete.html')
        cy.get(this.orderComplete).should('have.text', text)
    }
}

export default new checkoutPage()