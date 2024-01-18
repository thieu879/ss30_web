// Đệ quy là một kỹ thuật trong lập trình, nơi một hàm gọi lại 
// chính nó. Đây là một cách hiệu quả để giải quyết các vấn đề 
// có thể được chia nhỏ thành các vấn đề tương tự nhưng nhỏ hơn.



function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
  
function printFibonacciSequence(count, i = 0) {
    if (count > 0) {
        console.log(fibonacci(i));
        printFibonacciSequence(count - 1, i + 1);
    }
}
  
let inputNumber = 10;
printFibonacciSequence(inputNumber);
  