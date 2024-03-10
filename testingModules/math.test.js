const {addition, 
    subtraction, 
    multiplication, 
    division,
    squareroot,
    max} = require('./math');
const num1 = 1;
const num2 = 2;
const num3 = 4;

describe('Testing the Math module', () => {
    test("Should add 2 numbers", () => {
        expect(addition(num1, num2)).toBe(num1 + num2)
    });
    test('Should subtract 2 numbers', () => {
        expect(subtraction(num1, num2)).toBe(num2 - num1)
    });
    test('Should multiply 2 numbers', () => {
        expect(multiplication(num1, num2)).toBe(num1 * num2);
    });
    test('Should divide 2 numbers', () => {
        expect(division(num1, num2)).toBe(num2 / num1);
    });
    test('Should find the square root of a number', () => {
        expect(squareroot(num3)).toBe(Math.sqrt(num3));
    });
    test('Should find the max value of 2 numbers', () => {
        expect(max(num1, num3)).toBe(Math.max(num1, num3));
    });
});