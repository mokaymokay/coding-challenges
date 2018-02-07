/*
JavaScript JumpStart Online: Underscore To Camel Case

Write a function to convert a variable name from under_score format to camelCase.

Make sure you support an unlimited number of underscores in the input!

**Examples**

- INPUT: underToCamel("first_name");
- OUTPUT: "firstName"

- INPUT: underToCamel("my_income_tax_from_2015");
- OUTPUT: "myIncomeTaxFrom2015"
*/

function underToCamel(str) {
  var output = "",
      foundUnderscore = false;

  for (var i = 0; i < str.length ; i++) {
    if (str[i] === "_") {
      foundUnderscore = true;
    } else {
      if (foundUnderscore) {
        output += str[i].toUpperCase();
        foundUnderscore = false;
      } else {
        output += str[i];
      }
    }
  }
  return output;
}

underToCamel("first_name");
underToCamel("my_income_tax_from_2015");
