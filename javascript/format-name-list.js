// This function takes an array of hashes of names and returns a string of names
// in a particular format.

function list(names){
  let output = ''
  while (names.length > 0) {
    let namesLen = names.length
    if (namesLen > 2) {
      output += names.shift()['name'] + ', '
    } else if (namesLen === 2) {
      return output += `${names[0]['name']} & ${names[1]['name']}`
    } else {
      return output = names[0]['name']
    }
  }
  return output
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}])) // 'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}])) // 'Bart, Lisa & Maggie'
console.log(list([{name: 'Bart'},{name: 'Lisa'}])) // 'Bart & Lisa'
console.log(list([{name: 'Bart'}])) // 'Bart'
console.log(list([])); // ''
