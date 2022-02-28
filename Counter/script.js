const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
let count = 0;
let num = document.querySelector("p");

add.addEventListener("click", () => {
  count++;
  num.innerHTML = count;
});

subtract.addEventListener("click", () => {
  count--;
  num.innerHTML = count;
});
