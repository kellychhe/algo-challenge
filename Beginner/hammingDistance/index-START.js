/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    //parameter: two equal length strings
    //return: a number that is the number of places where the character is different in the string
    //example: E.g hammingDistance('rover', 'river') // should return 1
    //pseudocode
    // set a counter
    // iterate through the string(s)
    //compare if the char are the same. if diff add one to counter
    let ham = 0
    for (let i = 0; i < stringA.length; i++){
        if (stringA[i] !== stringB[i]){
            ham++
        }
    }
    return ham
}

// loop is linear O(n)

module.exports = hammingDistance