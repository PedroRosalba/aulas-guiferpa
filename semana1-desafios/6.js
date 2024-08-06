function getMostFrequentElement(arr) {
    if (arr.length === 0) {
        return null; 
    }

    const frequencyMap = new Map(); 
    for (const element of arr) {
        frequencyMap.set(element, (frequencyMap.get(element) || 0) + 1);
    }

    let maxCount = 0;
    let mostFrequentElement = null;

    for (const [element, count] of frequencyMap) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequentElement = element;
        }
    }

    return mostFrequentElement;
}

let array = [1, 3, 2, 3, 4, 2, 3, 5];
let mostFrequent = getMostFrequentElement(array);
console.log(mostFrequent); 
