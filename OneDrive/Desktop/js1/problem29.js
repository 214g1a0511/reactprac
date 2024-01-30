let input = [2, 7, 8, 6, 10, 3, 12, 15];
let count = 0;
for (let i = 1; i < input.length; i++) {
  if (even(input[i-1]) && even(input[i+1])) {
    count++;
  }
}
console.log(count);

function even(n) {
  if (n % 2 == 0) {
    return true;
  }
}