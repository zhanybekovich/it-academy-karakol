const menuBtn = document.querySelector(".header-menu-togler");
const nav = document.querySelector(".header-nav");
const closeBtn = document.querySelector(".header-menu-close");

menuBtn.addEventListener("click", function () {
  nav.classList.add("header-nav--active");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("header-nav--active");
});
