// Given a number, return a string with dash'-'marks before and after each odd
// integer, but do not begin or end the string with a dash mark.

// **Examples**
//
// - INPUT: dashatize(274)
// - OUTPUT: '2-7-4'
//
// - INPUT: dashatize(6815)
// - OUTPUT: '68-1-5'

const dashatize = (num) => {
  if (isNaN(num)) return num.toString()
  let str = num.toString()
  let output = ''
  if (str[0] === '-') str = str.slice(1)
  for (let int of str) {
    if (parseInt(int) % 2 !== 0) {
      if (output.charAt(output.length-1) !== '-' && int !== str[0]) {
        output += `-${int}-`
      } else {
        output += `${int}-`
      }
    } else {
      output += int
    }
  }
  return output.charAt(output.length-1) !== '-' ? output : output.slice(0,-1)
}

console.log(dashatize(5201314));
console.log(dashatize(274));
console.log(dashatize(6815));
