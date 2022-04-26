"use strict";

// Q1. make a string out of an array
{
  // answer

  const fruits = ["apple", "banana", "orange"];
  const Q1 = fruits.join("");
  console.log(`Q1 = ${Q1}`);
}

{
  // solution
}

// Q2. make an array out of a string
{
  // answer

  const fruits = "🍎, 🥝, 🍌, 🍒";
  const Q2 = fruits.split(",");
  console.log(`Q2 =`, Q2); // `${Q2}로 표기하면 문자로 표기되니 주의`
}

{
  // solution
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  // answer

  const array = [1, 2, 3, 4, 5];
  const Q3 = array.reverse();
  console.log(`Q3 = ${Q3}`);
}

{
  // solution
}

// Q4. make new array without the first two elements
{
  // answer

  const array = [1, 2, 3, 4, 5];
  const Q4 = array.splice(2, array.length - 1);
  console.log(`Q4 = ${Q4}`);
}

{
  // solution
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

// Q5. find a student with the score 90
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

  const res = students.find((student) => student.score === 90);
  console.log(res);
}

// Q6. make an array of enrolled students
{
  // answer
  const Q6 = students.filter((student) => student.enrolled === true);
  console.log(`Q6 =`, Q6);
}

{
  // solution
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // answer
  const Q7 = students.map((student) => student.score);
  console.log(`Q7 =`, Q7);
}

{
  // solution
}

// Q8. check if there is a student with the score lower than 50
{
  // answer
  const Q8 = students.some((student) => student.score < 50);
  console.log(`Q8 =`, Q8);
}

{
  // solution
}

// Q9. compute students' average score
{
  // answer
  const Q9 = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  console.log(`Q9 =`, Q9 / students.length);
}

{
  // solution
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // answer
  const Q10 = students.map((student) => student.score).toString();
  console.log(`Q10 =`, Q10);
}

{
  // solution
}

// Bonus! do Q10 sorted in ascending order
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
}
