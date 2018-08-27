var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (chocolateBars, name) {
chocolateBars = ["foo", ...chocolateBars]
return chocolateBars
}
function destructivelyAddElementToBeginningOfArray (chocolateBars, name) {
  chocolateBars.unshift("foo")
return chocolateBars
}
