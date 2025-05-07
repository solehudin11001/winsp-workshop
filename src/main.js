import "./style.css";

// Navigation

const buttonMenu = document.getElementById("button-menu");

buttonMenu.addEventListener("click", () => {
  const isCollapse = buttonMenu.getAttribute("aria-expanded") === "true";
  const mainNav = document.getElementById("menu");

  buttonMenu.setAttribute("aria-expanded", !isCollapse);
  mainNav.classList.toggle("collapse");
});

// Slide

const slides = document.querySelectorAll(".slide__item");
const btnPrev = document.querySelector(".slide__prev");
const btnNext = document.querySelector(".slide__next");

let currentIndex = 0;

// Helper function: Update slide visibility
const updateSlide = () => {
  slides.forEach((slide, index) =>
    slide.classList.toggle("active", index === currentIndex)
  );
};

// Go to specific slide
const goToSlide = (index) => {
  currentIndex = (index + slides.length) % slides.length;
  updateSlide();
};

// Event listener
btnPrev.addEventListener("click", () => goToSlide(currentIndex - 1));
btnNext.addEventListener("click", () => goToSlide(currentIndex + 1));

// Initialize
updateSlide();
