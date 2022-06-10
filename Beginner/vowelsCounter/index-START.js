/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3 
*/


function vowelsCounter(text) {
    // parameters: a string
    // return: the number of vowels
    // example: e.g vowelsCounter('anehizxcv') // will return 3 
    // pseudocode: 
    // define counter variable
    // create array of vowels
    // if char in vowel array add to count

    let vowelCount = 0
    let vowels = 'aeiou'.split('')
    for (let i = 0; i < text.length; i++){
        if (vowels.includes(text[i].toLowerCase())){
            vowelCount++
        }
    }
    return vowelCount
}



module.exports = vowelsCounter;
