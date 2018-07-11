// This function performs a callback on each value of an object, and returns an
// array of keys whose associated values yielded true from the callback.

const goodKeys = (object, callback) => {
  let output = []
  for (let prop in object) {
    if (callback(object[prop])) { output.push(prop) }
  }
  return output
}

var sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
