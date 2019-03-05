Feature: Registering a user

  I want to register a person for our site

  Scenario: Should be able to go to the register page and add a person
    Given I am on our web site
    When I click on the "register"
    And I Fill out the form
    Then I should be registered