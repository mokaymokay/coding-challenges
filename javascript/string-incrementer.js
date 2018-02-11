/*
Your job is to write a function which increments a string, to create a new string.
If the string already ends with a num, the num should be incremented by 1.
If the string does not end with a num the num 1 should be appended to the
new string.

**Examples**

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

"" -> "1"

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString(str) {
  var output = "",
      startingDigit = str.search(/\d/);
  if (startingDigit !== -1) {
    var num = str.slice(startingDigit);
    output += str.slice(0, startingDigit);
    var added = (parseInt(num) + 1) + "";
    for (var i = 0; added.length < num.length; i++) {
      added = "0" * i + added;
    }
    output += added;
  } else {
    output = str + 1;
  }
  return output;
}

incrementString("foo");
incrementString("foobar23");
incrementString("foo0042");
incrementString("foo9");
incrementString("foo099");
incrementString("");
