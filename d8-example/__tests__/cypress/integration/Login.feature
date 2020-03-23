Feature: Login

  Basic Drupal site setup and administration login.

  Background:
  Authentication testing


  @COMPLETED
  Scenario: Invalid login
    Given I am on the login screen
    And I use invalid administration credentials to log in
    Then I should see an error message containing "Unrecognized username or password."


  @COMPLETED
  Scenario: Valid Login
    Given I am on the login screen
    And I use the administration credentials to log in
    Then I should see the administration toolbar


  @COMPLETED
  Scenario: Admin toolbar is visible
    Given I am logged in as an administrator
    Then I should see the administration toolbar