const Calculator = require('../src/Calculator');

test('Calculator sum function', () => {
    let result = Calculator.Sum(1,2);
    expect(result.GetResults()).toBe(3);
});
test('Calculator difference function', () => {
    let result = Calculator.Difference(1,2);
    expect(result.GetResults()).toBe(-1);
});
test('Calculator product function', () => {
    let result = Calculator.Product(1,2);
    expect(result.GetResults()).toBe(2);
});
test('Calculator quotient function', () => {
    let result = Calculator.Quotient(1,2);
    expect(result.GetResults()).toBe(.5);
});
test('Calculator exponential function', () => {
    let result = Calculator.Exponentiation(2,2);
    expect(result.GetResults()).toBe(4);
});
test('Calculator root function', () => {
    let result = Calculator.Root(4,2);
    expect(result.GetResults()).toBe(2);
});

// test('Calculator adding to calculations', () => {
//     let result = Calculator.Quotient(1,2);
//     let calculations = Calculator.Calculations;
//
//     calculations.forEach( (calc => {
//         console.log(calc.GetResults());
//     });
//     expect(result.GetResults()).toBe(.5);
// });

// test('Calculator get last calculation', () => {
//     Calculator.Product(1,2);
//     let CalculationObject = Calculator.GetLastCalculation();
//     expect(CalculationObject.GetResults()).toBe(3);
// });

