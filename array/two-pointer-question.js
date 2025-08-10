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

// let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
let pointer_1st = 0;
let pointer_2nd = 0;
while (pointer_1st < arr.length) {
  if (arr[pointer_1st] == 0) {
    let temp = arr[pointer_1st];
    arr[pointer_1st] = arr[pointer_2nd];
    arr[pointer_2nd] = temp;
    pointer_2nd++;
  }
  pointer_1st++;
}
console.log(arr);