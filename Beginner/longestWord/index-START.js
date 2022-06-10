/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // parameter: a string of text
    // results: the longest word in the string
    // example: 
    // pseudocode: 
    // make the string into an array
    // set an empty word variable
    // make a for loop that compares the lengths and reassigns the word if its longer
    let textArray = text.split(' ')
    let longWord = textArray[0]
    for (let i = 1; i < textArray.length; i++){
        if (longWord.length < textArray[i].length){
            longWord = textArray[i]
        }
    }
    return longWord
}
// split is linear O(n)
// for loop is linear O(n)
//function is O(2n) ===> O(n)

module.exports = longestWord