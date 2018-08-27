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