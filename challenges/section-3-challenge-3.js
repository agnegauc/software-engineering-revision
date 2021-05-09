// calculate and compare bmis
'use strict';

const Mark = {
    fullName: 'Mark Miller',

    // metric units (cm & kg)
    height: 1.95,
    weight: 92,

    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return this.BMI;
    }
}

const John = {
    fullName: 'John Smith',

    // metric units (cm & kg)
    height: 1.69,
    weight: 78,

    calcBMI: function () {
        this.BMI = this.weight / this.height ** 2;
        return this.BMI;
    }
}

if (Mark.calcBMI() > John.calcBMI())
    console.log(`${Mark.fullName}'s BMI (${Mark.BMI.toFixed(2)}) is higher than ${John.fullName}'s (${John.BMI.toFixed(2)})!`);
// not calling the function again because {object}.BMI is already set
else if (John.BMI > Mark.BMI)
    console.log(`${John.fullName}'s BMI (${John.BMI.toFixed(2)}) is higher than ${Mark.fullName}'s (${Mark.BMI.toFixed(2)})!`);
else
    console.log(`BMIs are equal. ${John.BMI.toFixed(2)}`);