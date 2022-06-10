/* 
Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length. E.g
chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5)
should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
*/

function chunkArray(array, size) {
    //parameters: array and the size of the sub arrays
    //result: all of the sub arrays into an array
    //example: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5) should return [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]
    //pseudocode: 
    //set an empty array
    // while loop length of array is over zero and slice

    let chunks = []
    while (array.length > 0){
        chunks.push(array.slice(0, size))
        array.splice(0,size)
    }
    return chunks
}


module.exports = chunkArray