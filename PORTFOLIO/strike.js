const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuButton.addEventListener('click', () => {
        dropdownMenu.classList.toggle('hidden');
    });
});

function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".elem1", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.3,
    })
    .from("#foot", {
      y: 10,
      opacity: 0,
      duration: 1,
      delay: -1.5,
      stagger: 0.2,
      ease: Expo.easeInOut,
    });
}

firstPageAnim();

document.addEventListener("DOMContentLoaded", () => {
  const words = ["Developer", "Coder", "Web Developer"];
  const el = document.querySelector(".typewriter");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let showCursor = true;

  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);

    // cursor only when word fully typed or deleted
    const isPaused = (!isDeleting && charIndex === currentWord.length) || (isDeleting && charIndex === 0);
    const cursor = isPaused && showCursor ? "|" : "";

    el.textContent = currentText + cursor;

    if (isPaused) showCursor = !showCursor;

    let delay = 100;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      delay = 100;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      delay = 50;
    } else {
      // pause before switching typing direction
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      delay = 700;
    }

    setTimeout(type, delay);
  }

  type();
});

document.addEventListener("DOMContentLoaded", () => {
  function type() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    el.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 50);
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 1000);
    }
  }

  type();
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { x: 0, y: 0 };
const particles = [];
const colors = ["#ff0066", "#ff3399", "#cc33ff", "#6600ff"];

class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 0.7 + 0.2;
    this.speedX = vx + (Math.random() - 0.5) * 2;
    this.speedY = vy + (Math.random() - 0.5) * 2;
    this.alpha = 1;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.alpha -= 0.01;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 25;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

let lastX = canvas.width / 2;
let lastY = canvas.height / 2;

window.addEventListener("mousemove", (e) => {
  let dx = e.clientX - lastX;
  let dy = e.clientY - lastY;

  for (let i = 0; i < 2; i++) {
    particles.push(new Particle(e.clientX, e.clientY, dx * 0.1, dy * 0.1));
  }

  lastX = e.clientX;
  lastY = e.clientY;
});

function animate() {

  ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


function Secondpage() {
  var t1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",      // Jab #page2 viewport mein aaye
      start: "top 80%",       // Top of #page2 reaches 80% of screen
      toggleActions: "play none none none", // Play only once
       pin:true,
      markers: true           // ✅ Testing ke liye: scroll markers show
    }
  });

  t1.from("#page2", { opacity: 0, duration: 1 })
    .from(".img11", { x: 80, opacity: 0, duration: 1 });
}

Secondpage();


 gsap.registerPlugin(ScrambleTextPlugin);

  gsap.to("#bit", {
    duration: 1.5,
    scrambleText: {
      text: "A Bit About Me",
      chars: "@#%#&##@$&%#@%&$@",
      speed: 0.5,
      revealDelay: 0.2,
    },
    repeat: -1,        // infinite loop
    repeatDelay: 0.4,  // delay between loops (optional)
    yoyo: true         // go back and forth (optional for effect)
  });


  const container = document.getElementById('container');
const totalDots = 150;

for (let i = 0; i < totalDots; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.background = `hsl(${i * 10}, 100%, 50%)`;
  dot.style.transform = `rotate(${i * (360 / totalDots)}deg) translate(200px)`;
  dot.style.animationDelay = `${i * 0.02}s`;
  container.appendChild(dot);
}

const teamMembers = [
  { name: "Lanuage", role: "Java" },
  { name: "Python", role: "Voice Assistance" },
  { name: "WebDevlopment", role: "Resposive Website" },
  { name: "Linux", role: "Security" },
  { name: "Server", role: "Administration Managment" },
  { name: "Sql", role: "Database Server" }
];

const cards = document.querySelectorAll("#team-section .card");
const dots = document.querySelectorAll("#team-section .dot");
const memberName = document.querySelector("#team-section .member-name");
const memberRole = document.querySelector("#team-section .member-role");
const leftArrow = document.querySelector("#team-section .nav-arrow.left");
const rightArrow = document.querySelector("#team-section .nav-arrow.right");

let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
  if (isAnimating) return;
  isAnimating = true;

  currentIndex = (newIndex + cards.length) % cards.length;

  cards.forEach((card, i) => {
    const offset = (i - currentIndex + cards.length) % cards.length;
    card.classList.remove("center", "left-1", "left-2", "right-1", "right-2", "hidden");

    if (offset === 0) card.classList.add("center");
    else if (offset === 1) card.classList.add("right-1");
    else if (offset === 2) card.classList.add("right-2");
    else if (offset === cards.length - 1) card.classList.add("left-1");
    else if (offset === cards.length - 2) card.classList.add("left-2");
    else card.classList.add("hidden");
  });

  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentIndex));

  memberName.style.opacity = "0";
  memberRole.style.opacity = "0";

  setTimeout(() => {
    memberName.textContent = teamMembers[currentIndex].name;
    memberRole.textContent = teamMembers[currentIndex].role;
    memberName.style.opacity = "1";
    memberRole.style.opacity = "1";
  }, 300);

  setTimeout(() => {
    isAnimating = false;
  }, 800);
}

leftArrow.addEventListener("click", () => updateCarousel(currentIndex - 1));
rightArrow.addEventListener("click", () => updateCarousel(currentIndex + 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => updateCarousel(i)));
cards.forEach((card, i) => card.addEventListener("click", () => updateCarousel(i)));

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
  else if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) updateCarousel(currentIndex + 1);
    else updateCarousel(currentIndex - 1);
  }
});

updateCarousel(0);


