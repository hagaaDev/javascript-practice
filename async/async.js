"use strict";

// async & await
// promise를 깔끔하게 사용할 수 있는 방법

// 1. async
function fetchUser() {
  // 네트워크 통신해서 데이터를 받아오는데 10초 소요한다고 가정...

  return "ellie";
}

/*
promise로 바꾼다면 ?

function fetchUser() {
  return new Promise((resolve, reject) => {
    // 네트워크 통신해서 데이터를 받아오는데 10초 소요한다고 가정...
  
    resolve('ellie');
  });
}
*/

async function fetchUser() {
  // 네트워크 통신해서 데이터를 받아오는데 10초 소요한다고 가정...

  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

/* 
promise로 했을 때 위와 같음

function getBanana() {
  return delay(3000)
  .then(()=>"🍌");
}
*/

/* promise로 했을 때 */
function pickFruits() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
pickFruits().then(console.log);

/* async + await으로 했을 때 */
async function pickFruits() {
  // 사과와 바나나는 연관관계가 없으므로 병렬적으로 수행하기 위해 promise를 먼저 만듦
  // promise는 만들면 바로 promise가 실행되기 떄문
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. 유용한 Promise APIs (병렬적 기능 수행할 때 유용함)
// all : 배열안의 모든 Promise들을 기다렸다가 수행함, 배열로 반환
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

// race : 배열의 Promise중에 가장 먼저 return되는 아이만 전달
function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
