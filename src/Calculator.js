const Calculation = require('./models/Calculation');
const Sum = require('./Operations/sum');
const Difference = require('./Operations/difference');
const Product = require('./Operations/product');
const Quotient = require('./Operations/quotient');

class Calculator {

    static Sum(a,b){
        let calculation = new Calculation(a,b,Sum);

        return calculation.GetResults();
    }
    static Difference(a,b){
        let calculation = new Calculation(a,b,Difference);

        return calculation.GetResults();
    }
    static Product(a,b){
        let calculation = new Calculation(a,b,Product);

        return calculation.GetResults();
    }
    static Quotient(a,b){
        let calculation = new Calculation(a,b,Quotient);

        return calculation.GetResults();
    }

}

module.exports = Calculator;