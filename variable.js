/*  
1. Use strict

순수 자바스크립트를 선언할 때 상단에 'use strict'를 선언하는 것이 좋다.
자바스크립트의 유연한 특성으로 인해 선언되지 않은 변수의 값을 할당하거나 기존에 존재하는 변수의 프로토타입을 변경하는 등의 비상식적 개발을 방지해준다.
ECMAScript 5에 추가되어 있다.

  a = 6 이라고 선언했을 때

  'use strict'를 선언하지 않았을 때 -> 브라우저에서 아무 문제 없음
  'use strict'를 선언했을 때 -> 에러가 발생함
*/
"use strict";

/* 
2. Variable (변수) read/write

- let (ES6에서 추가된 변수)
: 변수를 선언할 수 있는 유일한 키워드

- var : 쓰지말것!
1. 선언하기전에 값을 할당할 수 있음
2. 값 할당 전에 출력할 수 있음
  console.log(age);  // => undefined로 나옴
  age = 4;
  var age;

3. 이런 현상을 var hoisting이라고 함

  * hoisting이란?
  : 어디에 선언했는지 위치와 상관없이 선언을 항상 맨 위로 끌어올려 주는 것

4. 블록 스코프를 지정해도 어디에서나 사용할 수 있음
  {
    age = 4;
    var age;
  }
  console.log(age); // 4

- constant (read only)
: 한번 값을 할당하고 나면 더 이상 바꿀 수 없음
: 다시는 변경 하지 않을 데이터 타입을 사용할 것
 => 보안상의 이유
 => 다양한 thread들이 동시에 값을 변경할 수 있는 상황을 방지
 => 다른 개발자들의 실수 방지

 const daysInWeek = 7;
 const maxNumber = 5;

 @@@@@@@@@ Note !
 Immutable data types : primitive types, frozen objects (i.e. object.freeze())
 Mutable data types : all objects by default are mutable in JS
*/
let globalName = "global Name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

/* 
4. Variable types
 1) primitive 타입 : 더 이상 나눠질 수 없는 작은 한 가지의 타입 (single item)
 number, string, boolean, null, undefined, symbol

 2) object 타입 : single item을 한 단위로 묶어서 관리할 수 있게 해줌
 function, first-class function

  * first-class function ?
  : 다른 데이터 타입처럼 함수도 변수로 할당이 가능
  : 함수의 파라미터 인자로도 전달 됨
  : 함수의 return 타입으로 함수를 리턴하는 것이 가능

*/

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type: ${typeof count}`);
console.log(`value : ${size}, type: ${typeof size}`);

// number = specail numberic values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 크롬과 파이어폭스만 인식
const bigInt = 123456789012345678901234567890n; // over (-2**53  ~  2**53)
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol
// map을 만들거나 자료구조에서 고유한 식별자가 필요하거나, 동시 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 식별자를 주기 위해 사용
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false : 동일한 string을 작성해도 다른 심볼로 만들어진다.

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true : 동일한 string을 작성했을 때 동일한 심볼을 만들고 싶을 경우 사용
console.log(`value: ${symbol1.description}, type:${typeof symbol1}`); // symbol은 바로 출력하면 에러뜨기 때문에 .description을 이용해 string으로 변환하여 사용해야함

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 }; // ellie는 const로 선언되어 변경이 불가하지만, 내부의 name, age는 각각 값을 다시 할당 가능
ellie.age = 21;

/* 
5. Dynamic typing
*/
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // hello, string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 1, number
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
console.log(text.charAt(0)); // Uncaught TypeError: text.charAt is not a function
