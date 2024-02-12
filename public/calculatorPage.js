// cypress/support/calculatorPage.js

class CalculatorPage {
    // Visit the calculator application
    visit() {
      cy.visit('http://localhost:3000'); // Adjust the URL accordingly
    }
  
    // Click a number button on the calculator
    clickNumberButton(number) {
      cy.get('.grid-cols-3 button').contains(number).click();
    }
  
    // Click an operation button (+, -, *, /) on the calculator
    clickOperationButton(operation) {
      cy.get('[data-v-inspector="components/calculator.vue:126:25"]').contains(operation).click();
    }
  
    // Click the equals (=) button on the calculator
    clickEqualsButton() {
      cy.get('.grid-cols-3 button').contains('=').click();
    }
  
    // Click the subtraction (-) button on the calculator
    clickSubtractionButton() {
      cy.get('[data-v-inspector="components/calculator.vue:126:25"]').contains('-').click();
    }
  
    // Click the multiplication (*) button on the calculator
    clickMultiplicationButton() {
      cy.get('[data-v-inspector="components/calculator.vue:126:25"]').contains('*').click();
    }
  
    // Click the division (/) button on the calculator
    clickDivisionButton() {
      cy.get('[data-v-inspector="components/calculator.vue:126:25"]').contains('/').click();
    }
  
    // Get the result displayed on the calculator
    getResult() {
      return cy.get('.text-3xl.font-bold');
    }
  }
  
  export default new CalculatorPage();
  