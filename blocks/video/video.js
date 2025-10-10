export default function decorate(block) {
  const video = block.querySelector('video');
  const title = block.querySelector('.videoblock-title');
  const playBtn = block.querySelector('.videoblock-play-btn');

  // Toggle play/pause on title click
  if (title && video) {
    title.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  // Play/pause on overlay button
  if (playBtn && video) {
    playBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
      } else {
        video.pause();
        playBtn.style.display = 'block';
      }
    });

    video.addEventListener('play', () => {
      playBtn.style.display = 'none';
    });

    video.addEventListener('pause', () => {
      playBtn.style.display = 'block';
    });
  }
}
