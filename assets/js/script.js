// Toggle menu

const sidebar = document.getElementById("mySidebar");
const menuBtn = document.getElementById("menuToggle");

function toggleNav() {
  sidebar.classList.toggle("active");
  menuBtn.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleNav);

// Music and choose number

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".choose-number");
  const greetingDiv = document.getElementById("player-greeting");
  const music = document.getElementById("bg-music"); // Müzik elementini seç

  button.addEventListener("click", function () {
    // Müzik sesini yarıya indir (0-1 arasında bir değer)
    music.volume = 0.3; // Ses seviyesi %30

    // Müzik dosyasını 1 dakika (60 saniye) sonra başlat
    music.currentTime = 14; // 60 saniye

    // Müzik çalmaya başlasın
    music.play().catch(function (error) {
      console.log("Müzik çalarken bir hata oluştu:", error);
    });

    setTimeout(function () {
      music.pause();
    }, 30000);

    // 1 ile 456 arasında rastgele bir sayı belirle
    const target = Math.floor(Math.random() * 456) + 1;
    const duration = 6000; // Animasyon süresi 6 saniyeye çıkarıldı
    const startTime = performance.now();

    greetingDiv.style.display = "block"; // Mesaj alanını görünür yap

    function animateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      let progress = elapsed / duration;
      if (progress > 1) progress = 1;

      // Animasyon ilerlemesine göre sayıyı hesapla
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
