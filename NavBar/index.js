const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav-links");

  burger.addEventListerner("click", () => {
    nav.classList.toggle("nav-active");
  });
};
navSlide();
