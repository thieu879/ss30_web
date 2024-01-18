function inSoLe(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        if(i%2!=0){
            console.log(i);
        }
        if (sum % 2 == 0) {
            sum -= i;
        }
    }
    console.log(sum);
}
let n = prompt("Nhập n:");
inSoLe(parseInt(n));
