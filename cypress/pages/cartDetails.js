class cartDetails{
    shoppingCartContainer = '#shopping_cart_container'
    cartItemLabel = '.inventory_item_name'
    cartItemPrice = '.inventory_item_price'
    cartItemQuantity = '.cart_quantity'
    checkoutButton = '#checkout'

    navigateToCartDetails() {
        cy.get(this.shoppingCartContainer).find('a').click()
        cy.url().should('include', '/cart.html')
    }

    checkCartDetails(item, price, quantity) {
        cy.get(this.cartItemLabel).contains(item)
        cy.get(this.cartItemPrice).contains(price)
        cy.get(this.cartItemQuantity).contains(quantity)
        cy.get(this.checkoutButton).click()
        cy.url().should('include', '/checkout-step-one.html')
    }
}

export default new cartDetails()