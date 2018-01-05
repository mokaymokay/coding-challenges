/*
JavaScript JumpStart Online: Vowel Count

Create the function vowelCount(str) that takes a str parameter and returns the
number of vowels the string contains (ie. "Fullstack Academy" would return 5).

Do not count 'y' as a vowel for this challenge.

**Examples**

- INPUT: vowelCount("Good Job");
- OUTPUT: 3

- INPUT: vowelCount("Yankees");
- OUTPUT: 3
*/

function vowelCount(str) {
  var vowels = "aeiou",
      str = str.toLowerCase(),
      count = 0;

  for(var index = 0; index < str.length ; index++){
    if (vowels.indexOf(str[index]) >= 0) {
      count++;
    }
  }
  return count;
}

vowelCount("Good Job");
vowelCount("Yankees");
vowelCount("Fullstack Academy")
