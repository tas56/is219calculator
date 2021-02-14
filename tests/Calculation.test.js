const Calculation = require("../src/models/Calculation");

test('Create Calculation Object', () => {
   let calculation = new Calculation(1,2,"sum");
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("sum");
});
