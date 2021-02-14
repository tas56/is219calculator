const Calculation = require('./models/Calculation');
const Sum = require('./Operations/sum');
const Difference = require('./Operations/difference');
const Product = require('./Operations/product');
const Quotient = require('./Operations/quotient');

class Calculator {

    static Calculations = [];

    static Sum(a,b){
        let calculation = new Calculation(a,b,Sum);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }
    static Difference(a,b){
        let calculation = new Calculation(a,b,Difference);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }
    static Product(a,b){
        let calculation = new Calculation(a,b,Product);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }
    static Quotient(a,b){
        let calculation = new Calculation(a,b,Quotient);
        this.Calculations.push(Calculation);
        return calculation.GetResults();
    }

}

module.exports = Calculator;