/**
 * insertion sort
 * place the element to the correct position
 * placement should start from the left
 */


function insertionSort (arr) {
    for (let i = 1; i < arr.length; i++) {
        let currVal = arr[i];
        let j;
        for (j = i - 1; j >= 0 && currVal < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currVal;
    }
    return arr;
}

console.log(insertionSort([3,2,1]))


