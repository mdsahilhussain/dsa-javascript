let arr = [10, 20, 5, 30, 49];

let max = Math.max(arr[0], arr[1]);
let max_2nd = Math.min(arr[0], arr[1]);

for (let i = 2; i <= arr.length; i++) {
  if (arr[i] > max) {
    max_2nd = max;
    max = arr[i];
  } else if (arr[i] > max_2nd) {
    max_2nd = arr[i];
  }
}
console.log(max_2nd);
