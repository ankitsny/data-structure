/**
 * 
 * @param {Number} num 
 * @param {Number} pos
 * @returns {Number} 
 */
function getDigit(num, pos) {
    return Math.floor(Math.abs(num) / Math.pow(10, pos) % 10 );
}

/**
 * Count no of digits in a number
 * @param {Number} num 
 */
function countDigit(num) {
    return (Math.floor(Math.log10(Math.abs(num))) + 1) || 0;
}

/**
 * find length of largest number
 * @param {Array<Number>} arr 
 * @returns {Number}
 */
function mostDigits(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, countDigit(arr[i]));
    }
    return max;
}

/**
 *  
 * @param {Array<Number>} arr 
 * @description best and worst case: O(kn)
 *              Space complexity O(k + n)
 */
function redixSort(arr) {
    const maxLim = mostDigits(arr);
    console.log(maxLim)
    for (let k = 0; k < maxLim; k++) {
        const bucket = Array.from({length: 10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k);
            bucket[digit].push(arr[i]);
        }
        arr = [].concat(...bucket);
    }
    return arr;
}

console.log(redixSort([1,12,2,3434,54,532,21,32,546,5,76,7,4553,42312323,23]))