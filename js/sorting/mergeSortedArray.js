/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function merge(arr1, arr2) {
    let finalArray = []
    let l = 0;
    let r = 0;

    while (l < arr1.length && r < arr2.length) {
        if (arr1[l] < arr2[r]){
            finalArray.push(arr1[l]);
            l++;
        }else {
            finalArray.push(arr2[r]);
            r++;
        }
    }

    while (l < arr1.length){
        finalArray.push(arr1[l++]);
    }

    while (r < arr2.length){
        finalArray.push(arr2[r++]);
    }
    return finalArray;
}


// const arr = merge([1,2,3,5,6,7,8,9], [2,4,6,9,10]); 
// console.log(arr);

exports.merge = merge;