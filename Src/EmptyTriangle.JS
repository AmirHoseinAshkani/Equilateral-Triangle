function EmptyTriangle(length) {
  for (let i = 1; i <= length; i++) {
    let Stars = "";

    for (let j = 1; j <= length - i; j++) {
      Stars += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k === 1 || k === 2 * i - 1 || i === length) {
        Stars += "*";
      } else {
        Stars += " ";
      }
    }
    console.log(Stars);
  }
}

EmptyTriangle(5);
