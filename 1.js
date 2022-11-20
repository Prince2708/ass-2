let side1 = 3;
let side2 = 1;
let side3 = 5;

let valid =
  side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2;

if (valid) {
  console.log("it is a valid Triangle");
} else {
  console.log("not a valid Triangle");
}

if (side1 == side2 && side2 == side3) {
  console.log("equilateral Triangle");
} else if (side1 == side2 || side2 == side3 || side3 == side1) {
  console.log("isosceles triangle");
} else {
  console.log("scalene triangle");
}
