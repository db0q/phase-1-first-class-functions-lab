// Code your solution in this file!
const  returnFirstTwoDrivers = function(arr){
 return arr.slice(0,2)
}
const returnLastTwoDrivers =function(arr){
    return arr.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
function createFareMultiplier (multyplyNum){
 return function func(num){
    return multyplyNum * num
    }
}
const fareDoubler = createFareMultiplier(2);
const  fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(arrOfDrivers, returnDrivers){
  return returnDrivers(arrOfDrivers)
}