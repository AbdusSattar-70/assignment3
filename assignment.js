
// first problem solving function.
function kilometerToMeter(getKilometer) {

    if(getKilometer != 0 && getKilometer > 0 ){
        // 1 kilometer = 1000 meter. user input (getKilometer) parsing to float
        var meter = +getKilometer * 1000; 
    }
    else{
        console.log("an error-please enter positive value greater than 0")
    }
    return meter;
}


// second problem solving function.
function budgetCalculator(numberOfClock, numberOfPhone, numberOfLaptop) {
    // if parameter input is fractional/less than 1, this condition avoid it
    if (numberOfClock >= 1 && numberOfPhone >= 1 && numberOfLaptop >= 1 ) {
        var clockPrice = numberOfClock * 50;
        var phonePrice = numberOfPhone * 100;
        var laptopPrice = numberOfLaptop * 500;
        var totalPrice = clockPrice + phonePrice + laptopPrice;
    }
    else {
        console.log("an error- please input 3 parameter & parameter is greater than 0 and nonfraction");
    }
    return totalPrice;
}

// third problem solving function.
function hotelCost(numberOfDay) {
    var totalCost = 0; 
    if (numberOfDay <= 10 && numberOfDay >= 1) {
        // when per day rent =100.
        totalCost = numberOfDay * 100;
    }
    else if(numberOfDay <= 20 && numberOfDay >= 1 ) {
        // when first ten days over & then per day rent = 80.
        var firstOferRent = 10 * 100;
        var extraDay = numberOfDay - 10;
        var secondOferRent = extraDay * 80;
        totalCost = firstOferRent + secondOferRent;
        
    }
    else if(numberOfDay > 20) {
        // when 20 days over & then per day rent = 50.
        firstOferRent = 10 * 100;
        secondOferRent = 10 * 80;
        extraDay = numberOfDay - 20;
        var thirdOferRent = extraDay * 50; 
        totalCost = firstOferRent + secondOferRent + thirdOferRent;
    }
    else {
    console.log(" an error - minimum input : 1")
    }
    return totalCost;
}

// fourth problem solving function.
function megaFriend() {
    
}