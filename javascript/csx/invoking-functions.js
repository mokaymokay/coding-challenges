// Examine the code given to you. Try to make the calls variable equal to
// 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.
//
// Calling jerry() should modify the value of "calls" to "JerryKramerGeorgeElaine"


let calls = "";

function jerry(str) {
	str = "Jerry"
  return kramer(str)
}

function george(str) {
  str += "George"
	return elaine(str)
}

function elaine(str) {
	return str += "Elaine"
}

function kramer(str) {
	str += "Kramer"
  return george(str)
}

// should return: 'JerryKramerGeorgeElaine'
calls = jerry(calls);
console.log(calls);
