const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const content = document.getElementById("content");

openBtn.onclick = () => {
  intro.style.display = "none";
  content.style.display = "block";
  typeLetter();
};

/* Letter typing */
const letter = `From the moment you came into my life,
everything changed.

You are my favorite thought,
my calm place,
my forever.

This little letter is just a reminder
that I love you more than words ❤️`;

const signatureText = "Forever yours,\nAchutty";

let i = 0;
function typeLetter() {
  if (i < letter.length) {
    document.getElementById("letterText").innerHTML += letter[i];
    i++;
    setTimeout(typeLetter, 40);
  } else {
    setTimeout(typeSignature, 500);
  }
}

let s = 0;
function typeSignature() {
  if (s < signatureText.length) {
    document.getElementById("signature").innerHTML +=
      signatureText[s] === "\n" ? "<br>" : signatureText[s];
    s++;
    setTimeout(typeSignature, 80);
  }
}

/* Image modal */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".gallery img").forEach(img => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  };
});
modal.onclick = () => modal.style.display = "none";

/* Song buttons */
const audios = document.querySelectorAll(".song audio");
const buttons = document.querySelectorAll(".song button");

function toggleSong(index) {
  audios.forEach((audio, i) => {
    if (i === index) {
      if (audio.paused) {
        audio.play();
        buttons[i].textContent = "⏸ Pause";
      } else {
        audio.pause();
        buttons[i].textContent = "▶ Play";
      }
    } else {
      audio.pause();
      buttons[i].textContent = "▶ Play";
    }
  });
}

/* Hearts */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.onresize = resize;

const hearts = Array.from({ length: 60 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 20 + 10,
  speed: Math.random() + 0.5,
  opacity: Math.random()
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    ctx.globalAlpha = h.opacity;
    ctx.font = `${h.size}px Arial`;
    ctx.fillText("❤", h.x, h.y);
    h.y -= h.speed;
    if (h.y < -50) h.y = canvas.height + 50;
  });
  requestAnimationFrame(animate);
}
animate();

/* Fade in on scroll */
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach(fade => observer.observe(fade));

