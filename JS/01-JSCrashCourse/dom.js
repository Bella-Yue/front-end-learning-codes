// // single element
// console.log(document.getElementById("my-form")); // form#my-form
// console.log(document.querySelector(".container")); // section.container
// console.log(document.querySelector("h1")); // h1

// // multiple element
// console.log(document.querySelectorAll(".item")); // NodeList(3)
// console.log(document.getElementsByClassName("item")); // HTMLCollection(3)
// console.log(document.getElementsByTagName("li")); // HTMLCollection(3)

// // loop
// const items = document.querySelectorAll(".item");
// items.forEach((element) => {
//   console.log(element); // li.item
// });

// const itemss = document.querySelector(".items");
// console.log(itemss); // ul.item
// // itemss.lastElementChild.remove();
// itemss.firstElementChild.textContent = "hello";
// itemss.children[1].innnerText = "Brand";
// itemss.lastElementChild.innerHTML = "<h1>hello</h1>";

// const btn = document.querySelector(".btn");
// btn.style.background = "red";

// // listen
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
//   console.log(e.target.id);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
// });

// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault();
//   document.querySelector(".items").lastElementChild.innerHTML = "<h2>over</h2>";
// });
// btn.addEventListener("mouseout", (e) => {
//   e.preventDefault();
//   document.querySelector(".items").lastElementChild.innerHTML = "<h2>out</h2>";
// });

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
