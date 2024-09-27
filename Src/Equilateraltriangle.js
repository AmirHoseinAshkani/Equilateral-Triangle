function triangle() {
  let strStar;
  let strBlank;

  for (let i = 1; i <= 10; i++) {
    strBlank = "";

    for (let j = 1; j <= 10 - i; j++) strBlank += " ";

    strStar = "";

    for (var k = 1; k <= 2 * (i - 1) + 1; k++) strStar += "*";

    console.log(strBlank + strStar);
  }
}
triangle();

