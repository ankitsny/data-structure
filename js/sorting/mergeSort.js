const {merge} = require('./mergeSortedArray');

/**
 *      
 * @param {Array<Number>} arr 
 * @description worst and best case = O(nlog(n))
 */
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftArray = mergeSort(arr.slice(0, mid));
    const rightArray = mergeSort(arr.slice(mid));

    return merge(leftArray, rightArray);
}

console.log(mergeSort([1,2,32,12,4,6]))