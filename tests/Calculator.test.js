const Calculator = require('../src/Calculator');

test('Calculator sum function', () => {
    expect(Calculator.Sum(1,2).GetResults()).toBe(3);
});
test('Calculator difference function', () => {
    expect(Calculator.Difference(1,2).GetResults()).toBe(-1);
});
test('Calculator product function', () => {
    expect(Calculator.Product(1,2).GetResults()).toBe(2);
});
test('Calculator quotient function', () => {
    expect(Calculator.Quotient(1,2).GetResults()).toBe(.5);
});
test('Calculator exponential function', () => {
    expect(Calculator.Exponentiation(2,2).GetResults()).toBe(4);
});
test('Calculator root function', () => {
    expect(Calculator.Root(4,2).GetResults()).toBe(2);
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

