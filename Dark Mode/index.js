const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (document.querySelector(".toggle p").innerHTML === "Light Mode") {
    document.querySelector(".toggle p").innerHTML = "Dark Mode";
    console.log("hi");
  } else {
    document.querySelector(".toggle p").innerHTML = "Light Mode";
  }
});
