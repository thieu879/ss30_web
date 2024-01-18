function dem(arr) {
    let n = arr.length;
    let count = 0;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 2; ++i) {
        let k = i + 2;

        for (let j = i + 1; j < n; ++j) {
            while (k < n && arr[i] + arr[j] > arr[k]) {
                k++;
            }

            if (k > j) {
                count += k - j - 1;
            }
        }
    }

    return count;
}

let arr = [4, 6, 3, 7];
console.log("Tao duoc so tam giac la:",dem(arr));
