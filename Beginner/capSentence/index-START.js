/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
  //parameter: text, string of two or more words
  //will return a string with first letters capitalized
  //examples: capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 

  let textArray = text.split(' ')
  let capText = textArray.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  return capText.join(' ')

  //go through each word and change the first letter
  
}

// split is linear O(n)
// map is linear O(n)
//toUpperCase() toLowerCase() constant O(2)
// join is linear O(n)
// 3n + 2 => linear

module.exports = capSentence