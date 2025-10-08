// cards.js
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cards > ul > li');

  // Floating animation with random phase for each card
  cards.forEach((card) => {
    const floatOffset = Math.random() * 10; // random offset
    const floatDuration = 5 + Math.random() * 3; // 5-8s duration

    card.style.animation = `${card.classList.contains('dream-card') ? 'floatDream' : 'floatTech'} ${floatDuration}s ease-in-out ${floatOffset}s infinite`;
  });

  // Hover tilt effect
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse X inside card
      const y = e.clientY - rect.top; // mouse Y inside card
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 5; // max 5deg
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
  });

  // Optional: Scroll reveal effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach((card) => observer.observe(card));
});
