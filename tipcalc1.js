function tipAmount(billAmount, levOfService) {
    if (levOfService === "good") {
        let goodTip = .2;
        let tipAmount = billAmount * goodTip;
        console.log(`Your tip should be $${tipAmount}.`);
    } else if (levOfService === "fair") {
        let fairTip = .15;
        let tipAmount = billAmount * fairTip;
        console.log(`Your tip should be $${tipAmount}.`);
    } else if (levOfService === "poor") {
        let poorTip = .1;
        let tipAmount = billAmount * poorTip;
        console.log(`Your tip should be $${tipAmount}.`);
    } else {
        console.log("Invalid Response");
    }
}

tipAmount(100, "good");
tipAmount(100, "fair");
tipAmount(100, "poor");
tipAmount();