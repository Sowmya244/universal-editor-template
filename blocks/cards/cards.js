// cards.js
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.cards > ul > li');

  // Function to create floating sparkles inside a card
  function createParticles(card, count = 8) {
    const particlesContainer = document.createElement('div');
    particlesContainer.classList.add('particles');

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('span');
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const delay = Math.random() * 6; // stagger animation
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      particle.style.animationDelay = `${delay}s`;
      particlesContainer.appendChild(particle);
    }

    card.appendChild(particlesContainer);
  }

  // Apply floating animation and hover tilt
  cards.forEach((card) => {
    // Random float duration and offset
    const floatDuration = 5 + Math.random() * 3; // 5-8s
    const floatOffset = Math.random() * 5;       // 0-5s
    card.style.animation = `floatCard ${floatDuration}s ease-in-out ${floatOffset}s infinite alternate`;

    // Add tilt on hover
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 5; // max 5deg
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });

    // Add sparkle particles
    createParticles(card, 6);
  });

  // Optional: fade-in cards when scrolling into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach((card) => observer.observe(card));
});
