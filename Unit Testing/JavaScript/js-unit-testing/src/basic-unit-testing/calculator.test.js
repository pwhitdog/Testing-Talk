import { add } from '../basic-unit-testing/src/calculator'

test('should add two numbers together', () => {
    //   Arrange
    const num1 = 1
    const num2 = 3

    // Act
    const result = add(num1, num2)
    
    // Assert
    expect(result).toBe(4)
})
