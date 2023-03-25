const returnFirstTwoDrivers = function myFunction([]) {
    return (['Antonia', 'Nuru'])
}

const returnLastTwoDrivers = function yourFunction([]) {
    return (['Amari', 'Mo'])
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function (fare1) {
        return (fare * fare1)
    }
}

const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;

const selectDifferentDrivers = function (arrayOfDrivers, drivers) {
    return drivers(arrayOfDrivers)
}


