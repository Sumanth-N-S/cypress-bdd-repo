Feature: Account Creation and Login on Magento

  Scenario: Successful account creation
    Given the user is on the Magento Sign Up page
    When the user enters valid details and submits the form
    Then the account should be created successfully
    And the user should be redirected to the account

  Scenario: Login with valid credentials
    Given the user is on the Magento Login page
    When the user enters valid credentials and submits the form
    Then the user should be logged in successfully
    And the user should be redirected to the account

  Scenario: Account creation with an already registered email
    Given the user is on the Magento Sign Up page
    When the user enters an email that is already registered
    Then an error message should be displayed indicating the email is already registered

  Scenario: Account creation with missing mandatory fields
    Given the user is on the Magento Sign Up page
    When the user leaves mandatory fields blank and submits the form
    Then an error message should be displayed indicating the missing fields

  Scenario: Login with invalid credentials
    Given the user is on the Magento Login page
    When the user enters incorrect credentials and submits the form
    Then an error message should be displayed indicating incorrect credentials
