function splitAmount(billAmount, levOfService, splitNum) {
    if (levOfService === "good") {
        let goodTip = .2;
        let tipAmount = billAmount * goodTip;
        let total = billAmount + tipAmount;
        let splitTotal = total / splitNum;
        splitTotal= splitTotal.toFixed(2);
        console.log(`Your total is $${splitTotal} per person.`);
    } else if (levOfService === "fair") {
        let fairTip = .15;
        let tipAmount = billAmount * fairTip;
        let total = billAmount + tipAmount;
        let splitTotal = total / splitNum;
        splitTotal= splitTotal.toFixed(2);
        console.log(`Your total is $${splitTotal} per person.`);
    } else if (levOfService === "poor") {
        let poorTip = .1;
        let tipAmount = billAmount * poorTip;
        let total = billAmount + tipAmount;
        let splitTotal = total / splitNum;
        splitTotal= splitTotal.toFixed(2);
        console.log(`Your total is $${splitTotal} per person.`);
    } else {
        console.log("Invalid Response");
    }
}

splitAmount(100, "good", 5);
splitAmount(100, "fair", 3);
splitAmount(100, "poor", 2);
splitAmount();