var arr = [1,3,0,9];

var i = 0;
var j;
while(i < 4){
    j = i + 1;
    while(j < 4){
        if (arr[j] > arr[i]){
            var temp = arr[i]; //temp recebe 1 (i=0)
            arr[i] = arr[j]; //i recebe o 3 -> arr = [3,3,0,9]
            arr[j] = temp; //j recebe o temp que eh o 1 -> arr = [3,1,0,9]

            //arr[i] = arr[j];
            //arr[j] = arr[i]; isso aqui taria errado
        }
        j += 1;
    }
    i += 1;
}

console.log(arr);