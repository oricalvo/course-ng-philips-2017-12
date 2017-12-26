var arr = [];

arr.push(1);
arr.push(2);

console.log(arr.length);

arr.length = 1;

arr[10] = "aiuhdiduh";

arr.splice(2, 3);

console.log(arr.length);

for(var i=0; i<arr.length; i++) {
    console.log(arr[i]);
}


