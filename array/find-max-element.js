let arr = [10, 20, 25, 30, 49];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

for (el of arr) {
  if (max < el) {
    max = el;
  }
}

// find min element
for (el of arr) {
  if (max > el) {
    max = el;
  }
}
