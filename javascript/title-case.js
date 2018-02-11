/*
Write a function that will convert a string into title case, given an optional
list of exceptions (minor words). The list of minor words will be given as a
string with each word separated by a space. Your function should ignore the case
of the minor words string -- it should behave in the same way even if the case of
the minor word string is changed.

First argument (required): the original string to be converted.

Second argument (optional): space-delimited list of minor words that must always
be lowercase except for the first word in the string. The JavaScript/CoffeeScript
tests will pass undefined when this argument is unused.

**Examples**

- INPUT: 'a clash of KINGS', 'a an the of'
- OUTPUT: 'A Clash of Kings'

- INPUT: THE WIND IN THE WILLOWS', 'The In', 'a an the of'
- OUTPUT: 'The Wind in the Willows'

- INPUT: 'the quick brown fox'
- OUTPUT: 'The Quick Brown Fox'

*/

function titleCase(title, minorWords) {
  title = title.toLowerCase().split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  console.log(title);
}

titleCase('a clash of KINGS', 'a an the of');
