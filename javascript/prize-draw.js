// To participate in a prize draw each one gives his/her first name.
// Each letter of a first name has a value which is its rank in the English alphabet.
// A and a have rank 1, B and b rank 2 and so on.
// The length of the first name is added to the sum of these ranks hence a number n.
// An array of random weights is linked to the firstnames and each n is multiplied by
// its corresponding weight to get what they call a winning number.
//
// Example:
// names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH
// weights: [1, 4, 4, 5, 2, 1]
//
// PAUL -> n = length of first name + 16 + 1 + 21 + 12 = 4 + 50 -> 54
// The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.
//
// Now one can sort the first names in decreasing order of the winning numbers.
// When two people have the same winning number sort them alphabetically by their first names.
//
// #Task:
// Return the first name of the participant whose rank is n (ranks are numbered from 1)
//
// #Note:
// If names is empty, return "No participants".
// If rank is greater than the number of participants, return "Not enough participants".

const rank = (names, weights, rank) => {
    if (names === "") return "No participants"
    names = names.split(',')
    if (rank > names.length) return "Not enough participants"
    let nameRank = {}
    for (let i = 0; i < names.length; i++) {
      let name = names[i]
      nameRank[name] = name.toLowerCase().split("").map(c => c.charCodeAt() - 96)
      nameRank[name].push(name.length)
      nameRank[name] = nameRank[name].reduce((a, b) => (a + b)) * weights[i]
    }
    let orderedNames = Object.keys(nameRank).sort((a, b) => nameRank[b] - nameRank[a] || (a < b ? -1 : 1))
    return orderedNames[rank - 1]
}

console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4));
console.log(rank("Lagon,Lily", [1, 5], 2));
console.log(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8));
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6));
console.log(rank("Emma,Samantha,Chloe,Lily,Abigail,Sophia,William,Aiden,Grace,Aubrey,Alexander,Benjamin,Olivai,Addison,Lyli,Robert,Lagon,Olivia,Ella,Jayden,Sofia,Natalie,Mason,Michael", [4,3,3,3,3,3,3,3,6,3,1,5,6,4,5,4,1,5,4,3,6,6,4,4], 13));
