const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/sum');
const Difference = require('../src/Operations/difference');
const Product = require('../src/Operations/product');
const Quotient = require('../src/Operations/quotient');

test('Test of Calculation instantiation', () => {
    let op = Sum;

    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

