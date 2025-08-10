let arr = [10, 20, 5, 30, 49];
let lowPointer = 0;
let highPointer = arr.length - 1;
while (lowPointer != highPointer) {
  let temp = arr[lowPointer];
  arr[lowPointer] = arr[highPointer];
  arr[highPointer] = temp;
  lowPointer++;
  highPointer--;
}
console.log(arr);