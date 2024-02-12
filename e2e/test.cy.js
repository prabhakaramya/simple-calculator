// cypress/integration/calculator_spec.js

describe('Calculator Tests', () => {
  beforeEach(() => {
    // Visit the calculator application before each test
    cy.visit('http://localhost:3000'); // Adjust the URL accordingly
  });

  it('should add two numbers correctly', () => {
    // Type the first number
    cy.get('.grid-cols-3 button').contains('5').click();
    cy.wait(3000); // Adjust the wait time as needed

    // Click the addition button
    cy.get('[data-v-inspector="components/calculator.vue:126:25"]').contains('+').click();
    cy.wait(3000); // Adjust the wait time as needed

    // Type the second number
    cy.get('.grid-cols-3 button').contains('7').click();
    cy.wait(3000); // Adjust the wait time as needed

    // Click the equals button
    cy.get('.grid-cols-3 button').contains('=').click();
    cy.wait(3000); // Adjust the wait time as needed

    // Verify that the result is displayed as expected
    // Verify that the result is displayed as expected
cy.get('.grid-cols-3').contains('12').should('exist');

  });

  // Add more test cases for subtraction, multiplication, division, etc.
});
