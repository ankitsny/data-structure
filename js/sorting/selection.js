/**
 * find the index of smallest element
 * move it towards the begining
 */

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }

    return arr;
}

console.log(selectionSort([2,32,345,465,3,2,465,76,32,3124665,76,879,865432,312]))