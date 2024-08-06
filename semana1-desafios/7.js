min = 0;

function getRandomElement(array){
    N = Math.floor(Math.random() * (array.length - min + 1)) + min;
    console.log(array[N]);
}

let arr = [2,0,5,1,4,3];
getRandomElement(arr);