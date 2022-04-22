// Function
// - 프로그램을 구성하는 기본적인 building block
// - 서브프로그램으로도 불리며 여러번 재사용 가능하다
// - 한 가지의 task나 값을 계산하기 위해 쓰임

// 1. Function declaration (함수를 정의하는 방법)
// function name(param1, param2) { body... return; }
// 하나의 함수는 하나의 일만 한다.
// 함수의 이름은 동사의 형태로, command형식으로 무엇을 하는지를 정의하는 것이 좋다.
// JS에서 function은 object이다.

function printHello() {
  console.log("Hello"); // => 함수의 정의
}
printHello(); // => 함수 호출

function log(message) {
  console.log(message);
}
log("Hi@@@"); // => 파라미터를 전달하여 함수 동작
log(1234); // => 데이터타입을 정의하지 않았지만 JS가 알아서 문자열로 인식하여 출력

// 2. Parameters
// premitive parameters : 메모리에 value가 들어있기 때문에 value가 그대로 전달
// object parameters : 메모리에 reference가 저장되기 때문에 reference 전달
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (ES6에 추가됨)
// 사용자가 함수를 호출할 때 파라미터값을 주지 않아도, 함수에 default 파라미터값을 넣어두면 해당 값이 출력됨
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // Hi! by unknown

// 4. Rest parameters (ES6에 추가됨)
function printAll(...args) {
  // => 호출단의 인자를 파라미터로 받아 배열형태로 전달
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
// 부모에서 정의된 변수가 자식에서 접근 가능하나, 자식에서 정의된 변수를 부모에서 접근은 불가
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message); // hello
    let childMessage = "hello";
  }
  //console.log(childMessage); // Uncaught ReferenceError: childMessage is not defined ( 자식에서 선언된 변수에 대해 부모 함수가 조회할 수 없음 )

  // return이 정의되지 않은 경우 return undefined가 선언된 것과 같다.
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum : ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    // 조건이 맞지 않을때를 빨리 리턴시키고
    return;
  }
  // long upgrade logic... // 조건이 맞을 때만 필요한 로직을 실행
}

/* ************************************************************************************************ */
// First-class function
// 함수가 다른 변수와 마찬가지로 변수에 할당 가능하다
// 함수에 파라미터로 전달된다
// 리턴값으로도 리턴된다

// 1. Function expression
// 함수를 선언함과 동시에 변수에 할당할 수 있다.
// 변수에 할당된 함수를 또 다른 변수에 할당 가능하다.
// 함수 declaration도 호이스팅이 된다. (함수가 선언되기 이전에 호출해도 된다.)
//
const print = function () {
  // 함수에 이름이 없는 것을 anonymous function이라고 부름(익명함수)
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// 디버깅할 때 stack traces에 이름이 나오기 위해서 사용
// 또는 함수안에서 또 다른 함수(자기자신)를 호출할 때 사용
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo); // no!
randomQuiz("love you", printYes, printNo); // yes!

// Arrow function
// 항상 익명함수
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint2 = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b; // 블럭을 쓰게되면 return을 써야한다.
};

// IIFE : Immediately Invoked Function Expression (선언한 함수를 바로 실행할 때)
function hello() {
  console.log("IIFE");
}
hello();

// 위처럼 함수를 호출하던 것을 아래처럼 할 수 있다.
(function hello() {
  console.log("IIFE");
})();

// Function Quiz
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return console.log(a + b);
      break;
    case "substract":
      return console.log(a - b);
      break;
    case "divide":
      return console.log(a / b);
      break;
    case "multiply":
      return console.log(a * b);
      break;
    case "remainder":
      return console.log(a % b);
      break;
    default:
      return "계산식이 정의되지 않았습니다.";
      break;
  }
}
calculate("add", 3, 2);
