// Given a string J with distinct characters, this function returns the number
// of times each character exists in string S.

// Time complexity: O(J * S)
// Space complexity: O(1)

const numJewelsInStones = (J, S) => {
    let count = 0
    for (let jewel of J) { // O(J)
        let re = new RegExp(jewel,"g");
        let jewelCount = S.match(re) // O(S) assuming .match looks over each char in S
        if (jewelCount != null) {
            count += jewelCount.length
        }
    }
    return count
}

console.log(numJewelsInStones('aA', 'aAAbbbb'));
