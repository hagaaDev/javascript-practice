"use strict";

// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - ES6에 추가
// - syntacical sugar over prototype-based inheritance (프로토타입 위에 문법만 클래스를 추가하도록 변경됨)

// 1. Class declarations (Class 선언)
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// 위에서 정의한 Class를 이용해서 Object 생성
const sunkim = new Person("sunhee", 20);
console.log(sunkim.name);
console.log(sunkim.age);
sunkim.speak();

// 2. Getter와 setters
// 사용자가 바보같은 설정을 해도 그대로 적용못되게 설정값을 주는것
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    // 값을 return
    return this._age;
  }

  set age(value) {
    // 값을 설정
    /* if (value < 0) {
      throw Error('age can not be negative');
    } */
    this._age = value < 0 ? 0 : value;
  }

  /* 
    constructor의 this.age = age;를 선언하면, 
    this.age에서는 getter를 부르고, = age에서는 setter를 부른다.
    set age(value) 내부에서 age를 그대로 사용할 경우 이름이 같기 때문에 무한 루프가 일어날 수 있으므로 변수명을 약간 바꿔준다.
  */
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
// static은 오브젝트마다 할당되는 것이 아니라 class 자체에 있다.
// 오브젝트에 상관없이, 들어오는 데이터에 상관없이 공통적으로 class에서 쓸 수 있는 거라면 static과 static method를 이용해서 작성하는 것이 메모리의 사용을 줄이는데 도움이 된다.
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // 클래스 자체의 static함수를 호출 가능! // Dream Coding

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 사각형이라는 클래스를 만들고 싶다면
class Rectangle extends Shape {} // extends를 사용하여 Shape을 연장 => Shape에서 정의한 fields와 method가 포함됨
class Triangle extends Shape {
  // 필요한 함수만 재정의해서 사용가능 (overwriting). Shape에서 정의한 method는 호출되지 않음
  draw() {
    super.draw(); // 부모의 method도 호출하고 싶을때
    console.log(`🎈`);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw(); // drawing red color of
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽의 오브젝트가 오른쪽의 클래스의 아이인지 확인해서 True / False를 반환
console.log(rectangle instanceof Rectangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof Shape); // True
console.log(triangle instanceof Object); // True : 모든 오브젝트는 자바스크립트의 오브젝트를 상속함
