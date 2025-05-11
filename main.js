AOS.init(); // Initialize AOS scroll animations

gsap.from("#hero-subtext", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
  delay: 1, // Add a 1-second delay
});

setTimeout(() => {
  new TypeIt("#hero-subtext", {
    strings: "EVEN 2% IS A LOT.",
    speed: 125,
    waitUntilVisible: true,
    loop: true,
  }).go();
}, 1000); // 1000 milliseconds = 1 second

const hoverBox = document.querySelector(".hover-box");
const hoverText = document.querySelector(".hover-text");

// Hover In Animation
hoverBox.addEventListener("mouseenter", () => {
  gsap.to(hoverText, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power3.out",
  });
});

// Hover Out Animation
hoverBox.addEventListener("mouseleave", () => {
  gsap.to(hoverText, {
    opacity: 0,
    y: 20,
    duration: 0.3,
    ease: "power3.in",
  });
  gsap.to(dino, { opacity: 0, y: 10, duration: 0.3, ease: "power3.in" });
});
// Select elements
const hoverBox1 = document.querySelector(".hover-box");
const hoverText1 = document.querySelector(".hover-text");

const hoverBox2 = document.querySelector(".hover-box2");
const hoverText2 = document.querySelector(".hover-text2");

// Function to handle hover animation
function addHoverEffect(box, text) {
  box.addEventListener("mouseenter", () => {
    gsap.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(text, {
      opacity: 0,
      y: 10,
      duration: 0.3,
      ease: "power3.in",
    });
  });
}

// Apply hover effects for both text elements
addHoverEffect(hoverBox1, hoverText1);
addHoverEffect(hoverBox2, hoverText2);
const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {
  const targetId = card.getAttribute("data-target");
  const target = document.getElementById(targetId);

  card.addEventListener("mouseenter", () => {
    if (target) target.style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    if (target) target.style.opacity = "0";
  });
});

var tl = gsap.timeline();

tl.from(".navbar-brand", {
  y: -50,
  duration: 1,
  opacity: 0,
  delay: 0.5,
});

tl.from(".nav-item", {
  y: -100,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
});
