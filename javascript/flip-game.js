// On a table are N cards, with a positive integer printed on the front and back
// of each card (possibly different). We flip any number of cards. If the number
// X on the back of the chosen card is not on the front of any card, then this
// number X is good. What is the smallest number that is good?  If no number is
// good, output 0. Here, fronts[i] and backs[i] represent the number on the front
// and back of card i. A flip swaps the front and back numbers, so the value on
// the front is now on the back and vice versa.

// This solution currently passes 152/169 test cases on LeetCode.

const flipgame = (fronts, backs) => {
    let cards = fronts.slice(0)
    let output;
    for (let i = 0; i < fronts.length; i++) {
        cards[i] = backs[i]
        if (!cards.includes(fronts[i])) {
          output = output || fronts[i]
          if (output > fronts[i]) {
            output = fronts[i]
          }
        }
    }
    for (let i = 0; i < backs.length; i++) {
        cards[i] = fronts[i]
        if (!cards.includes(backs[i])) {
          output = output || backs[i]
          if (output > backs[i]) {
            output = backs[i]
          }
        }
    }
    return output == null ? 0 : output
};

console.log(flipgame([1,2,4,4,7], [1,3,4,1,3])); // 2
console.log(flipgame([1,1], [1,2])); // 2
console.log(flipgame([1,1], [2,2])); // 1
console.log(flipgame([2,1], [1,2])); // 1
console.log(flipgame([2,1], [1,2])); // 1
