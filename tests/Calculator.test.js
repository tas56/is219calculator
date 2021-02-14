const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2);
    expect(result).toBe(3);
});
test('Calculator difference of two numbers', () => {
    let result = Calculator.Difference(1,2);
    expect(result).toBe(-1);
});
test('Calculator multiplying two numbers', () => {
    let result = Calculator.Product(1,2);
    expect(result).toBe(2);
});
test('Calculator dividing two numbers', () => {
    let result = Calculator.Quotient(1,2);
    expect(result).toBe(.5);
});
test('Calculator adding to calculations', () => {
    let result = Calculator.Quotient(1,2);
    // let calculations = Calculator.Calculations;
    //
    // calculations.forEach( (calculation => {
    //     console.log(calculation.GetResults());
    // })
    expect(result).toBe(.5);
});

