// Variables
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementsByClassName("open");
const menuClose = document.getElementsByClassName("close");
const modalBtn = document.getElementById("btn");
const modalBody = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
const couponText = document.getElementById("coupon");
const overlay = document.getElementById("overlay");

// Menu Open
menuOpen[0].addEventListener("click", () => {
  mobileMenu.style.left = "0";
  overlay.classList.add("overlay");
});
// Menu Close on clicking overlay
overlay.addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
  overlay.classList.remove("overlay");
});

// Menu Close on clicking close btn
menuClose[0].addEventListener("click", () => {
  mobileMenu.style.left = "-100%";
  overlay.classList.remove("overlay");
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
