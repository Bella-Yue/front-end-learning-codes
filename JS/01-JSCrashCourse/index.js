// Array
const numbers = new Array(1, 2, 3, 4, "frr");
numbers.push("a");
numbers.unshift("fff");
numbers.pop();
console.log(Array.isArray(numbers));
console.log(numbers.indexOf("fff"));
console.log(numbers);

// Object
const person = {
  firstName: "john",
  lastName: "don",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "boston",
    state: "ma",
  },
};
console.log(person);
console.log(person.hobbies[0], person.address.city);
const {
  firstName,
  lastName,
  address: { city },
} = person;
person.email = "john@gmail.com";

// Arrays of Object
const todos = [
  {
    id: 1,
    text: "one",
    isCompleted: false,
  },
  {
    id: 2,
    text: "two",
    isCompleted: true,
  },
  {
    id: 3,
    text: "three",
    isCompleted: false,
  },
];
console.log(todos);

//JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// loop through arrays
for (let todo of todos) {
  console.log(todo);
}

todos.forEach(function (todo) {
  console.log(todo);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

const todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

// switch
const x = 11;
const color = x > 10 ? "red" : "blue";
switch (color) {
  case "red":
    console.log("red");
    break;
  case "blue":
    console.log("blue");
    break;
  default:
    console.log("null");
    break;
}

// function
function addNums(num1 = 1, num2 = 2) {
  return num1 + num2;
}
console.log(addNums());
// arrow function
const addNums2 = (num1 = 1, num2 = 2) => {
  console.log(num1 + num2);
};
const addNums3 = (num1 = 1, num2 = 2) => num1 + num2;
const addNums4 = (num1) => num1 + 5;
todos.forEach((todo) => console.log(todo));

// object oriented programming
// constructor function
// function AnotherPerson(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
//   this.getBirthYear = function () {
//     return this.dob.getFullYear();
//   };
//   this.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   };
// }
// Use Class do the same thing
class AnotherPerson {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// instantiate object
const aperson1 = new AnotherPerson("john", "doe", "4-3-1999");
const aperson2 = new AnotherPerson("mary", "dom", "3-2-1999");
console.log(
  aperson2.getFullName(),
  aperson2.dob,
  aperson1.dob.getFullYear(),
  aperson2.getBirthYear()
);
// prototype
AnotherPerson.prototype.getTeacher = function () {
  return `${this.firstName}'s teacher is 'Larry'`;
};
console.log(aperson2.getTeacher());
