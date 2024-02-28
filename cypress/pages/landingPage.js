import erros from '../fixtures/errorMessages.json';

class landingPage{
    userNameField = '#user-name'
    passwordField = '#password'
    loginButton = '#login-button'
    logoName = '.app_logo'
    errorButton = '[data-test="error"]'  
    menuButton = '#react-burger-menu-btn'   
    menuList = '.bm-item-list' 
    logoutButton = '#logout_sidebar_link'

    logIntoSauce(username, password) {
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginButton).click()
        cy.url().should('include', '/inventory.html')
        cy.get(this.logoName).contains("Swag Labs")
    }

    logInvalidCreds(username, password, error) {
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginButton).click()
        cy.get(this.errorButton).should('be.visible').should('have.text', error)
    }

    logout() {
        cy.get(this.menuButton).click()
        cy.get(this.menuList).should('be.visible')
        cy.get(this.logoutButton).contains('Logout').click()
        cy.url().should('include', '/')
    }
}

export default new landingPage()