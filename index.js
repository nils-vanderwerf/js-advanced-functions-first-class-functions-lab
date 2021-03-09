// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


function returnFirstTwoDrivers(allDrivers) {
    let myNewArray = allDrivers.slice(0, 2);
    return myNewArray;
}

function returnLastTwoDrivers(allDrivers) {
    let myNewArray = allDrivers.slice(-2);
    return myNewArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, returnTwoDrivers){

    let driversToReturn = returnTwoDrivers(arrayOfDrivers);

    return driversToReturn;

}
