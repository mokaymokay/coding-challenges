// This program prints 'JerryKramerGeorgeElaine' on the console with only a
// single invocation to the function jerry, i.e. Calling jerry() should modify
// the value of "calls" to "JerryKramerGeorgeElaine."


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

calls = jerry(calls);
console.log(calls);
