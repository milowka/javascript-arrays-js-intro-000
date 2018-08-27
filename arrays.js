var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, name) {
chocolateBars = ["foo", ...chocolateBars]
return chocolateBars
}
function destructivelyAddElementToBeginningOfArray (chocolateBars, name) {
  chocolateBars.unshift("foo")
return chocolateBars
}

function addElementToEndOfArray (chocolateBars, name){
  chocolateBars = [...chocolateBars,"foo"]
  return chocolateBars
}
function destructivelyAddElementToEndOfArray (chocolateBars,name){
  chocolateBars.push("foo");
  return chocolateBars
}

function accessElementInArray (array,index){
  array =[ 1, 2, 3,]
  return array [2]
}

function destructivelyRemoveElementFromBeginningOfArray (array) {
var array = [1,2,3];
  array.shift();
  return array
}
function removeElementFromBeginningOfArray (array){
var  array=[1,2,3]
  array.slice(1)
  return array
}
