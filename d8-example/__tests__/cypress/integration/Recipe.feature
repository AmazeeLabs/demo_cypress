Feature: Recipe Overview
  A user can retrieve a list of all recipes

  Background:
    Given all recipes have been added into the cms

  Scenario: List all current recipes
    Given the user has requested the recipe overview
    Then the list of recipes should contain "Deep mediterranean quiche"
    And the list of recipes should contain "Vegan chocolate and nut brownies"
    But the list of recipes should not contain "No Recipe"

  Scenario: List all current recipe collections
    Given the user has requested the recipe overview
    Then the list of recipes collections should contain "Chocolate"