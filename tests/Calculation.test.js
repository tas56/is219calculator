const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/sum');
const Difference = require('../src/Operations/difference');
const Product = require('../src/Operations/product');
const Quotient = require('../src/Operations/quotient');
const Exponentiation = require('../src/Operations/Exponentiation');
const Root = require('../src/Operations/Root');

test('Test of Calculation instantiation', () => {
    let op = Sum;

    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});
test('Test results for sum function', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});
test('Test results for difference function', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(-1);
});
test('Test results for product function', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test results for difference function', () => {
    let op = Quotient;
    let calculation = new Calculation(2,1,op);
    expect(calculation.GetResults()).toBe(2);
});
test('Test results for exponentiation function', () => {
    let op = Exponentiation;
    let calculation = new Calculation(2,2,op);
    expect(calculation.GetResults()).toBe(4);
});
test('Test results for root function', () => {
    let op = Root;
    let calculation = new Calculation(9,2,op);
    expect(calculation.GetResults()).toBe(3);
});
