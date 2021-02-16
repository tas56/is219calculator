const Calculation = require('../src/Models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');
const Exponentiation = require('../src/Operations/Exponentiation');
const Root = require('../src/Operations/Root');

class Calculator {

    static Calculations = [];

    static AddCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }
    static GetLastCalculation() {
        return this.Calculations[this.Calculations.length -1].value;
    }
    static Sum(a,b){
        let calculation = Calculation.Create(a,b,Sum);
        this.AddCalculation(Calculation);
        return calculation;
    }
    static Difference(a,b){
        let calculation = Calculation.Create(a,b,Difference);
        this.AddCalculation(Calculation);
        return calculation;
    }
    static Product(a,b){
        let calculation = Calculation.Create(a,b,Product);
        this.AddCalculation(Calculation);
        return calculation;
    }
    static Quotient(a,b){
        let calculation = Calculation.Create(a,b,Quotient);
        this.AddCalculation(Calculation);
        return calculation;
    }
    static Exponentiation(a,b){
        let calculation = Calculation.Create(a,b,Exponentiation);
        this.AddCalculation(Calculation);
        return calculation;
    }
    static Root(a,b){
        let calculation = Calculation.Create(a,b,Root);
        this.AddCalculation(Calculation);
        return calculation;
    }

}

module.exports = Calculator;