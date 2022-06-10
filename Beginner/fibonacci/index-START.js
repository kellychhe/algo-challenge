/*
Write a function to return the nth element in Fibonacci sequence,
where the sequence is:
    [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]
*/


function fibonacci(n) {
    // parameter: is the nth element the fib sequence
    // return: the number at that nth point of the sequence
    // example: fibonacci(6) = 8 because the number 8 is the 6th element in the fib sequence
    // eg. fibonacci(10) = 55 because the number 55 is the 10th element in the fib sequence
    // pseudocode:
    // define a first num 
    // define second num
    // define a counter
    // do a while loop that adds them together
    let previous = 0
    let current = 1
    let counter = 1
    while (counter <= n){
        let temp = 0
        temp = previous + current 
        previous = current
        current = temp

        counter++
    }
    return current
}

// while loop is linear O(n)
module.exports = fibonacci