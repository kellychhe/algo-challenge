/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/



function fizzBuzz(n) {
    //parameters: the max number
    //return: console.log numbers one through n. numtiples of 3 fizz multiples of 5 buzz, multiples of 15 fizzbuzz
    //example fizzBuzz(6) should give us 1 2 Fizz 4 Buzz 6
    //pseudocode:
    //for loop from 1 to n
    //conditional for % 15, % 3, and % 5
    for(let i = 1; i <= n; i++){
        if (i % 15 === 0){
            console.log('fizzbuzz')
        } else if (i % 3 === 0){
            console.log('fizz')
        } else if (i % 5 === 0){
            console.log('buzz')
        } else{
            console.log(i)
        }
    }
}
//for loop is linear O(n)

module.exports = fizzBuzz