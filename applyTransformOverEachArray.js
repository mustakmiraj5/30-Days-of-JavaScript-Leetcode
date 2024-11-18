/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        let temp = fn(arr[i], i)
        newArray.push(temp)
    }
    return newArray
};


/**
 * This problem is the implementation of Array.map() function.
 */