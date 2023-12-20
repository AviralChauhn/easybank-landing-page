let hambrugerClick = document.getElementById("hamburger-icon");
let modal = document.getElementById("nav-modal");
let closebtn = document.getElementById("close-button");
let navSection = document.getElementById("nav-open-close");
let mockupMobile = document.querySelector(".mobile-mockup");
let openingSection = document.querySelector(".desktop-back");
let openingPara = document.querySelector(".opening-paragraph");
let x = window.matchMedia("(min-width:850px)");
x.addEventListener("change", navIconDisplay);
hambrugerClick.addEventListener("click", navActive);

function navIconDisplay(e) {
  if (x.matches) {
    closebtn.style.display = "none";
    mockupMobile.style.display = "block";
    hambrugerClick.style.display = "none";
    navSection.style.display = "none";
    openingSection.style.opacity = "1.0";
    openingPara.style.opacity = "1.0";
  } else {
    hambrugerClick.style.display = "block";
  }
}
function navActive(e) {
  //   console.log(1);
  hambrugerClick.style.display = "none";
  navSection.style.display = "flex";
  mockupMobile.style.display = "none";
  openingSection.style.opacity = "0.5";
  openingPara.style.opacity = "0.5";
  closebtn.style.display = "block";
}
closebtn.addEventListener("click", navInactive);

function navInactive(e) {
  navSection.style.display = "none";
  mockupMobile.style.display = "block";
  hambrugerClick.style.display = "block";
  openingSection.style.opacity = "1.0";
  openingPara.style.opacity = "1.0";
  closebtn.style.display = "none";
}
