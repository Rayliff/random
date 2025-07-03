function startCelebration() {
  document.querySelector('.start-container').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('bg-music').play();

  const typed = new Typed('#typed', {
    strings: [
      'Selamat ulang tahun mamah tercinta!',
      'Semoga panjang umur, sehat selalu, dan bahagia selalu.',
      'Aku sangat sayang mamah ❤️'
    ],
    typeSpeed: 40,
    backSpeed: 20,
    loop: true
  });

  setInterval(() => {
    confetti({
      particleCount: 3,
      angle: 90,
      spread: 55,
      origin: { y: 0.2 }
    });
  }, 300);
}
