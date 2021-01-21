
// first problem solving function.
function kilometerToMeter(getKilometer) {
    if(getKilometer != 0 || getKilometer == 0){
        // 1 kilometer = 1000 meter. user input (getKilometer) parsing to float
        var meter = +getKilometer * 1000; 
    }
    return meter;
}

// second problem solving function.
function budgetCalculator(numberOfClock, numberOfPhone, numberOfLaptop) {

    var clockPrice = numberOfClock * 50;
    var phonePrice = numberOfPhone * 100;
    var laptopPrice = numberOfLaptop * 500;
    var totalPrice = clockPrice + phonePrice + laptopPrice;
    return totalPrice;
}

// third problem solving function.
function hotelCost(numberOfDay) {
    var totalCost = 0; 
    if (numberOfDay <= 10) {
        totalCost = numberOfDay *100;
    }
    else if(numberOfDay <= 20) {
        var firstOferRent = 10 * 100;
        var extraDay = numberOfDay - 10;
        var secondOferRent = extraDay *80;
        totalCost = firstOferRent + secondOferRent;
    }
    else {
        firstOferRent = 10 * 100;
        secondOferRent = 10 *80;
        extraDay = numberOfDay -20;
        var thirdOferRent = extraDay * 50; 
        totalCost = firstOferRent + secondOferRent + thirdOferRent;
    }
    return totalCost;
}
console.log(hotelCost(21));
// fourth problem solving function.
function megaFriend() {
    
}