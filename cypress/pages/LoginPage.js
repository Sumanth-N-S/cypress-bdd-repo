class LoginPage {
    visitLoginPage() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }

    fillLoginForm({ email, password }) {
        if (email) cy.get('#email').type(email);
        if (password) cy.get('#pass').type(password);
    }

    submitForm() {
        cy.get('button[class="action login primary"]').click();
    }

    verifySuccessMessage() {
        cy.contains('Account Information').should('be.visible');
    }

    verifyErrorMessage(expectedMessage) {
        cy.get('.message-error').should('be.visible').and('contain', expectedMessage);
    }
}

export default LoginPage;
