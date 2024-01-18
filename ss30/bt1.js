function doiXung(arr) {
  let result = false;

  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - i - 1]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}
let arr = [1, 2, 3, 4, 3, 2, 1];
console.log(doiXung(arr));

