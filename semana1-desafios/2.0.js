min = 0;
max = 1000000;
N = Math.floor(Math.random() * (max - min + 1)) + min;

//using a random number

let array = Array(N).fill(0);

for(let i=0; i<N; i++){
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    if(array[i] % 3 == 0){
        console.log(array[i]);
    }
}


