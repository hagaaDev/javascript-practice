"use strict";

// Objects
// 변수 하나당 하나의 값만 담을 수 있다.
// object = { key : value };

// 1. Literals and properties
// 각각의 정보를 변수로 담아 각각 관리 할 경우 인자가 많아질수록 관리가 어려워짐
// 따라서 하나의 오브젝트로 관리하여 정보를 간편하게 전달
const name = "sunhee";
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

const me = { name: "sunhee", age: 4 };
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
print(me);

// 자바스크립트는 프로그램이 동작하고 있을때 동적으로 타입이 결정되는 언어기 때문에 뒤늦게 property를 추가하거나 삭제 할 수 있다.
me.hasJob = true;
console.log(me.hasJob);

delete me.hasJob;
console.log(me.hasJob);

// 오브젝트를 만드는 방법은
// 중괄호를 이용하여 만드는 방법과 ('object literal' syntax)
// 클래스를 템플릿을 이용하여 만드는 방법이 있다. ('object constructor' syntax)
const obj1 = {};
const obj2 = new Object();

// 2. Computed properties
// 오브젝트의 .문법을 이용해 접근하거나 [" "]를 사용한 string으로도 접근 가능하다.
// key의 property는 string타입으로 해야한다!!!!
// .은 코딩하는 그 순간 그 key에 해당하는 값을 받아오고 싶을 때 사용
// [' ']은 우리가 어떤 key가 필요할지 정확하게 모를 때, runtime에서 사용하고 싶을 때 사용
console.log(me.name);
console.log(me["name"]);
me["hasJob"] = true;
console.log(me.hasJob);

function printValue(obj, key) {
  console.log(obj.key); // obj에서 key라는 property가 있는지 확인하여 없을 경우 undefined를 출력함
  console.log(obj[key]); // 동적으로 key에 대한 value를 받아올 때 유용하게 사용할 수 있음
}
printValue(me, "name");

// 3. Property value shorthand
// key와 value의 이름이 동일하다면 생략가능
// 순수하게 object를 생성하는 함수는 첫글자를 대문자로 표기하고 return을 쓰지 않고 this.~를 쓴다.
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("sunhee", 28);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator : property existence check (오브젝트 안에 key가 있는지 확인)
console.log("name" in me);
console.log("age" in me);
console.log("random" in me);

// 6. for..in vs for..of
// for (key in obj) : 오브젝트의 key값 반복
console.clear();
for (const key in me) {
  console.log(key);
}

// for (value of iterable) : 배열의 value값 반복
const array = [1, 2, 4, 5];
for (const value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "sunny", age: "28" };
const user2 = user;
user2.name = "sunhee";
console.log(user); // 메모리의 같은 reference를 가르키고 있기 때문에 { name: "sunhee", age: "28" };

// old way
const user3 = {};
for (const key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
