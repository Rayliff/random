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
        strings: ['Semoga panjang umur, sehat selalu, dan bahagia selalu.'],
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
