// =======================
// HAMBURGER MENU
// =======================
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// =======================
// HERO BACKGROUND & MOTTO
// =======================
window.addEventListener("load", () => {
  const hero = document.querySelector('.hero');

  // Background color animation
  const colors = ['#111133', '#2f80ed', '#ff6ec4', '#9b51e0', '#ffffff']; // black, blue, pink, purple, white
  let colorIndex = 0;
  setInterval(() => {
    hero.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 3000);

  // Motto typing effect
  const mottoText = "Code it. Fix it. Slay it.";
  let i = 0;
  function typeMotto() {
    const mottoEl = document.getElementById("motto");
    if (mottoEl && i < mottoText.length) {
      mottoEl.innerHTML += mottoText.charAt(i);
      i++;
      setTimeout(typeMotto, 100);
    }
  }
  typeMotto();
});

// =======================
// SMOOTH SCROLL
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
