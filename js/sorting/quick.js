function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

/**
 * 
 * @param {Array<Number>} arr 
 */
function getPivot(arr, start = 0, end = arr.length - 1) {
    let count = start;
    const val = arr[start];
    for (let i = start + 1; i <= end; i++){
        if (arr[i] < val){
            count++;
            arr = swap(arr, i, count);
        }
    }
    arr = swap(arr, start, count);
    // console.log(arr);
    return count;
}

/**
 * Quick Sort
 * @param {Array<Number>} arr 
 * @param {Number} left 
 * @param {Number} right 
 * @description best case  O(nlog(n))
 *              Worst case O(n^2)                  When array is sorted
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivot = getPivot(arr, left, right);
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}


const arr = [21,1,40,40,1,4,6,8,20,45,33]
console.log(quickSort(arr))
// [2,4,6,8,20,21, 45, 33]