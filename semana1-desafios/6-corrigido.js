let array = [1,2,2,2,3,3,3,3,3,3];

const frequencyMap = new Map(); 

//meu mapa, no elemento i, vou guardar a maior sequencia que começa com o elemento i
//ai o meu maior elemento do mapa vai ser o cara que mais aparece em sequencia

var i = 0; var j;
var entrei;

while( i < array.length ){
    j = i + 1;
    entrei = false;
    while(array[i] == array[j] && j < array.length){
        entrei = true;
        frequencyMap.set(i, (frequencyMap.get(i) || 1) + 1);
        j+=1;
    }
    if(entrei == false){
        frequencyMap.set(i, 1);
    }
    i += 1;
    entrei = false;
}

function findKeyOfGreatestValue(map) {
    let maxKey = null;
    let maxVal = -Infinity; // Start with the lowest possible value

    for (let [key, value] of map) {
        if (value > maxVal) {
            maxVal = value;
            maxKey = key;
        }
    }

    return maxKey;
}

console.log(findKeyOfGreatestValue(frequencyMap));

