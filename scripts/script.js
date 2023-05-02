const ul = document.getElementsByTagName("ul")[0];
const sections = document.querySelectorAll(".page");
const links = document.querySelectorAll("ul .links .main-link");
const email = document.getElementsByClassName("email")[0];
const overlay = document.getElementsByClassName("overlay");
const hamburger = document.getElementsByClassName("hamburger")[0];
const carouselitems = document.getElementsByClassName("carousel-content");
const hands = document.querySelectorAll(".hand");
const projects = document.querySelectorAll(".slide");
const image = document.querySelectorAll(".image");
const arrows = document.querySelectorAll(".arrow");
var currentproject = 0;
var firstRun = true;

openCloseMenu = () => {
  if (window.innerWidth < 900)
    if (ul.classList.contains("hamburger-fullscreen")) {
      ul.classList.remove("hamburger-fullscreen");
      hamburger.classList.remove("open");
    } else {
      ul.classList.add("hamburger-fullscreen");
      hamburger.classList.add("open");
    }
};

emailCopy = () => {
  navigator.clipboard.writeText(email.innerHTML);
  email.innerHTML = "copied";
  setTimeout(() => {
    email.innerHTML = "contact@mennoveerkamp.com";
  }, "1000");
};

setActiveTab = () => {
  var current = "";
  for (i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;
    if (pageYOffset >= sectionTop - 400) {
      current = sections[i].getAttribute("id");
    }
  }
  for (i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
    if (links[i].classList.contains(current)) {
      links[i].classList.add("active");
    }
  }
};

carousel = (nextorprev) => {
  carouselitems[currentproject].classList.add("dissolve");
  setTimeout(function () {
    carouselitems[currentproject].style.display = "none";
    carouselitems[currentproject].classList.remove("dissolve");
    if (nextorprev == 1) {
      currentproject += 1;
    }
    if (nextorprev == 0) {
      currentproject -= 1;
    }
    if (currentproject > carouselitems.length - 1) {
      currentproject = 0;
    }
    if (currentproject < 0) {
      currentproject = carouselitems.length - 1;
    }
    carouselitems[currentproject].style.display = "block";
    carouselitems[currentproject].classList.add("appear");
    setTimeout(function () {
      carouselitems[currentproject].classList.remove("appear");
    }, 200);
  }, 100);
};

revealHands = () => {
  for (var i = 0; i < hands.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = hands[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      hands[i].classList.add("handanimation");
    }
  }
};

revealProject = () => {
  if (firstRun) {
    var windowHeight = window.innerHeight;
    var elementTop = projects[0].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      projects[0].classList.add("slideleft");
      projects[1].classList.add("slideleft");
      image[0].classList.add("zoom");
      arrows[0].classList.add("arrowleft");
      arrows[1].classList.add("arrowright");
      setTimeout(function () {
        projects[0].classList.remove("slideleft");
        projects[1].classList.remove("slideleft");
        image[0].classList.remove("zoom");
      }, 2000);
      firstRun = false;
    }
  }
};

scroll = () => {
  setActiveTab();
  revealHands();
  revealProject();
};

window.addEventListener("scroll", scroll);
email.addEventListener("click", emailCopy);

setTimeout(function () {
  overlay[0].style.display = "none";
}, 4000);
