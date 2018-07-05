// This function takes the values passed into its callback and the results of
// running the callback and saves them into a hash, and returns that hash when
// the password is passed as an argument into the callback.

const saveOutput = (callback, password) => {
  let history = {}
  let authenticateOrLog = input => {
    if (input === password) {
      return history
    } else {
      history[input] = callback(input)
      return callback(input)
    }
  }
  return authenticateOrLog
}

const multiplyBy2 = num => { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
