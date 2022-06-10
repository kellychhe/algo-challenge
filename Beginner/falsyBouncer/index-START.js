/*
Given an array, remove all falsy values from the array
and return an array of only truthy values.

E.g  falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
*/


function falsyBouncer(array) {
    //parameter: array w/ falsy and truthy values
    //example: falsyBouncer([1, 0, null, '', 5]) // should return [1,5]
    //psuedocode
    //make empty array
    // let truthyArray = []
    //loop through each element in array
    // for (let i = 0; i < array.length; i++){
        //if the element is true push into another array
    //     if (array[i]){
    //         truthyArray.push(array[i])
    //     }
    // }
    //return: array of only truthy values
    // return truthyArray
    return array.filter(el => el)
}


// for loop is linear O(n)
// push is constant O(1)
// function is O(n + 1) linear

module.exports = falsyBouncer