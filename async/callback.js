"use strict";

// JavaScript는 동기적이다.
// 호이스팅이 된 이후부터 우리가 작성한 코드의 순서에 맞게 하나하나씩 동작한다.
// hoisting : var, 함수 선언들이 자동적으로 제일 위로 올라가는 것
console.log("1");
setTimeout(() => console.log("2"), 1000); // 비동기
console.log("3");

// 즉각적으로(동기적으로) 실행하는 callback
function prinImmediately(print) {
  print();
}
prinImmediately(() => console.log("hello"));

// 나중에(비동기적으로) 실행하는 callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// callback 지옥 예제
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
