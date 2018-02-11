/*
Write simple .camelCase method for strings. All words must have their first
letter capitalized without spaces.

**Examples**

- INPUT: "hello case".camelCase()
- OUTPUT: HelloCase

- INPUT: "camel case word".camelCase()
- OUTPUT: CamelCaseWord

*/

String.prototype.camelCase = function() {
  return this.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}

"hello case".camelCase();
