function isPrime(a) {
    if (a <= 1) {
        return false;
    }
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
let arr = [1,2,3,4,5,6,7,8,9];
for(let i = 0;i<arr.length;i++){
    if(isPrime(arr[i])){
        console.log(arr[i]);
    }
}