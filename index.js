const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const mottoText = "Code it. Fix it. Slay it.";
let i = 0;

function typeMotto() {
  if (i < mottoText.length) {
    document.getElementById("motto").innerHTML += mottoText.charAt(i);
    i++;
    setTimeout(typeMotto, 100);
  }
}

window.addEventListener("load", typeMotto);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
