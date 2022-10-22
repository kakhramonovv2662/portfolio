const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".switch").classList.toggle("open-switch");
});

window.addEventListener("scroll", function () {
  console.log("sakom");
  if (document.querySelector(".switch").classList.contains("open-switch")) {
    document.querySelector(".switch").classList.remove("open-switch");
  }
});

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.querySelector("#white_logo").classList.add("block");
    document.querySelector("#dark_logo").classList.add("none");
  } else {
    document.querySelector("#white_logo").classList.remove("block");
    document.querySelector("#dark_logo").classList.remove("none");
  }
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
    console.log("salom");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
