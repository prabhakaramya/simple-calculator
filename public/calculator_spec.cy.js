import CalculatorPage from '../support/calculatorPage';

// Describe block for Calculator Tests
describe('Calculator Tests', () => {
  // Before each test, visit the CalculatorPage
  beforeEach(() => {
    CalculatorPage.visit();
  });

  // Helper function to capture a screenshot
  const captureScreenshot = (name) => {
    cy.screenshot(name);
  };

  // Helper function to enter a number in the calculator
  const enterNumber = (num) => {
    cy.wait(1000);
    CalculatorPage.clickNumberButton(num);
    cy.wait(1000);
  };

  // Helper function to click an operation button in the calculator
  const clickOperation = (operation) => {
    CalculatorPage.clickOperationButton(operation);
    cy.wait(1000);
  };

  // Helper function to click the equals button and capture the result
  const clickEquals = () => {
    CalculatorPage.clickEqualsButton();
    cy.wait(1000);
    CalculatorPage.getResult().should('be.visible');
    cy.then(() => captureScreenshot('result'));
  };

  // Helper function to perform a calculation and check the result
  const performCalculation = (expression, expected) => {
    const operators = expression.split(/(\+|-|\*|\/)/);
    operators.forEach((operator, index) => {
      if (index % 2 === 0) {
        // Operand: Enter the number
        const num = parseFloat(operator);
        enterNumber(num);
      } else {
        // Operator: Click the operation button
        clickOperation(operator);
      }
    });
    // Click equals and check the result
    clickEquals();
    CalculatorPage.getResult().should('have.text', expected);
  };

  // Test case: Addition
  it('should add two numbers correctly', () => {
    performCalculation('5+7', '12');
  });

  // Test case: Subtraction
  it('should subtract two numbers correctly', () => {
    performCalculation('8-5', '3');
  });

  // Test case: Multiplication
  it('should multiply two numbers correctly', () => {
    performCalculation('4*6', '24');
  });

  // Test case: Division
  it('should divide two numbers correctly', () => {
    performCalculation('9/3', '3');
  });

  // Test case: Multiple expressions
  it('should handle multiple expressions', () => {
    performCalculation('6+7-7*5-7', '-29');
  });

  // Test case: Negative numbers in subtraction
  it('should handle negative numbers in subtraction', () => {
    performCalculation('5-8', '-3');
  });

  // Test case: Decimal division
  it('should handle decimal division', () => {
    performCalculation('7/2', '3.5');
  });

  // Test case: Mixed operations
  it('should handle mixed operations correctly', () => {
    performCalculation('6/2*4-1', '11');
  });
});
