// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook"); // 백슬러쉬를 이용해 '를 사용

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // ramainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3, 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3, 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3, 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 3, 2

// 4. Assignment operators(할당하는 오퍼레이터)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 첫번째로 true인 값을 찾는다
console.log(`or : ${value1 || value2 || check()}`); // 하나라도 먼저 true면 true를 반환하기 때문에 연산이 복잡할수록 뒤로 배치

// && (and), 첫번째로 false인 값을 찾는다
console.log(`or : ${value1 && value2 && check()}`); // 하나라도 먼저 false면 false를 반환하기 때문에 연산이 복잡할수록 뒤로 배치

// nullableObject && nullableObject.something
/* if (nullableObject != null) {
  nullableObject.something;
} */

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("⏳");
  }
  return true;
}

// ! (not)
console.log(!value1); // 값을 반대로 바꿔줌

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion (타입을 변경해서 검사)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion (타입을 신경씀)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true

// equality = puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("You ar amazing coder");
} else {
  console.log(unknown);
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy, (조건이 맞을 때만 실행)
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first, (블럭을 먼저 실행 후 조건검사)
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for : ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i : ${i}, j:${j}`);
  }
}

// break(루프를 끝냄), continue(지금꺼만 넘어가고 다음스텝 이어감)
// Q1. 숫자 0 ~ 10을 continue를 이용해 짝수만 프린트
for (let i = 0; i < 11; i++) {
  if (i % 2 === 1) continue;
  console.log(i);
}

// Q2. 숫자 0~ 10을 루핑하되, 숫자 8을 만나면 그만하기
for (let i = 0; i < 11; i++) {
  if (i > 8) break;
  console.log(i);
}
