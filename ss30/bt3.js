function sapXepKyTu(str) {
    let mangKyTu = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "A" && str[i] <= "Z" || str[i] >= "a" && str[i] <= "z") {
            mangKyTu.push(str[i]);
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "0" && str[i] <= "9") {
            mangKyTu.push(str[i]);
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (!/[a-zA-Z0-9]/.test(str[i])) {
            mangKyTu.push(str[i]);
        }
    }
    return mangKyTu;
}
let inputChuoi = prompt("Nhập vào một chuỗi bất kỳ:");
console.log(sapXepKyTu(inputChuoi));
