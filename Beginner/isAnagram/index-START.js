/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



// function isAnagram(stringA, stringB) {
//     //parameter: two strings
//     //return: boolean
//     // example isAnagram('silent', 'listen') // should return true
//     // pseudocode
//     // sort strings into an array alphabetically
//     // use a loop to compare
//     // if char do not equal return false, otherwise true
//     let arrayA = stringA.split('').sort()
//     let arrayB = stringB.split('').sort()

//     for (let i = 0; i < arrayA.length; i++){
//         if (arrayA[i] !== arrayB[i] || arrayA.length !== arrayB.length){
//             return false
//         }
//     }
//     return true
// }

// two sort methods/two split methods linear O(4n)
// the loop is also linear O(n)
//function is linear O(5n) ====> O(n)

function isAnagram(stringA, stringB) {
    //parameter: two strings
    //return: boolean
    // example isAnagram('silent', 'listen') // should return true
    // pseudocode
    // set strings to arrays
    // set arrayB to filterArray variable
    // loop the arrayA filter each character out of arrayB
    // if the filtered array is empty after loop, false
    let arrayA = stringA.split('')
    let arrayB = stringB.split('')
    if (arrayA.length !== arrayB.length){
        return false
    }
    let filterArray = arrayB
    for (let i = 0; i < arrayA.length; i++){
        filterArray = filterArray.filter(char => char !== arrayA[i])
    }
    if (filterArray.length === 0){
        return true
    }else{
        return false
    }
}

// two split methods linear O(2n)
// the loop is also linear O(n)
//function is linear O(3n) ====> O(n)

module.exports = isAnagram