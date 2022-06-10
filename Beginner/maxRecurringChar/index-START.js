/* CHALLENGE
Given a string of text, find and return the most recurring character. 
e.g maxRecurringChar('aabacada') // will return 'a'
*/

function maxRecurringChar(text) {
    // parameters is string of text
    // return the character that occurs the most
    // example: e.g maxRecurringChar('abibnbtb') // will return 'b'
    // psuedocode:
    // set filtered array as text string
    // set array as recurring char max
    let textArray = text.split('')
    let recurringArray = []
    for (let i = 0; i < text.length;i++){
        let filterArray = []
        filterArray = textArray.filter(char => char === textArray[i])

        if (recurringArray.length < filterArray.length){
            recurringArray = filterArray
        }
    }
    return recurringArray[0]
}

function maxRecurringChar(text) {
    // make each letter a property in the object and add one to value if the property already exists
    // set a variable for the object max value and object max property
    // loop through the object and reassign the max variables if value is higher
    const textObj = {}
    for (char of text){
        if (textObj[char] > 0) {
            textObj[char] += 1
        } else{
            textObj[char] = 1
        }
    }
    let max = 0
    let character = ''
    for (const char in textObj){
        if (textObj[char] > max){
            character = char
            max = textObj[char]
        }
    }
    return character
}


// split is linear 
// is a filter method in a loop quadradic?



module.exports = maxRecurringChar;