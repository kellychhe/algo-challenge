/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/
function mergeArrays() {
    let jointArray = []
    for (const argument of arguments){
       jointArray = jointArray.concat(argument)
    }
    for (let i = 0; i < jointArray.length; i++){
        if (jointArray.indexOf(jointArray[i]) !== jointArray.lastIndexOf(jointArray[i])){
            jointArray.splice(jointArray.lastIndexOf(jointArray[i]), 1)
        }
    }
    return jointArray
}

function mergeArrays(...arrays) {

    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    });

    return [...new Set([...jointArray])]

    
}


module.exports = mergeArrays