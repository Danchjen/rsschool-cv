"use strict";

//LETTERS ANIMATION

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const headingPrimary = document.querySelector(".heading-primary");
const headingSpans = document.querySelectorAll(".heading-span");

function animate(string) {
  let iterations = 0;
  const interval = setInterval(() => {
    string.innerText = string.innerText
      .split("")
      .map((letter, index) => {
        return index < iterations
          ? string.dataset.value[index]
          : letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations > string.dataset.value.length) clearInterval(interval);

    iterations += 1 / 4;
  }, 30);
}

animate(headingSpans[0]);
animate(headingSpans[1]);

//SMOOTH SCROLLING

const navLinks = document.querySelectorAll(".nav-link");

for (let navLink of navLinks) {
  if (navLink) {
    navLink.addEventListener("click", function (e) {
      e.preventDefault();
      const navlinkID = this.getAttribute("href");
      document.querySelector(navlinkID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
}

//BURGER
const burgerBtn = document.querySelector(".burger-btn");
const burgerBox = document.querySelector(".burger-box");
const burgerLine = document.querySelector(".burger-line");
const navList = document.querySelector(".nav-list");

burgerBtn.addEventListener("click", hideNav);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", hideNav);
});

function hideNav() {
  burgerLine.classList.toggle("active");
  burgerBox.classList.toggle("active");
  navList.classList.toggle("active");
  document.body.classList.toggle("lock");
}
