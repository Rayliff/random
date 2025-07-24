function startCelebration() {
  document.querySelector('.start-container').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('bg-music').play();

   // Ketik kalimat 1
  const typed1 = new Typed('#typed-1', {
    strings: ['Selamat ulang tahun mamah tercinta!'],
    typeSpeed: 100,
    showCursor: false,
    onComplete: () => {
      // Ketik kalimat 2 setelah selesai
      const typed2 = new Typed('#typed-2', {
        strings: [''],
        typeSpeed: 100,
        showCursor: false,
        onComplete: () => {
          // Ketik kalimat 3 setelah selesai
          const typed3 = new Typed('#typed-3', {
            strings: ['The one and only Queen in the family❤️'],
            typeSpeed: 100,
            showCursor: false
          });
        }
      });
    }
  });

  // Confetti tetap jalan
  setInterval(() => {
    confetti({
      particleCount: 3,
      angle: 90,
      spread: 55,
      origin: { y: 0.2 }
    });
  }, 300);
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(() => plusSlides(1), 3000); // Ganti slide setiap 3 detik

const messages = [
  {
    name: "Papah",
    avatar: "foto2.png",
    text: "Trm ksh atas semuanya, Muachhhh muachhh muachhh 😘😘😘🥰😍"
  },
  {
    name: "Raihan",
    avatar: "foto3.png",
    text: "Mamah, terima kasih atas segalanya. Maaf atas segala kekurangan dan kesalahan Raihan selama ini. Semoga mamah selalu sehat (jaga kesehatan, olahraga minimal hari minggu kita jogging) dan diberi umur panjang biar mamah bisa liat Raihan sukses nanti ya mah. Raihan sayang mamah 💙🥳"
  },
  {
    name: "Rifky",
    avatar: "foto4.jpg",
    text: "Tidak ada yang lebih baik daripada pulang ke rumah dan makan makanan enak dan santai buatan mamah bersama keluarga tercinta"
  },
  {
    name: "Raffa",
    avatar: "foto5.jpg",
    text: "Selamat ulang tahun mamah, pesan Raffa terima kasih menjadi mamah yang sabar dalam merawat Raffa dan kakak Raffa 🌸"
  }
];

function showMessage(index) {
  const modal = document.getElementById("message-modal");
  const data = messages[index];
  document.getElementById("msg-avatar").src = data.avatar;
  document.getElementById("msg-name").textContent = data.name;
  document.getElementById("msg-text").textContent = data.text;
  modal.classList.remove("hidden");
}

function closeMessage() {
  document.getElementById("message-modal").classList.add("hidden");
}

window.addEventListener("click", function(e) {
  const modal = document.getElementById("message-modal");
  if (e.target === modal) {
    closeMessage();
  }
});
