"use strict";

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name"]); // 원하는 property만 json으로 변환할 수 있음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  // 세밀하게 통제하고 싶을 경우 callback함수를 이용할 수 있음
  console.log(`key : ${key}, value : ${value}`);
  return key === "name" ? "sunhee" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); // stringify할 떄 함수는 변환이 안되기 때문에 JSON을 Obj로 변환한 이 객체에는 함수가 없다

console.log(rabbit.birthDate.getDate());

const obj2 = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj2.birthDate.getDate()); // key값이 birthDate일때만 Object를 다시 할당 해줌
console.log(obj.birthDate.getDate()); // Uncaught TypeError: obj.birthDate.getDate is not a function (birthDate는 string이기 때문에 JSON을 obj로 가져올때도 string으로 할당되었다)
