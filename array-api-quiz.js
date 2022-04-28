"use strict";

// Q1. make a string out of an array (배열을 string으로 변환)
{
  // answer

  const fruits = ["apple", "banana", "orange"];
  const Q1 = fruits.join("");
  console.log(`Q1 = ${Q1}`);
}

{
  // solution
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join();
  console.log(`Q1 result = ${result}`);
}

// Q2. make an array out of a string (string을 배열로 변환)
{
  // answer

  const fruits = "🍎, 🥝, 🍌, 🍒";
  const Q2 = fruits.split(",");
  console.log(`Q2 =`, Q2); // `${Q2}로 표기하면 문자로 표기되니 주의`
}

{
  // solution
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2); // 2번째 인자는 limit으로 배열의 크기를 지정할 수 있음
  console.log(`Q2 result =`, result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] (배열의 순서를 거꾸로 만들기)
{
  // answer

  const array = [1, 2, 3, 4, 5];
  const Q3 = array.reverse();
  console.log(`Q3 = ${Q3}`);
}

{
  // solution
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(`Q3 result =`, result); //배열 그 자체의 순서를 바꾸고 바꾼값 그대로 리턴한다.
  console.log(array);
}

// Q4. make new array without the first two elements (배열의 첫번째와 두번째를 제외한 요소로만 새로운 배열 만들기)
{
  // answer

  const array = [1, 2, 3, 4, 5];
  const Q4 = array.splice(2, array.length - 1);
  console.log(`Q4 = ${Q4}`);
}

{
  // solution
  const array = [1, 2, 3, 4, 5];

  const result1 = array.slice(2, 5); // 마지막 인덱스는 배제되므로 끝까지 출력하고 싶으면 마지막인덱스 +1을 해야한다.
  console.log(`Q4 slice =`, result1);
  const result2 = array.splice(0, 2); // 배열 그 자체에서 선택된 요소를 삭제하기때문에 새로운 배열을 만드는것이 아님!!!
  console.log(`Q4 splice =`, result2);
  //console.log(`Q4 array =`, array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90 (students중에서 점수가 90점인 학생을 찾기)
{
  // answer

  function findScore(element) {
    if (element.score === 90) {
      return true;
    }
  }

  const Q5 = students.find(findScore);
  console.log(`Q5 =`, Q5);
}

{
  // solution

  /* 
  find
  - callback함수는 boolean타입을 return해야한다.
  - 전달된 callback함수가 true이면, 배열에서 첫번째로 찾아진 요소를 return
  - 찾지못하면 undefined를 return
  - predicate라는 callback함수는 배열의 모든 요소들마다 호출이 되어진다. 호출되어지는 callback함수가 true를 return하면 바로 함수를 멈추고 true가 된 그 요소를 return
  */

  const result = students.find((student) => student.score === 90);
  console.log(`Q5 result =`, result);

  /* 
  위의 코드와 같음
  const result2 = students.find(function (student) {
    return student.score === 90;
  }) 
  */
}

// Q6. make an array of enrolled students (배열에서 enrolled값이 true인 학생만 배열로 반환)
{
  // answer
  const Q6 = students.filter((student) => student.enrolled === true);
  console.log(`Q6 =`, Q6);
}

{
  // solution

  /*
  filter
  - callback함수를 전달해서 true인 애들만 모아서 새로운 배열을 전달해줌
  */

  const result = students.filter((student) => student.enrolled);
  console.log(`Q6 result =`, result);
}

// Q7. make an array containing only the students' scores (students배열에서 점수만 모인 새로운 배열 만들기)
// result should be: [45, 80, 90, 66, 88]
{
  // answer
  const Q7 = students.map((student) => student.score);
  console.log(`Q7 =`, Q7);
}

{
  // solution
  /* 
  map
  - 배열의 각각의 item들을 함수를 거쳐 새로운 값으로 변환
  */
}

// Q8. check if there is a student with the score lower than 50 (학생들 중 점수가 50점보다 적은 학생이 있는지 없는지 확인)
{
  // answer
  const Q8 = students.some((student) => student.score < 50);
  console.log(`Q8 =`, Q8);
}

{
  // solution
  /*
  some (배열의 요소 중 하나라도 조건이 만족이 되는지)
  - 배열의 요소 중에서 callback함수가 return이 true가 되는 애가 있는지 없는지 확인하여 true/false 반환

  every (배열의 모든 요소가 조건이 만족하는지)
  - 배열의 모든 요소이 조건을 충족해야지만 true반환
  */

  // 질문의 답은 some이 더 적합하지만 every를 이용한 예시

  const result = !students.every((student) => student.score >= 50);
  console.log(`Q8 result =`, result);
}

// Q9. compute students' average score (학생들의 평균점수 구하기)
{
  // answer
  const Q9 = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  console.log(`Q9 =`, Q9 / students.length);
}

{
  // solution
  /*
  reduce (배열의 결과값을 누적할때)
  - callback함수를 전달하거나 initalValue를 전달 할 수 있다.
  - callback함수는 배열의 모든 요소들마다 호출이 된다.
  - callback함수에서 return된 값은 함께 누적된 결과값을 return한다.
  */

  /* 
  reduceRight
  - 배열의 가장 뒤에서부터 시작
  */
  const result = students.reduce((prev, curr) => prev + curr.score, 0); // initialValue를 넣으면 맨처음 prev값에 해당 값이 들어감
  console.log(`Q9 result =`, result / students.length);
}

// Q10. make a string containing all the scores (학생들의 모든 점수를 string으로 변환)
// result should be: '45, 80, 90, 66, 88'
{
  // answer
  const Q10 = students.map((student) => student.score).toString();
  console.log(`Q10 =`, Q10);
}

{
  // solution
  const result = students.map((student) => student.score).join();
  console.log(`Q10 result =`, result);
}

// Bonus! do Q10 sorted in ascending order (학생들 점수를 string으로 오름차순 정렬)
// result should be: '45, 66, 80, 88, 90'
{
  // answer
  const Bonus = students
    .map((student) => student.score)
    .sort()
    .toString();

  console.log(`Bonus =`, Bonus);
}

{
  // solution

  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();

  console.log(`Bonus result =`, result);
}
