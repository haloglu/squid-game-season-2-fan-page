// Toggle menu
const sidebar = document.getElementById("mySidebar");
const menuBtn = document.getElementById("menuToggle");

function toggleNav() {
  sidebar.classList.toggle("active");
  if (menuBtn) {
    menuBtn.classList.toggle("active");
  }
}

if (menuBtn) {
  menuBtn.addEventListener("click", toggleNav);
}

function checkScreenSize() {
  if (window.innerWidth >= 1350) {
    sidebar.classList.remove("active");
    if (menuBtn) {
      menuBtn.classList.remove("active");
    }
  }
}

window.addEventListener("load", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Music and choose number

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".choose-number");
  const greetingDiv = document.getElementById("player-greeting");
  const music = document.getElementById("bg-music");

  button.addEventListener("click", function () {
    music.volume = 0.3;

    music.currentTime = 14;

    music.play().catch(function (error) {
      console.log("Müzik çalarken bir hata oluştu:", error);
    });

    setTimeout(function () {
      music.pause();
    }, 30000);

    const target = Math.floor(Math.random() * 456) + 1;
    const duration = 6000;
    const startTime = performance.now();

    greetingDiv.style.display = "block";

    function animateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      let progress = elapsed / duration;
      if (progress > 1) progress = 1;

      const currentNumber = Math.floor(progress * target);

      greetingDiv.innerHTML = `<span class="player-number">${currentNumber}</span> numaralı oyuncu hoş geldin!`;

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      }
    }
    requestAnimationFrame(animateNumber);
  });
});

// Swiper

var swiper = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Fancybox

Fancybox.bind("[data-fancybox]", {
  groupAll: true,
  hideScrollbar: false,
});
const actorCards = document.querySelectorAll(".actor-card");

actorCards.forEach((card) => {
  const favoriteIcon = card.querySelector(".favorite-icon");
  const actorId = card.querySelector("h3").textContent;

  const isFavorite = localStorage.getItem(actorId) === "true";
  card.setAttribute("data-favorite", isFavorite ? "true" : "false");
  card.style.backgroundColor = isFavorite ? "#28a745" : "#d02a4b";

  favoriteIcon.addEventListener("click", (e) => {
    e.stopPropagation();

    const currentFavorite = card.getAttribute("data-favorite") === "true";
    const newFavorite = !currentFavorite;

    card.setAttribute("data-favorite", newFavorite ? "true" : "false");
    card.style.backgroundColor = newFavorite ? "#28a745" : "#d02a4b";

    localStorage.setItem(actorId, newFavorite ? "true" : "false");
  });
});
