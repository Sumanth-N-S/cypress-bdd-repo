import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignUpPage from '../../pages/SignUpPage';
import LoginPage from '../../pages/LoginPage';

const signUpPage = new SignUpPage();
const loginPage = new LoginPage();

// Step Definitions for Sign Up
Given('the user is on the Magento Sign Up page', () => {
    signUpPage.visitSignUpPage();
});

When('the user enters valid details and submits the form', () => {
    signUpPage.fillSignUpForm({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password: 'Password123',
        confirmPassword: 'Password123',
    });
    signUpPage.submitForm();
});

Then('the account should be created successfully', () => {
    signUpPage.verifySuccessMessage();
});

Then('the user should be redirected to the account', () => {
    cy.url().should('include', '/account');
});

When('the user enters an email that is already registered', () => {
    signUpPage.fillSignUpForm({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'existinguser@example.com',
        password: 'Password123',
        confirmPassword: 'Password123',
    });
    signUpPage.submitForm();
});

Then('an error message should be displayed indicating the email is already registered', () => {
    signUpPage.verifyErrorMessage('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.');
});

When('the user leaves mandatory fields blank and submits the form', () => {
    signUpPage.submitForm();
});

Then('an error message should be displayed indicating the missing fields', () => {
    signUpPage.verifyRequiredErrorMessage('This is a required field.');
});

// Step Definitions for Login
Given('the user is on the Magento Login page', () => {
    loginPage.visitLoginPage();
});

When('the user enters valid credentials and submits the form', () => {
    loginPage.fillLoginForm({
        email: 'sumanthns@duck.com',
        password: 'Pass@1234',
    });
    loginPage.submitForm();
});

Then('the user should be logged in successfully', () => {
    loginPage.verifySuccessMessage();
});

When('the user enters incorrect credentials and submits the form', () => {
    loginPage.fillLoginForm({
        email: 'sumanthns@duck.com',
        password: 'WrongPassword',
    });
    loginPage.submitForm();
});

Then('an error message should be displayed indicating incorrect credentials', () => {
    loginPage.verifyErrorMessage('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
});
