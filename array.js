"use strict";

// Array

// 1.. 배열의 선언(Declaration)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 마지막 index

console.clear();
// 3. 배열 전체 루프
// fruits안의 모든 과일 출력
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push : 어떤 아이템을 배열의 제일 뒤에 추가하고 싶을 때
fruits.push("🍓", "🍑", "🍍");
console.log(fruits);

// pop : 배열의 제일 뒤부터 아이템을 지우고 싶을 때
fruits.pop();
console.log(fruits);

// unshift : 어떤 아이템을 배열의 제일 앞에서부터 추가하고 싶을 때
fruits.unshift("🍉", "🥝");
console.log(fruits);

// shift : 어떤 아이템을 배열의 제일 앞에서부터 제거하고 싶을 때
fruits.shift();
console.log(fruits);

// note!! shift, unshift는 pop과 push보다 매우매우 느리다 (기존 데이터들이 움직이기 때문)

// splice : 아이템을 지정된 포지션에서 지우기
// Array.splice(startIndex, deleteCount); 시작인덱스부터 몇개까지 지울건지
// Array.splice(1) 처럼 몇개나 지울건지 지정하지 않으면 해당 인덱스부터 모든것을 다 지움
fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 1, "🍇", "🍋"); // 1번 인덱스부터 1개 지운후에 그 자리에 포도랑 레몬추가
console.log(fruits);

// combine two arrays
// concat : Array1.concat(Array2)
// Array1에 Array2라는 아이템을 받아 새로운 배열로 리턴함
const fruit2 = ["🍈", "🍒"];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍑")); // 복숭아의 인덱스 확인 => 있다면 몇번째인지?
console.log(fruits.indexOf("🥥")); // 코코넛의 인덱스 확인 => 없으면 -1

// includes
console.log(fruits.includes("🍎")); // 배열에 사과가 있다면 true, 없다면 false 반환

// lastIndexOf
console.clear();
fruits.push("🥝");
console.log(fruits); // 배열의 첫번째와 마지막에 같은 값dlek.
console.log(fruits.indexOf("🥝")); // 0 => 같은 값 중 제일 첫번째 인덱스를 만나면 그 값을 리턴
console.log(fruits.lastIndexOf("🥝")); // 5 => 제일 마지막 인덱스부터 조회하여 첫번째를 리턴
