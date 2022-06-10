/*
Return the lowest index at which a value (second argument) should be
inserted into an array (first argument) once it has been sorted. The
returned value should be a number. E.g

whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater
than 1(index 0), but less than 2(index 1).
*/



function whereIBelong(arr, num) {
   //parameters: num is a value to be inserted into the array array is the array
   //return: the index number that the value should go
   //example: whereIBelong([1,2,3,4], 1.5) // should return 1 because it is greater than 1(index 0), but less than 2(index 1).
   //pseudocode:
   //add num to the array
   //sort the array in ascending order
   //find index of num
   let array = arr
   array.push(num)
   array.sort((a, b) => a - b)
   return array.indexOf(num)
}


module.exports = whereIBelong