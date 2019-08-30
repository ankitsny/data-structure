/**
 * 
 * Move the heaviest element to the end
 * compare adjacent elements 
 */

// #1
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) { 
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        console.log("i", i);
        let swapped = false;
        for (let j = 0; j < i - 1; j++) {
            console.log('----', j);
            if (arr[j] > arr[j + 1]) {
                swapped = true;
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
        if (!swapped) break;
    }
    return arr;
}

console.log(bubbleSort([5,4,1,2]));