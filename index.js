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
const hero = document.querySelector('.hero');

const colors = ['#111133', '#2f80ed', '#ff6ec4', '#9b51e0', '#42e695']; // your brand colors
let i = 0;

function changeHeroColor() {
  hero.style.background = colors[i];
  i = (i + 1) % colors.length;
}

setInterval(changeHeroColor, 3000); // change every 3 seconds

