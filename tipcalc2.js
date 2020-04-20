// const tipAmount = require("./tipcalc1").tipAmount


function totalAmount(billAmount, levOfService) {
    if (levOfService === "good") {
        let goodTip = .2;
        let tipAmount = billAmount * goodTip;
        let total = billAmount + tipAmount;
        console.log(`Your total is $${total}.`);
    } else if (levOfService === "fair") {
        let fairTip = .15;
        let tipAmount = billAmount * fairTip;
        let total = billAmount + tipAmount;
        console.log(`Your total is $${total}.`);
    } else if (levOfService === "poor") {
        let poorTip = .1;
        let tipAmount = billAmount * poorTip;
        let total = billAmount + tipAmount;
        console.log(`Your total is $${total}.`);
    } else {
        console.log("Invalid Response");
    }
}

totalAmount(100, "good");
totalAmount(100, "fair");
totalAmount(100, "poor");
totalAmount();