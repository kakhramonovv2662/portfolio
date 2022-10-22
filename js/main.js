// Form submit
const elForm = document.querySelector("#form");
const elNameInput = document.querySelector("#name");
const elEmailInput = document.querySelector("#email");
const elSubjectInput = document.querySelector("#subject");
const elTextInput = document.querySelector("#text");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const my_text = `Result is:%0A - <b>Name:</b> <i>${elNameInput.value}</i> %0A - <b>Email:</b> <i>${elEmailInput.value}</i> %0A - <b>Subject:</b> <i>${elSubjectInput.value}</i> %0A - <b>Text:</b> <i>${elTextInput.value}</i>`;

  const token = "5774085143:AAFfqlNVxkCI_kOvesjTCopDUPY37yd0ov0";
  const chat_id = -1001665137044;
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;

  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  elNameInput.value = null;
  elEmailInput.value = null;
  elSubjectInput.value = null;
  elTextInput.value = null;
});

// typing animation

const typed = new Typed(".typing", {
  strings: ["Web Programmer", "Web Developer", "Programmer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// aside
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");

  a.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionToggler();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("activeSec");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("activeSec");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];

    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      console.log("true");
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

const hireMe = document.querySelector(".hire");
hireMe.addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

//toggler

const navTogglerBtn = document.querySelector(".toggle"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionToggler();
});
function asideSectionToggler() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// animation texts

AOS.init();
