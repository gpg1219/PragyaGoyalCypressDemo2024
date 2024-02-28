class homePage{
    inventoryList = '.inventory_list'
    inventoryItem = '.inventory_item'
    addToCartButton = '#add-to-cart-sauce-labs-backpack'

    addItemToCart() {
        cy.get(this.inventoryList).find(this.addToCartButton).click()
    }
}

export default new homePage()
