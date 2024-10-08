function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; 

        } else {
            result.push(right[rightIndex]);
            rightIndex++; 
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2); 
    const left = array.slice(0, middle); 
    const right = array.slice(middle); 

    return merge(mergeSort(left), mergeSort(right));
}

const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); 


// [2,3,9] , [3,6,9]
// [3,]