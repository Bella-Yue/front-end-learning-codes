// typeof  instanceof
const people = ["mary", "emy", "john"];
const one = 1;
const str = "heel";
const b = false;
const person = {
  firstName: "Aaron",
  lastName: "Powell",
};
function sayHello(person) {
  console.log("hello" + person.firstName);
}

console.log("-------typeof-------");
console.log(typeof people); // object
console.log(typeof one); // number
console.log(typeof str); // string
console.log(typeof b); // boolean
console.log(typeof person); // object
console.log(typeof sayHello); // function

console.log("-------instanceof-------");
console.log(people instanceof Array); // true
console.log(one instanceof Number); // false
console.log(str instanceof String); // false
console.log(b instanceof Boolean); // false
console.log(person instanceof Object); // true
console.log(sayHello instanceof Function); // true

const two = new Number(2);
console.log(two instanceof Number); // true

// Date
const now = new Date();
const randomDate = new Date(2015, 0, 4, 3, 45, 58);
const win95Launch = new Date(1995, 7, 24);
console.log(randomDate); // 2015-01-03T19:45:58.000Z
console.log(win95Launch); // 1995-08-23T16:00:00.000Z

console.log(now); // 2022-05-12T07:19:50.407Z
now.setFullYear(2014);
now.setMonth(3);
now.setDate(4);
now.setHours(16);
now.setMinutes(34);
now.setSeconds(58);
console.log(now); // 2014-04-04T08:34:58.407Z
console.log(now.getTime()); // 1396600498407

// promise
function promiseTimeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// promiseTimeout(2000)
//   .then(() => {
//     console.log("Done");
//     return promiseTimeout(1000);
//   })
//   .then(() => {
//     console.log("Also done");
//     return Promise.resolve(42);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => {
//     console.log("Error");
//   });
/*
Done
Also done
42
*/

// await
function promiseTimeout2(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

async function longRunningOperation() {
  return 42;
}

async function run() {
  console.log("Start");
  await promiseTimeout2(2000);
  const response = await longRunningOperation();
  console.log(response);
  console.log("end");
}

run();

// package.json
require("dotenv").config();
const port = process.env.PORT;
console.log(port);
