Feature: Our little site

  I want to see our site for the demo

  Scenario: Should be able to go to the login form the home page
    Given I am on our web site
    When I click on the "login"
    Then I see "Home" in the title
    And I should see a "Login" form
    And I should see a login button