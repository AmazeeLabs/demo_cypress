Feature: Homepage

  Homepage feature requirements.

  Background:
  This is some background information that will provide context to these tests.


  @COMPLETED
  Scenario: Homepage is viewable in Spanish
    Given I am on the homepage
    And I change the language to Spanish
    Then I should see the page reload in Spanish
