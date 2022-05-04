"use strict";

// Promise는 자바스크립트의 내장 오브젝트이고 비동기적인 것을 수행할 때 콜백함수 대신에 사용할 수 있는 유용한 오브젝트
// - State : 프로세스가 무거운 process를 수행하고 있는 중(pending)인지, 기능 수행이 완료되어서 성공(fulfilled)했는지, 실패(rejected)했는지 등의 상태에 대한 이해
// - Producer와 Consumer의 차이점을 아는 것 : 우리가 필요로 하는 데이터를 제공하는 사람과 이 데이터를 사용하는 사람의 차이점

// 1. Producer
// 새로운 Promise가 만들어질 때, executor 함수가 자동적으로 실행
const promise = new Promise((resolve, reject) => {
  /* Promise를 만드는 순간 executor가 실행되므로 사용자가 요구 시에만 실행되어야 할 경우 불필요한 네트워크 통신을 하지 않도록 유의!!! */

  // 무거운 작업들 (network, read files) 처리
  console.log("doing something...");
  setTimeout(() => {
    // resolve("ellie"); // 성공적으로 받아온 데이터를 가공해서 전달한 값
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers : then, catch, finally

// .then : 값이 정상적으로 잘 수행이 된다면 (값을 전달해도 되고, promise를 전달할 수도 있음)
// .catch : 에러발생 상황
// .finally : 성공 실패 여부와 상관없이 마지막에 수행됨
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🍔";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
