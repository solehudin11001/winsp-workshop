import "./style.css";

// Navigation

const buttonMenu = document.getElementById("button-menu");

buttonMenu.addEventListener("click", () => {
  const isCollapse = buttonMenu.getAttribute("aria-expanded") === "true";
  const mainNav = document.getElementById("menu");

  buttonMenu.setAttribute("aria-expanded", !isCollapse);
  mainNav.classList.toggle("collapse");
});
