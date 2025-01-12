// Variables
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementsByClassName("open");
const menuClose = document.getElementsByClassName("close");
const modalBtn = document.getElementById("btn");
const modalBody = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const couponText = document.getElementById("coupon");

// Menu Open
menuOpen[0].addEventListener("click", () => {
  mobileMenu.style.left = "0";
  menuOpen[0].style.display = "none";
  menuClose[0].style.display = "block";
});
// Menu Close
menuClose[0].addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
  menuOpen[0].style.display = "block";
  menuClose[0].style.display = "none";
});

// Modal
modalBtn.addEventListener("click", showModal);
function showModal() {
  modal.style.display = "flex";
}
modalBody.addEventListener(
  "click",
  () => {
    modal.style.display = "none";
  },
  true
);
modalContent.addEventListener(
  "click",
  () => {
    modal.style.display = "flex";
  },
  true
);
// set timeout runs the ()=> automatically after the specified time
// setTimeout(showModal, 2000)
