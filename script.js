// Typing animation for hero textgit init
const text = "Welcome to My Blender 3D World 🌐";
let i = 0;
function typingEffect() {
  if (i < text.length) {
    document.querySelector(".typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typingEffect, 70);
  }
}
typingEffect();

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Reveal elements on scroll
window.addEventListener("scroll", reveal);
function reveal() {
  const reveals = document.querySelectorAll(".reveal");
  for (let r of reveals) {
    const windowHeight = window.innerHeight;
    const revealTop = r.getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) r.classList.add("active");
  }
}

// Back to top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    topBtn.style.display = "block";
  else topBtn.style.display = "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
