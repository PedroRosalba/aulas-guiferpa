var i = 0; var j = 0;

var arr = [1,3,0,9];

var swap; 

while(i < 4){
    // swap = false;
    while(j < 4){
        if (arr[j] > arr[i]){
            var temp = arr[i]; //temp recebe 1 (i=0)
            arr[i] = arr[j]; //i recebe o 3
            arr[j] = temp; //j recebe o temp que eh o 1
            // swap = true;
        }
        j += 1;
        // if(swap == false){
        //     break;
        // }
    }
    i += 1;
}

console.log(arr);