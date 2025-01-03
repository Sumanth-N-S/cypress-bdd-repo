class SignUpPage {
    visitSignUpPage() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }

    fillSignUpForm({ firstName, lastName, email, password, confirmPassword }) {
        if (firstName) cy.get('#firstname').type(firstName);
        if (lastName) cy.get('#lastname').type(lastName);
        if (email) cy.get('#email_address').type(email);
        if (password) cy.get('#password').eq(0).type(password);
        if (confirmPassword) cy.get('#password-confirmation').type(confirmPassword);
    }

    submitForm() {
        cy.get('button[title="Create an Account"]').click();
    }

    verifySuccessMessage() {
        cy.get('.message-success').should('be.visible').and('contain', 'Thank you for registering with');
    }

    verifyErrorMessage(expectedMessage) {
        cy.get('.message-error').should('be.visible').and('contain', expectedMessage);
    }

    verifyRequiredErrorMessage(expectedMessage) {
        cy.get('[id*="-error"]', {timeout:10000}).should('be.visible').and('contain', expectedMessage);
    }
}

export default SignUpPage;
