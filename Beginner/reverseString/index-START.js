/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return text.split('').reverse().join('')
}

const reverseStr2 = (str) => {
    const array = [];  for (let i = str.length-1; i >= 0; i--) {
      array.push(str[i])  
    } 
     return array.join('')}

module.exports = reverseString