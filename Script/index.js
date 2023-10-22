const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let themeColor = document.querySelector("#theme-color");
let body = document.querySelector("body");

let D = new Date();
let hour = D.getHours();

if (hour > 20) {
  themeColor.setAttribute("content", "#17242A");
} else {
  themeColor.setAttribute("content", "#f7f7fa");
}

const per_up_btn_up = document.querySelector(".per-up-btn-up");

function fillScrollLine() {
  const windowHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scrolled = window.scrollY;
  const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

  per_up_btn_up.style.backgroundImage =
    "conic-gradient(var(--purple)" +
    percentScrolled +
    "%, var(--green-light) 0)";
}

window.addEventListener("scroll", fillScrollLine);
