for (let i = 1; i <= userInputNum; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

for (let i = 1; i <= userInputNum; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log("");
}

for (let i = 1; i <= userInputNum; i++) {
  let ascii = 65;
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(ascii) + " ");
    ascii++;
  }
  console.log("");
}

for (let i = userInputNum; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

for (let i = 1; i <= userInputNum; i++) {
  for (let j = 1; j <= userInputNum - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

for (let i = 1; i <= userInputNum; i++) {
  for (let j = 1; j <= userInputNum; j++) {
    if (i == j || i + j == userInputNum + 1) {
      process.stdout.write("* ");
    } else process.stdout.write(" ");
  }
  console.log("");
}

for (let i = 1; i <= userInputNum; i++) {
  for (let j = 1; j <= 2 * userInputNum - 1; j++) {
    if (i == j || i + j == 2 * userInputNum) {
      process.stdout.write("* ");
    } else process.stdout.write(" ");
  }
  console.log("");
}
